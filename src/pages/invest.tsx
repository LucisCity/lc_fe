import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import AppLayout from "../components/layout";
import { TopSection } from "../components/landing/top_section";
import { Background } from "../components/landing/components/background";

const Invest: NextPage = () => {
  return (
    <>
      <DocHead />
      {/*<LandingHeader />*/}
      <AppLayout isShowFooter={false}>
        <Background />
      </AppLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Invest;
