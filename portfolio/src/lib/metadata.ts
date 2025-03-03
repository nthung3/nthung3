// SEO Metadata Configuration
import { Metadata } from "next";

// Ensure URL has proper protocol
const getSiteUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-example.com';
  // Make sure URL has protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
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
    url: getSiteUrl(),
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
    images: ["/images/og-image.jpg"],
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
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Replace with your verification code if needed
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  other: {
    custom: "value",
  },
};

// Generate metadata for blog posts
export function generateBlogMetadata(post: any): Metadata {
  const url = getSiteUrl();
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "blog", "article"],
    alternates: {
      canonical: `${url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Thanh Hung"],
      tags: post.tags,
      images: [
        {
          url: post.coverImage || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Generate metadata for project pages
export function generateProjectMetadata(project: any): Metadata {
  const url = getSiteUrl();
  
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${url}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "website",
      images: [
        {
          url: project.image || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: "Thanh Hung | Frontend Developer",
    description: "Discover my portfolio of frontend development work, focusing on React, Next.js, and modern web technologies.",
  },
  about: {
    title: "About Me | Thanh Hung",
    description: "Learn about my journey as a frontend developer, my skills, and my approach to creating engaging web experiences.",
  },
  blog: {
    title: "Blog | Thanh Hung",
    description: "Articles and insights on frontend development, React, Next.js, and modern web technologies.",
  },
  projects: {
    title: "Projects | Thanh Hung",
    description: "Explore my latest frontend development projects using React, Next.js, and other modern web technologies.",
  },
  contact: {
    title: "Contact | Thanh Hung",
    description: "Get in touch with me for collaboration opportunities, project inquiries, or just to say hello.",
  },
};
