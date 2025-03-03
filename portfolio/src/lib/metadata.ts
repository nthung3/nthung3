// SEO Metadata Configuration
import { Metadata } from "next";

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-example.com'),
  title: {
    default: "Thanh Hung | Frontend Developer",
    template: "%s | Thanh Hung",
  },
  description: "Portfolio of Thanh Hung, a frontend developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "UI/UX",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [
    { name: "Thanh Hung" }
  ],
  creator: "Thanh Hung",
  publisher: "Thanh Hung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thanhhung.dev/",
    siteName: "Thanh Hung | Frontend Developer",
    title: "Thanh Hung | Frontend Developer",
    description: "Portfolio of Thanh Hung, a frontend developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Thanh Hung - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanh Hung | Frontend Developer",
    description: "Portfolio of Thanh Hung, a frontend developer specializing in React, Next.js, and modern web technologies.",
    creator: "@yourtwitter", // Replace with your Twitter handle
    images: ["/images/twitter-image.jpg"], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      }
    ],
  },
};

// Generate metadata for blog posts
export const generateBlogMetadata = (post: any) => {
  if (!post) return {};
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Thanh Hung"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
};

// Generate metadata for project pages
export const generateProjectMetadata = (project: any) => {
  if (!project) return {};
  
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      images: project.image ? [{ url: project.image }] : [],
    },
  };
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: "Thanh Hung | Frontend Developer",
    description: "Welcome to my portfolio. I'm a frontend developer specializing in creating modern, responsive web applications.",
  },
  about: {
    title: "About Me | Thanh Hung",
    description: "Learn more about my background, skills, and professional experience as a frontend developer.",
  },
  projects: {
    title: "Projects | Thanh Hung",
    description: "Explore my portfolio of web development projects, featuring React, Next.js, and other modern technologies.",
  },
  blog: {
    title: "Blog | Thanh Hung",
    description: "Articles and tutorials about web development, frontend technologies, and design.",
  },
  contact: {
    title: "Contact | Thanh Hung",
    description: "Get in touch with me for collaboration, job opportunities, or just to say hello.",
  },
};
