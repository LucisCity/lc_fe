import type { NextPage } from "next";
import LoginPage from "../components/auth/login";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";

const Login: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <LoginPage />
    </PageLayout>
  );
};

export default Login;
