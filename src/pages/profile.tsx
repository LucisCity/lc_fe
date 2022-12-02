import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { Background } from "../components/landing/components/background";
import PageLayout from "../components/layout/PageLayout";

const Profile: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <h1>profile</h1>
      </PageLayout>
    </>
  );
};

export default Profile;
