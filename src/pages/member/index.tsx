import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { MemberPage } from "../../components/member";

const Member: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <MemberPage />
      </PageLayout>
    </>
  );
};

export default Member;
