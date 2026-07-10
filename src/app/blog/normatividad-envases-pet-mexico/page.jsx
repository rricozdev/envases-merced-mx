import Content from "./content";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import { blogPostingSchema } from "@/components/schema/blogSchema";
import { breadcrumbSchema } from "@/components/schema/breadcrumbSchema";
import { organizationSchema } from "@/components/schema/organizationSchema";
import { blogPosts } from "@/utils/constants/blogPosts";
import BlogPostView from "@/components/feature/blog/BlogPostView";

const post = blogPosts.find((p) => p.slug === "normatividad-envases-pet-mexico");

export const metadata = {
  title: `${post.title} | Blog Envases La Merced`,
  description: post.description,
  keywords: post.tags,
  openGraph: {
    type: "article",
    url: `https://envaseslamerced.mx/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    images: [
      {
        url: `https://envaseslamerced.mx${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    siteName: "Envases La Merced",
    locale: "es_MX",
    publishedTime: post.date,
    authors: [post.author],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [`https://envaseslamerced.mx${post.image}`],
  },
  robots: "index, follow",
  alternates: {
    canonical: `https://envaseslamerced.mx/blog/${post.slug}`,
  },
};

export default function PostPage() {
  const breadcrumb = [
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[
          organizationSchema,
          breadcrumbSchema(breadcrumb),
          blogPostingSchema(post),
        ]}
      />
      <BlogPostView post={post}>
        <Content />
      </BlogPostView>
    </>
  );
}
