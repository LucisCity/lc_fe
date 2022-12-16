import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import { ProfileDashboard } from "../../components/profile/dashboard";

// Auto redirect to dashboard page and this file for SEO
const Profile: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          <ProfileDashboard />
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default Profile;
