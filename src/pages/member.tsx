import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import { MemberPage } from "../components/member";
import AppLayout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <DocHead />
      {/*<LandingHeader />*/}
      <AppLayout>
        <MemberPage />
      </AppLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
