import type { NextPage } from "next";
import Footer from "../components/layout/footer";
import LandingHeader from "../components/layout/header/landing_header";
import LandingPage from "../components/landing";

const Home: NextPage = () => {
  return (
    <>
      {/*<LandingHeader />*/}
      <LandingPage />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
