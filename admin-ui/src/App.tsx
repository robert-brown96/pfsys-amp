import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AccountTypeList } from "./accountType/AccountTypeList";
import { AccountTypeCreate } from "./accountType/AccountTypeCreate";
import { AccountTypeEdit } from "./accountType/AccountTypeEdit";
import { AccountTypeShow } from "./accountType/AccountTypeShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { TransactionLineList } from "./transactionLine/TransactionLineList";
import { TransactionLineCreate } from "./transactionLine/TransactionLineCreate";
import { TransactionLineEdit } from "./transactionLine/TransactionLineEdit";
import { TransactionLineShow } from "./transactionLine/TransactionLineShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { JobTypeList } from "./jobType/JobTypeList";
import { JobTypeCreate } from "./jobType/JobTypeCreate";
import { JobTypeEdit } from "./jobType/JobTypeEdit";
import { JobTypeShow } from "./jobType/JobTypeShow";
import { TransactionScheduleList } from "./transactionSchedule/TransactionScheduleList";
import { TransactionScheduleCreate } from "./transactionSchedule/TransactionScheduleCreate";
import { TransactionScheduleEdit } from "./transactionSchedule/TransactionScheduleEdit";
import { TransactionScheduleShow } from "./transactionSchedule/TransactionScheduleShow";
import { ScheduleEntryList } from "./scheduleEntry/ScheduleEntryList";
import { ScheduleEntryCreate } from "./scheduleEntry/ScheduleEntryCreate";
import { ScheduleEntryEdit } from "./scheduleEntry/ScheduleEntryEdit";
import { ScheduleEntryShow } from "./scheduleEntry/ScheduleEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MainService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="AccountType"
          list={AccountTypeList}
          edit={AccountTypeEdit}
          create={AccountTypeCreate}
          show={AccountTypeShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="TransactionLine"
          list={TransactionLineList}
          edit={TransactionLineEdit}
          create={TransactionLineCreate}
          show={TransactionLineShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="JobType"
          list={JobTypeList}
          edit={JobTypeEdit}
          create={JobTypeCreate}
          show={JobTypeShow}
        />
        <Resource
          name="TransactionSchedule"
          list={TransactionScheduleList}
          edit={TransactionScheduleEdit}
          create={TransactionScheduleCreate}
          show={TransactionScheduleShow}
        />
        <Resource
          name="ScheduleEntry"
          list={ScheduleEntryList}
          edit={ScheduleEntryEdit}
          create={ScheduleEntryCreate}
          show={ScheduleEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
