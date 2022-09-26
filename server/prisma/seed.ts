import { PrismaClient } from "@prisma/client";

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
            email: "pfsystem.brown@admin@gmail.com"
        },
        create: {
            username: "system",
            email: "pfsystem.brown@admin@gmail.com",
            password: "system",
            roles: ["admin"]
        }
    });
    await client.currency.upsert({
        where: { code: "USD" },
        update: {},
        create: { code: "USD", name: "US Dollar" }
    });
    await client.book.upsert({
        where: { name: "Primary" },
        update: {},
        create: {
            name: "Primary",
            primaryCurrency: { connect: { code: "USD" } }
        }
    });

    client.$disconnect();
}
