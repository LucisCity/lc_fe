import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";
import ForgotPage from "../components/auth/forgot";

const Register: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <ForgotPage />
    </PageLayout>
  );
};

export default Register;
