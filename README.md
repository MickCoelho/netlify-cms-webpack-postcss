# CMS-website

> Website

## Architecture

* Netlify
* NetlifyCMS
* Next.js
* React
* Redux
* PostCSS
* CSS Modules

## Environments
[![Netlify Status](https://api.netlify.com/api/v1/badges/152211bb-c5fc-43bb-809a-beb1b52f0b25/deploy-status)](https://app.netlify.com/sites/nifty-turing-c2a084/deploys)

### Credentials

For all environments:

## Requirements

* `node^11.12.0`
* `npm^6.7.0`

## Quickstart

```shell
npm i
npm run dev
```

## Commands

The following `npm` commands are available:

* `npm run build`: builds a static site to `/out`
* `npm run lint[:js|css][:auto]`
* `npm run dev`: spins up a dev server at [`localhost:3000`](localhost:3000)

## Workflow

We use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow):

1. We work on feature branches named `feature/<short-title-of-feature>` (or bugfix branches named `bugfix/<bug-name>`).
2. When the feature is done, we merge it into `dev` with a PR.
3. When `dev` is stable, we merge it into `staging`.
4. `test` is reserved for QA and `prod` is for the public.


## Static Build Process
In development, we're using `next`'s dev server to host the site.
However, for production, we're using `next export` to build out a fully static site that's deployed to Netlify.

## CMS

The site's content is managed through [NetlifyCMS](/admin).
