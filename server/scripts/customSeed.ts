import { PrismaClient } from "@prisma/client";

import { AccountTypesInit } from "../prisma/initdata/accounttype";
import { AccountsInit } from "../prisma/initdata/account";

export async function customSeed() {
    const client = new PrismaClient();
    const username = "admin";

    //replace this sample code to populate your database
    //with data that is required for your service to start
    await client.user.update({
        where: { username: username },
        data: {
            username
        }
    });

    await client.user.upsert({
        where: { username: "system" },
        update: {
            username: "system",
            email: "pfsystem.brown@gmail.com",
            roles: { roles: ["user", "admin"] },
            password: "Guest"
        },
        create: {
            username: "system",
            email: "pfsystem.brown@gmail.com",
            roles: { roles: ["user", "admin"] },
            password: "Guest"
        }
    });

    await client.book.upsert({
        where: { name: "Primary" },
        update: {
            name: "Primary",
            isPrimary: true,
            primaryCurrency: {
                connectOrCreate: {
                    where: { code: "USD" },
                    create: { code: "USD", name: "US Dollar" }
                }
            }
        },
        create: {
            name: "Primary",
            isPrimary: true,
            primaryCurrency: {
                connectOrCreate: {
                    where: { code: "USD" },
                    create: { code: "USD", name: "US Dollar" }
                }
            },
            owner: { connect: { username: "system" } }
        }
    });

    await client.currency.upsert({
        where: { code: "USD" },
        create: { code: "USD", name: "US Dollar" },
        update: {}
    });

    await client.currency.upsert({
        where: { code: "GBP" },
        create: { code: "GBP", name: "British Pounds" },
        update: {}
    });

    await client.book.upsert({
        where: { name: "Adjustment" },
        update: {
            name: "Adjustment",
            isPrimary: false,
            primaryCurrency: {
                connectOrCreate: {
                    where: { code: "USD" },
                    create: { code: "USD", name: "US Dollar" }
                }
            }
        },
        create: {
            name: "Adjustment",
            primaryCurrency: {
                connectOrCreate: {
                    where: { code: "USD" },
                    create: { code: "USD", name: "US Dollar" }
                }
            },
            isPrimary: false,
            owner: { connect: { username: "system" } }
        }
    });

    await Promise.all(
        AccountTypesInit.map(async at => {
            return await client.accountType.upsert({
                where: { name: at.name },
                update: at,
                create: at
            });
        })
    );

    await Promise.all(
        AccountsInit.map(async at => {
            return await client.account.upsert({
                where: { accountNumber: at.accountNumber },
                update: at,
                create: at
            });
        })
    );

    client.$disconnect();
}
