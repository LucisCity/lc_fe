import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { ProfileLayout } from "../../components/profile";
import React from "react";
import AppSetting from "../../components/profile/app";
import { ProfileDashboard } from "../../components/profile/dashboard/dashboard";
import { ProfileAccount } from "../../components/profile/account";
import { ProfileNotification } from "../../components/profile/notification";
import { useRouter } from "next/router";
import { ProfileInvestment } from "../../components/profile/investment";
import { ProfileReferral } from "../../components/profile/referral/referral";

enum Section {
  DASHBOARD = "dashboard",
  APP = "app",
  ACCOUNT = "account",
  INVESTMENT = "investment",
  NOTIFICATION = "notification",
  REFERRAL = "referral",
}

const ProfileSection = () => {
  const router = useRouter();
  const { section } = router.query;

  return (
    <>
      <DocHead />
      <PageLayout isShowFooter={false}>
        <ProfileLayout>
          {section === Section.ACCOUNT && <ProfileAccount />}
          {section === Section.DASHBOARD && <ProfileDashboard />}
          {section === Section.APP && <AppSetting />}
          {section === Section.INVESTMENT && <ProfileInvestment />}
          {section === Section.REFERRAL && <ProfileReferral />}
          {section === Section.NOTIFICATION && <ProfileNotification />}
        </ProfileLayout>
      </PageLayout>
    </>
  );
};

export default ProfileSection;
