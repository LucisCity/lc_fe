import axios from "axios";
import type { GetStaticProps } from "next";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { NewsPage } from "../components/news";
import he from "he";

export const getStaticProps: GetStaticProps<{ posts: any }> = async (context) => {
  const _fields = `${[
    "id",
    "excerpt",
    "title",
    "slug",
    "date",
    "_embedded.author[0].name",
    "_links.author",
    "_embedded.author[0].avatar_urls.96",
    "yoast_head_json.og_image[0].url",
  ].join(",")}`;
  const queryObject = {
    _embed: "true",
    lang: "vi",
    page: "1",
    // per_page: "7",
  };
  const query = new URLSearchParams(queryObject).toString();
  const res = await axios.get(`https://news-api.luciscity.io/wp-json/wp/v2/posts?${query + `&_fields=` + _fields}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  console.log();

  return {
    props: {
      posts: res.data,
    },
    revalidate: 86400, // 1 days
  };
};
const Invest = ({ posts }: any) => {
  console.log(posts);

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
