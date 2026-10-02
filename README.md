# SEAT-PLAN

Browser-based school seating planner. The source application is `seat-planner.html`.

Production site: <https://seat-plan-490.pages.dev/>

## Develop locally

Install dependencies and build the static site:

```sh
npm install
npm run build
```

Start the Wrangler Pages preview server:

```sh
npm run dev
```

The preview is served locally by Wrangler. Re-run the build after changing `seat-planner.html`.

Generated plans are saved in the browser with the seating assignments and per-room summary report, and can be loaded again on the same device and browser.

## Deploy to Cloudflare Pages

Authenticate Wrangler with your Cloudflare account, then deploy to the `seat-plan` Pages project:

```sh
npx wrangler login
npm run deploy
```

The deploy script builds `dist/index.html` from `seat-planner.html` before publishing it.
