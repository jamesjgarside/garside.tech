---
layout: post.njk
title: Building a Personal Website in 2026
date: 2026-01-26
tags: ["web", "projects"]
excerpt: Why I built a personal site outside the walled gardens of social media, and the technical decisions that shaped it.
---

Until now, I've never had a substantial portfolio website. After buying my domain, I tried a few placeholder pages with some variation of a striking "hero" image with text overlaid—but nothing more involved than that.

When I set out to build this site, I wanted complete control over my content and how it's presented. I wanted it to load instantly and display legibly for all readers on any device with an internet connection. I wanted it to be easily maintainable for years. Most of all, I wanted it to be secure, resilient, and to respect everyone's privacy.

This content isn't subject to algorithmic whims or platform shutdowns and links don't break unless I break them. 

I try to stay away from them, but there's nothing stopping me from using those aforementioned social networks and platforms for distribution and point people back towards this site. (Create Once, Publish Everywhere or "COPE".)

## Architectural Decisions

**Static site generation:** On my end, I write blog posts and edit pages with markdown files and templates. I am not a web developer, so I wanted something easier than customizing my old MySpace page. I use [11ty](https://www.11ty.dev/) to build everything at compile time. Every page is pre-generated HTML and CSS without any database queries or server processing. When someone visits, they get the content immediately. 

**Minimal/No JavaScript:** The site runs on vanilla HTML and CSS. For as long as I can, I'm going with this self-imposed "no JavaScript" challenge for greater accessibility, security, privacy, and performance.

**Cloudflare Pages:** Whenever I Push to GitHub, Cloudflare builds and deploys automatically. Free tier, automatic HTTPS, global CDN, built-in DDoS protection. I don't have to maintain servers or configure SSL certificates.

**RSS feeds:** I provide an [RSS feed](/feed.xml) instead of email newsletters (for now.) RSS is an open standard that works in any reader. Eventually, once this blog fills out with more topics people will be able to follow specific feed(s) for different topics. 

**No comments:** Every comment system has trade-offs I don't want: tracking and surveillance, moderation, and potentially forcing visitors to create accounts. I include my email address instead.

**Accessibility Basics:** I know I'm doing the "bare minimum" here, and this needs continual focus and consideration, but I started this off with semantic HTML, Keyboard Navigation, color contrast, and alt text sorted out in v1.0.

**Responsive design:** CSS Grid and Flexbox layouts that adapt to any screen. The content reflows naturally based on available space with no device-specific breakpoints.

**Automatic dark mode:** The site respects your system color scheme using CSS `prefers-color-scheme`. If your OS is dark mode, the site matches automatically. No toggle, no JavaScript.

## Trade-offs

No analytics means I don't know who visits or what they read. No real-time features or personalized content. Publishing requires building and deploying, not just clicking a button in a CMS. All of that means slightly more work for me and less opportunity to monetize your eyeballs.

By compromising on some features, I can be uncompromising in speed, durability, and independence. As someone who solves technological problems professionally, I'd rather have a simple, elegant site I understand than a complex one I don't. 

---

Questions? Comments? [Email me](mailto:hello@garside.tech)
