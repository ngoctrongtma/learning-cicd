// pages/blog/[slug].tsx

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // Fetch or define your dynamic routes here
  const slugs = await fetchBlogSlugs();

  // Return the list of paths
  return slugs.map(slug => ({
    params: { slug }
  }));
}

// Dummy function to represent fetching blog slugs
async function fetchBlogSlugs() {
  // Replace this with actual data fetching logic
  return ['slug1', 'slug2', 'slug3'];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
