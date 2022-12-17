import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { NewsPage } from "../components/news";
import he from "he";
import { truncateStr } from "../utils/string.util";

export interface IPost {
  id: string;
  title: string;
  description: string;
  createdDate: string;
  image: string;
  link: string;
  categories: Array<string>;
}
const newsEndpoint = process.env.NEWS_ENDPOINT ?? "https://news.luciscity.io";
const newsApiEndpoint = process.env.NEWS_API_ENDPOINT ?? "https://news-api.luciscity.io";

/**
 * get posts api from wp json
 * @param offset
 * @param perPage
 */
export const getPostApiUrl = (offset: number, perPage: number) => {
  const _fields = `${[
    "id",
    "title",
    "slug",
    "date",
    "_links.wp:term.0",
    "_links.yoast_head_json",
    "yoast_head_json.og_image",
    "yoast_head_json.og_description",
  ].join(",")}`;
  const queryObject = {
    _embed: "true",
    lang: "vi",
    offset: `${offset}`,
    // eslint-disable-next-line camelcase
    per_page: `${perPage}`,
  };
  const query = new URLSearchParams(queryObject).toString();

  return `${newsApiEndpoint}/wp-json/wp/v2/posts?${query + `&_fields=` + _fields}`;
};

/**
 * normalize data from wp json
 * @param data
 */
export const normalizeDatePosts = (data: any) => {
  let posts: IPost[];
  try {
    posts = data?.map((item: any) => ({
      id: item?.id,
      title: he.decode(item?.title?.rendered ?? ""),
      description: he.decode(truncateStr(item?.yoast_head_json?.og_description?.replace("[&hellip;]", ""), 0, 30)),
      createdDate: item?.date,
      image: item?.yoast_head_json?.og_image?.[0]?.url,
      link: `${newsEndpoint}/${item?.slug}`,
      categories: item._embedded["wp:term"]?.[0]?.map((category: any) => category.name),
    })) ?? [];
  } catch (e) {
    console.error('{normalizeDatePosts} e: ', e);
    posts = []
  }

  return posts;
};

export const getStaticProps: GetStaticProps<{ posts: IPost[] }> = async (context) => {
  const url = getPostApiUrl(0, 7);

  const res = await axios.get(url, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });

  const posts: IPost[] = normalizeDatePosts(res.data);
  return {
    props: {
      posts,
    },
    revalidate: 1800, // 30 minutes
  };
};
const Invest = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <NewsPage posts={posts} />
      </PageLayout>
    </>
  );
};

export default Invest;
