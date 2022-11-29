import type { NextPage } from "next";
import LandingPage from "../components/landing";
import DocHead from "../components/layout/doc_head";

const Home: NextPage = () => {
  return (
    <>
      <DocHead />
      {/*<LandingHeader />*/}
      <LandingPage />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
