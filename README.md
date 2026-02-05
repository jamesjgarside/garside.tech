# Personal Website

A personal static site built with [11ty](https://www.11ty.dev/), featuring a blog, resume, and now page.

## Features

- Static site generation with 11ty
- No/low JavaScript required (progressive enhancement only)
- Privacy-first design (no tracking, no analytics)
- Fully responsive, designed for device compatibility
- Automatic dark mode (respects system preferences)
- Markdown-based content
- RSS feeds
- Accessibility conscious

## Local Development

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server with live reload
npm start

# Site will be available at http://localhost:8080
```

### Build for Production

```bash
# Build static site
npm run build

# Output will be in _site/ directory
```

## Project Structure

```
.
├── src/
│   ├── _includes/        # Reusable components
│   ├── _layouts/         # Page layouts
│   ├── assets/          # Images, covers, logos
│   ├── blog/            # Blog posts (markdown)
│   ├── css/             # Stylesheets
│   ├── feeds/           # RSS feed templates
│   └── *.md             # Pages (index, about, resume, etc.)
├── .eleventy.js         # 11ty configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## Adding Content

### New Blog Post

Create a new markdown file in `src/blog/`:

```markdown
---
layout: post.njk
title: "Your Post Title"
date: 2026-02-05
excerpt: "Brief description..."
tags: ["leadership", "privacy"]
---

Your content here...
```

### Update Now Page

Edit `src/now.md` with current activities, reading, and listening.

### Update Resume

Edit `src/resume.md` or add role files to `src/roles/`.

## Deployment

This site can be deployed to:
- [Cloudflare](https://pages.cloudflare.com)
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting service


## License

[MIT]

## Contact

hello@garside.tech
