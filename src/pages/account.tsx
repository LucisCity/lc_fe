import type { NextPage } from "next";
import AppLayout from "../components/layout";
import {AccountPage} from "../components/account";

const Account: NextPage = () => {
  return (
    <AppLayout isShowHeader={false} isShowFooter={false}>
      <AccountPage />
    </AppLayout>
  );
};

export default Account;
