import DocHead from "../../components/layout/doc_head";
import PageLayout from "../../components/layout/PageLayout";
import { InvestDetailPage } from "../../components/invest/detail";

export default function investDetail() {
  return (
    <>
      <DocHead />
      <PageLayout>
        <InvestDetailPage />
      </PageLayout>
    </>
  );
}
