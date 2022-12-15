import type { NextPage } from "next";
import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { InvestDetailPage } from "../../components/invest/detail";

const Page: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <InvestDetailPage />
      </PageLayout>
    </>
  );
};

export default Page;
