import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";
import ResetPasswordPage from "../components/auth/reset";

const Register: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <ResetPasswordPage />
    </PageLayout>
  );
};

export default Register;
