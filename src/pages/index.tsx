import type { GetStaticProps, InferGetStaticPropsType } from "next";
import LandingPage from "../components/landing";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";

type Project = {
  name: string;
  description: string;
};
export const getStaticProps: GetStaticProps<{ projects: Project[] }> = async (context) => {
  // const res = await fetch('https://.../posts')
  const projects: Project[] = [
    {
      name: "Navaland Phú Yên",
      description: "Bất động sản nghỉ dưỡng",
    },
  ];

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
      <PageLayout isShowHeader={true} isShowFooter={false}>
        <LandingPage projects={projects} />
      </PageLayout>
    </>
  );
};

export default Home;
