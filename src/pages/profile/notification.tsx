import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import { ProfileNotification } from "../../components/profile/notification";

const Notification: NextPage = () => {
  return (
    <>
      <DocHead/>
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          <ProfileNotification/>
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default Notification;
