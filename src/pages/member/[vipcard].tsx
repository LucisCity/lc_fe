import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { VipCardPublic } from "../../components/member/vipcard_public";

const VipCardPublicPage: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <VipCardPublic />
      </PageLayout>
    </>
  );
};

export default VipCardPublicPage;
