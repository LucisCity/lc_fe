import type { NextPage } from "next";
import PageLayout from "../components/layout/PageLayout";
import DocHead from "../components/layout/doc_head";
import VerifyEmailPage from "../components/auth/verify_email";

const Page: NextPage = () => {
  return (
    <PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
      <DocHead />
      <VerifyEmailPage />
    </PageLayout>
  );
};

export default Page;
