import type { GetStaticProps, InferGetStaticPropsType } from "next";
import LandingPage from "../components/landing";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import client from "../utils/apolo.util";
import { GET_HOT_PROJECT } from "../config/api/invest.config";
import { Project } from "../gql/graphql";

export const getStaticProps: GetStaticProps<{ projects: Project[] }> = async (context) => {
  // const res = await fetch('https://.../posts')
  const res = await client.query({
    query: GET_HOT_PROJECT,
  });

  const projects: Project[] = res?.data?.hotProjects;

  return {
    props: {
      projects,
    },
    revalidate: 86400 * 7, // 7 days
  };
};

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DocHead />
      <PageLayout isShowHeader={false} isShowFooter={false}>
        <LandingPage projects={projects} />
      </PageLayout>
    </>
  );
};

export default Home;
