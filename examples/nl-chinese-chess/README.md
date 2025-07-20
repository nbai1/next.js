# NL Chinese Chess (Xiangqi)

This is a minimal example for starting the **NL Chinese Chess** project.
It shows how to integrate a simple NodeLoc OAuth2 login flow in a Next.js app
and renders a placeholder board.

## Getting Started

1. Copy `.env.local.example` to `.env.local` and add your `NODELOC_CLIENT_SECRET`.
2. Install dependencies and run the development server:

```bash
pnpm install
pnpm dev --filter nl-chinese-chess...
```

Then open [http://localhost:3000](http://localhost:3000) with your browser.

## Features

- Redirects users to NodeLoc OAuth2 authorization endpoint.
- Provides an API route to exchange the authorization code for an access token.
- Renders a static Xiangqi board as a starting point for further development.
