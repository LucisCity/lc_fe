import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { MemberPage } from "../components/member";
import AppLayout from "../components/layout";

const Member: NextPage = () => {
  return (
    <>
      <DocHead />
      {/*<LandingHeader />*/}
      <AppLayout isShowFooter={false}>
        <MemberPage />
      </AppLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Member;
