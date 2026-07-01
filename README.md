# Pareidolia

A website built for a digital humanities focused research group, with a Strapi headless CMS backing the blog and imagery.

## Overview

The site has three main sections:

- **Home**: landing page with an about section, scroll-driven intro animation, latest work preview, and a people/quote section for the research group
- **Work**: a blog section that pulls posts and cover images from a Strapi CMS, plus individual blog post pages
- **Contact**: contact page

Content (posts, images) is managed by the research group through Strapi rather than being hardcoded, so non-technical members can publish updates directly.

## Tech stack

- **Framework**: React 18, React Router
- **Scroll / motion**: GSAP, Locomotive Scroll, ScrollMagic, React Spring
- **Content**: Strapi headless CMS, react-markdown + rehype-raw for rendering post content
- **Styling**: Sass, styled-components
- **Deployment**: Google App Engine (`app.yaml`, `cloudbuild.yaml`)

## Development

```bash
npm start   # start dev server
npm run build   # production build
```
