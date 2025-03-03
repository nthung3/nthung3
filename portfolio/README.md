This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Portfolio Website Features

This is a modern portfolio and blog website built with Next.js that includes:

- Neo-brutalist design language with modern UI elements
- Blog integration with Notion as a headless CMS
- Performance optimizations with ISR caching and image optimization
- Interactive elements with social sharing functionality
- Contact form with email integration
- Projects showcase with filtering options
- SEO optimizations with proper metadata and sitemaps

## Environment Variables

Create a `.env.local` file with the following variables:

```
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
REVALIDATION_TOKEN=your_revalidation_token
```

## Deployment on Vercel

This project is configured for optimal deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project on Vercel: https://vercel.com/new
3. Configure the environment variables in the Vercel dashboard
4. Deploy your site

The `vercel.json` file in the root provides optimized configuration for Vercel deployment.

## Dynamic vs Static Export

The project can be deployed in two ways:

1. **Dynamic Mode (Default)** - Full Next.js functionality including API routes
2. **Static Export** - For static hosting platforms

For static export, edit `next.config.ts` to include:
```js
output: 'export',
images: {
  unoptimized: true,
}
```

Note that static export does not support API routes or Server Actions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
