import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import { ProfileAccount } from "../../components/profile/account";

const Dashboard: NextPage = () => {
  return (
    <>
      <DocHead/>
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          <ProfileAccount/>
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default Dashboard;
