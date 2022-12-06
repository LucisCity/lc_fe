import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { Background } from "../components/landing/components/background";
import PageLayout from "../components/layout/PageLayout";
import { ProfilePage } from "../components/profile";
import { ProfilePage1 } from "../components/profile/index2";

const Profile: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout isShowFooter={false}>
        {/*<ProfilePage />*/}
        <ProfilePage1 />
      </PageLayout>
    </>
  );
};

export default Profile;
