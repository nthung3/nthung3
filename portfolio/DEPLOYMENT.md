# Deployment Guide for Portfolio Site

## Vercel Deployment Checklist

### Environment Variables
Make sure to set these environment variables in your Vercel project settings:

- `NOTION_API_KEY` - Your Notion API key for fetching blog content
- `NOTION_DATABASE_ID` - Your Notion database ID containing blog posts
- `NEXT_PUBLIC_SITE_URL` - Set to your production URL (e.g., `https://nthung3.vercel.app`)
- `REVALIDATION_TOKEN` - A secure token for manual content revalidation

### Deployment Steps

1. **Push your code to a Git repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Connect to your repository
   - Configure the project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: next build
     - Output Directory: .next
     - Install Command: npm install

3. **Add Environment Variables**
   - Add all the environment variables listed above
   - Make sure sensitive values are marked as secrets

4. **Deploy**
   - Click 'Deploy' and wait for the build to complete
   - Vercel will provide you with a deployment URL

### Performance Optimizations

The site already incorporates these optimizations:

1. **Incremental Static Regeneration (ISR)** with 60-second cache duration
2. **Image optimization** with proper sizing and priority loading
3. **Component-level code splitting** with dynamic imports
4. **Animation optimizations** with reduced motion support
5. **Font optimization** with next/font
6. **Caching headers** configured in vercel.json

### Monitoring and Maintenance

- **Web Vitals**: The site includes performance monitoring
- **Content Updates**: Blog content will update automatically through the Notion integration
- **Manual Revalidation**: Use the revalidation endpoint if needed with your token:
  ```
  POST /api/revalidate
  { "path": "/blog", "token": "your-revalidation-token" }
  ```

### Troubleshooting

If you encounter any issues during deployment:

1. Check the Vercel build logs for specific errors
2. Verify all environment variables are correctly set
3. Ensure your Notion API key has proper permissions
4. For URL-related issues, confirm NEXT_PUBLIC_SITE_URL includes the https:// protocol

The site is optimized for Vercel deployment but can also be hosted on any platform that supports Next.js.
