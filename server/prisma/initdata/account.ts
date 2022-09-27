export const AccountsInit: any[] = [
    {
        accountNumber: 10000,
        isSummary: true,
        name: "Bank Accounts",
        accountType: { connect: { name: "Bank" } }
    },
    {
        accountNumber: 21000,
        isSummary: true,
        name: "Credit Cards",
        accountType: { connect: { name: "Credit Card" } }
    },
    {
        accountNumber: 26000,
        isSummary: true,
        name: "Loan Summary",
        accountType: { connect: { name: "Loan" } }
    },
    {
        accountNumber: 30000,
        isSummary: true,
        name: "Equity Summary",
        accountType: { connect: { name: "Equity" } }
    },
    {
        accountNumber: 31000,
        isSummary: true,
        name: "Retained Earnings Summary",
        parent: { connect: { accountNumber: 30000 } },
        accountType: { connect: { name: "Retained Earnings" } }
    }
];
