import type { NextPage } from "next";
import { LandingPage } from "../components/landing";
import Footer from "../components/layout/footer";
import LandingHeader from "../components/layout/header/landing_header";

const Home: NextPage = () => {
  return (
    <>
      {/* <LandingHeader /> */}
      <LandingPage />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
