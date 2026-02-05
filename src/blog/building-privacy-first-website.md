---
layout: post.njk
title: Building a Simple, Privacy-First Personal Website
date: 2026-01-26
tags: ["privacy", "projects"]
excerpt: The architectural decisions and trade-offs behind building a secure website without tracking, analytics, and complete respect for visitor privacy.
---

Until now, I've never had a substantial portfolio website. After buying my domain, I've tried a few placeholder pages that were some variation of a striking "hero" image with text over top, but nothing more involved than that.  While I haven't had a platform 

When I set out to build this site, a core requirement was security. Hosting a website with a misconfigured SSL cert is a bad look.  So is a page that's slow and noticeably buggy from one-too-many sketchy EOL WordPress plugins.  Beyond defending my personal brand from reputational damage, I love privacy and I hate surveillance capitalism.

Here's how I built a privacy-first website and what I learned along the way.

## The Problem with Modern Websites

Most websites today are surveillance machines. Google Analytics, Facebook Pixel, heatmaps, session replays, A/B testing frameworks—the average website loads dozens of third-party scripts that track every click, scroll, and hover.

Even "privacy-friendly" analytics tools like Plausible or Fathom still collect data about visitors. They're better than Google Analytics, but they're still tracking.

I wanted something different: a website that collects nothing.

## Architecture Decisions

### Static Site Generation

I chose [11ty](https://www.11ty.dev/) as my static site generator. The entire site is pre-built HTML, CSS, and markdown— no JavaScript frameworks, no server-side rendering, no dynamic content that requires tracking users.

**Why this matters:** Static sites can't track users even if they wanted to. There's no server generating personalized content, no sessions to maintain, no cookies to set.

### No Client-Side JavaScript

The site runs on vanilla CSS and HTML. No React, no Vue, no analytics libraries. The only "interactive" elements are native HTML features like `<details>` tags for expandable sections.

**Trade-off:** I lose the ability to do A/B testing, heatmaps, or understand how people use the site. But that's the point—I don't need to know. If people find value in the content, they'll come back. If not, that's fine too.

### Cloudflare Pages for Hosting

I deployed on [Cloudflare Pages](https://pages.cloudflare.com/) instead of traditional hosts. Cloudflare does log standard web server data (IP addresses, user agents, timestamps), but:

1. They don't sell this data
2. I don't have access to detailed analytics unless I opt in
3. The data is used for DDoS protection and infrastructure, not advertising

**Alternative considered:** Self-hosting on a VPS would give me complete control, but would require maintaining the server myself. Cloudflare's infrastructure security outweighs the minimal logging for my use case.

### RSS Instead of Email Collection

Rather than collecting email addresses for a newsletter, I provide [RSS feeds](/feed.xml) for every topic. Visitors can subscribe in their feed reader of choice, and I have zero visibility into who's reading or what they're interested in.

**Why RSS:** It's a pull model instead of push. Readers control when and how they consume content. I don't build a database of email addresses that could be breached, sold, or subpoenaed.

### No Comments System

I considered adding comments but every solution has privacy implications:

- **Disqus:** Notorious tracker
- **Self-hosted (Commento, Isso):** Requires storing user data
- **GitHub Issues:** Requires visitors to have GitHub accounts

Instead, I included my email address. If someone wants to discuss a post, we can have an actual conversation.

## What I Gave Up

Being privacy-first means sacrificing data:

- **No idea who visits:** I don't know if 10 people or 10,000 people read this
- **No understanding of behavior:** No heatmaps showing what people click
- **No conversion tracking:** Can't measure if blog posts drive resume views
- **No social proof:** Can't display "popular posts" based on actual views

**But here's what I gained:**

- **Faster load times:** No analytics scripts means pages load instantly
- **Better privacy:** Visitors can browse without being tracked
- **Simplicity:** Fewer dependencies, less maintenance, less complexity
- **Alignment with values:** I work in privacy-focused technology; my site should reflect that

## Technical Implementation

The entire site is built from markdown files and simple templates:
```
src/
├── blog/           # Markdown blog posts
├── roles/          # Markdown resume entries
├── _layouts/       # Nunjucks templates
├── css/            # Vanilla CSS
└── feeds/          # RSS feed templates
```

Every page is generated at build time. The deployment pipeline:

1. Write markdown locally
2. Commit to GitHub
3. Cloudflare Pages auto-builds and deploys
4. HTML is served from edge nodes globally

No databases, no APIs, no user sessions.

## Verification

Don't trust me—verify it yourself:

1. Open your browser's developer tools
2. Visit any page on this site
3. Check the Network tab

You'll see: HTML, CSS, and an image. That's it. No analytics.js, no tracking pixels, no third-party domains.

Or run this from the terminal:
```bash
curl -I https://garside.tech | grep -i cookie
```

No cookies. Ever.

## The Broader Point

Privacy-first web design isn't about being paranoid or anti-technology. It's about respecting the people who visit your site.

You don't need to know everything about your visitors to create value for them. In fact, the obsession with metrics often gets in the way of creating genuinely useful content.

Build things people want to read. Make them easy to access. Respect privacy by default.

That's it.

## Resources

- [IndieWeb Principles](https://indieweb.org/principles)
- [The Small Web is Beautiful](https://benhoyt.com/writings/the-small-web-is-beautiful/)
- [11ty Documentation](https://www.11ty.dev/docs/)
- [Privacy page on this site](/privacy)

---

*This site's source code and architecture decisions are documented transparently. If you have questions about how something works, [email me](mailto:james@garside.tech).*
