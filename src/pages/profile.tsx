import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { Background } from "../components/landing/components/background";
import PageLayout from "../components/layout/PageLayout";
import { ProfilePage } from "../components/profile/index";

const Profile: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout isShowFooter={false}>
        <ProfilePage />
      </PageLayout>
    </>
  );
};

export default Profile;
