import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";
import LogoutPage from "../components/auth/logout";

const Login: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <LogoutPage />
    </PageLayout>
  );
};

export default Login;
