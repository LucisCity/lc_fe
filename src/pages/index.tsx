import type { NextPage } from "next";
import LandingPage from "../components/landing";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";

const Home: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout isShowHeader={false} isShowFooter={false}>
        <LandingPage />
      </PageLayout>
    </>
  );
};

export default Home;
