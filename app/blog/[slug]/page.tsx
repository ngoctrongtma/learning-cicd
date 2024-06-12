// pages/blog/[slug].tsx

type Params = {
  params: {
    slug: string;
  };
};

// This function generates the static paths for dynamic routes
export async function generateStaticParams() {
  const slugs = await fetchBlogSlugs();
  return slugs.map(slug => ({
    params: { slug }
  }));
}

// Dummy function to represent fetching blog slugs
async function fetchBlogSlugs() {
  // Replace this with your actual data fetching logic
  return ['slug1', 'slug2', 'slug3'];
}

// Function to generate metadata for each page
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// Page component to render the slug
export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}