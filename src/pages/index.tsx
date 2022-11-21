import type { NextPage } from "next";
import { LandingPage } from "../components/landing";
import AppLayout from "../components/layout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <LandingPage />
    </AppLayout>
  );
};

export default Home;
