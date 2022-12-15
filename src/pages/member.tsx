import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { MemberPage } from "../components/member";
import PageLayout from "../components/layout/PageLayout";

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
