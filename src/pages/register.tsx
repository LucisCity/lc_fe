import type { NextPage } from "next";
import RegisterPage from "../components/auth/register";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";

const Register: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <RegisterPage />
    </PageLayout>
  );
};

export default Register;
