# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages.

## Automatic Deployment

The project uses GitHub Actions to automatically build and deploy to GitHub Pages whenever you push to the `main` or `githubpages` branch.

### First-Time Setup

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin githubpages
   ```

3. **Monitor the deployment:**
   - Go to the "Actions" tab in your GitHub repository
   - Watch the workflow run
   - Once complete, your site will be live at: `https://[your-username].github.io/word-analyzer/`

## Configuration Details

### Next.js Configuration (`next.config.js`)
- **Output:** Set to `'export'` for static HTML generation
- **Base Path:** Set to `/word-analyzer` for subdirectory hosting
- **Images:** Set to `unoptimized: true` (Next.js image optimization requires a server)
- **Trailing Slash:** Enabled for better compatibility with static hosting

### Build Process
- Run `npm run build` to generate static files in the `out/` directory
- The GitHub Action automatically runs this on every push

## Local Testing

To test the production build locally:

```bash
# Build the static site
npm run build

# Serve the out directory (you can use any static server)
npx serve out
```

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. Update `basePath` in `next.config.js` to an empty string

## Troubleshooting

### Site not loading styles/scripts
- Ensure `basePath` in `next.config.js` matches your repository name
- Check that the GitHub Pages source is set to "GitHub Actions"

### Build fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally to reproduce the issue

## Files Ignored from Deployment

The following Docker-related files are now in `.gitignore`:
- `Dockerfile`
- `docker-compose.yml`
- `nginx.conf`
- `.dockerignore`

These files are not needed for GitHub Pages deployment but remain in your working directory for other deployment options.

