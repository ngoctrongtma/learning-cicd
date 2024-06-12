// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await fetchBlogSlugs();
  return slugs.map(slug => ({
    params: { slug }
  }));
}

async function fetchBlogSlugs() {
  // Replace this with your actual data fetching logic
  return ['slug1', 'slug2', 'slug3'];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  return {
    props: {
      params
    }
  };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
