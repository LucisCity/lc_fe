import axios from "axios";
import type { GetStaticProps } from "next";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { NewsPage } from "../components/news";

export const getStaticProps: GetStaticProps<{ posts: any }> = async (context) => {
  const res = await axios.get("https://news-api.luciscity.io/wp-json/wp/v2/posts?order=desc&page=1&per_page=10", {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  return {
    props: {
      posts: res.data,
    },
    revalidate: 86400, // 1 days
  };
};
const Invest = ({ posts }: any) => {
  return (
    <>
      <DocHead />
      <PageLayout>
        {/* begin page component */}
        <NewsPage posts={posts} />
        {/* end page component */}
      </PageLayout>
    </>
  );
};

export default Invest;
