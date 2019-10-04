# CMS-website

> Website

## Architecture

- Netlify
- NetlifyCMS
- NetlifyLambda
- Next.js
- React
- Redux
- PostCSS
- CSS Modules

## Environments

[![Netlify Status](https://api.netlify.com/api/v1/badges/39983ee1-522c-4b9e-912c-07d08b3bcae7/deploy-status)](https://app.netlify.com/sites/gifted-joliot-552017/deploys)

## Requirements

- `node^11.12.0`
- `npm^6.7.0`

## Quickstart

```shell
npm i
npm run dev
```

## Commands

The following `npm` commands are available:

- `npm run build`: builds a static site to `/out`
- `npm run lint[:js|css][:auto]`
- `npm run dev`: spins up a dev server at [`localhost:3000`](localhost:3000) and NetlifyLambda [`localhost:9000`](localhost:9000)

## Static Build Process

In development, I'am using `next`'s dev server to host the site.
However, for production, I'am using `next export` to build out a fully static site that's deployed to Netlify.

## CMS

The site's content is managed through [NetlifyCMS](/static/admin).

## Known issues

- Need to setup a proxy for lambda functions to use port `3000`
