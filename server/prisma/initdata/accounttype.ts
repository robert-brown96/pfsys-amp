// import { AccountCategory } from "src/account-types/entities/account-type.entity";
import {
    EnumAccountTypeAccountCategory,
    EnumAccountTypeUnit
} from "@prisma/client";
export const AccountTypesInit: any[] = [
    {
        name: "Bank",
        accountCategory: EnumAccountTypeAccountCategory.Asset,
        unit: EnumAccountTypeUnit.Currency
    },
    {
        name: "Credit Card",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Liability
    },
    {
        name: "Loan",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Liability
    },
    {
        name: "Equity",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Equity
    },
    {
        name: "Retained Earnings",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Equity
    },
    {
        name: "Current Liability",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Liability
    },
    {
        name: "Long-Term Liability",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Liability
    },
    {
        name: "Current Asset",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Asset
    },
    {
        name: "Long-Term Asset",
        unit: EnumAccountTypeUnit.Currency,
        accountCategory: EnumAccountTypeAccountCategory.Asset
    },
    {
        name: "Investment",
        unit: EnumAccountTypeUnit.Stock,
        accountCategory: EnumAccountTypeAccountCategory.Asset
    },
    {
        name: "Retirement",
        unit: EnumAccountTypeUnit.Stock,
        accountCategory: EnumAccountTypeAccountCategory.Asset
    }
];
