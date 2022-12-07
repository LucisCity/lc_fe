import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { Background } from "../components/landing/components/background";
import PageLayout from "../components/layout/PageLayout";
import ScrollPage from "../components/layout/scroll_page";

const Invest: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>

        {/* begin page component */}
        <ScrollPage>
          <h1>news</h1>
        </ScrollPage>
        {/* end page component */}

      </PageLayout>
    </>
  );
};

export default Invest;
