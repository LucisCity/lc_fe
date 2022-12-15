import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";

import PageLayout from "../components/layout/PageLayout";
import { MarketplacePage } from "../components/marketplace";

const Marketplace: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <MarketplacePage />
      </PageLayout>
    </>
  );
};

export default Marketplace;
