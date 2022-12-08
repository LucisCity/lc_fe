import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { InvestPage } from "../../components/invest";

const Page: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <InvestPage />
      </PageLayout>
    </>
  );
};

export default Page;
