import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import { ProfileInvestment } from "../../components/profile/investment";

const Investment: NextPage = () => {
  return (
    <>
      <DocHead/>
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          <ProfileInvestment/>
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default Investment;
