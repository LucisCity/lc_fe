import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { MemberPage } from "../components/member";
import AppLayout from "../components/layout";

const Member: NextPage = () => {
  return (
    <>
      <DocHead />
      <AppLayout>
        <MemberPage />
      </AppLayout>
    </>
  );
};

export default Member;
