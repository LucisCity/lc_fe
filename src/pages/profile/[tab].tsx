import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import React from "react";
import AppSetting from "../../components/profile/app";
import { ProfileDashboard } from "../../components/profile/dashboard";
import { ProfileAccount } from "../../components/profile/account";
import { ProfileNotification } from "../../components/profile/notification";
import { useRouter } from "next/router";

enum Tab {
  APP = "app",
  ACCOUNT = "account",
  INVESTMENT = "investment",
  MEMBERSHIP = "membership",
  NOTIFICATION = "notification",
  REFERRAL = "referral",
}

const ProfileTab = () => {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <>
      <DocHead />
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          {tab === Tab.ACCOUNT && <ProfileAccount />}
          {tab === Tab.APP && <AppSetting />}
          {tab === Tab.INVESTMENT && <ProfileDashboard />}
          {tab === Tab.NOTIFICATION && <ProfileNotification />}
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default ProfileTab;
