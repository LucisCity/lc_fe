import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { Faq } from "../components/faq";

const Member: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <Faq />
      </PageLayout>
    </>
  );
};

export default Member;
