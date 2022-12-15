import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import React from "react";
import AppSetting from "../../components/profile/app";

const Notification: NextPage = () => {
  return (
    <>
      <DocHead/>
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          <AppSetting/>
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default Notification;
