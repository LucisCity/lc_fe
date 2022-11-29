import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import AppLayout from "../components/layout";
import { TopSection } from "../components/landing/top_section";

const Member: NextPage = () => {
  return (
    <>
      <DocHead />
      {/*<LandingHeader />*/}
      <AppLayout>
        <TopSection />
      </AppLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Member;
