If you want to start dev environment, you need to install [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack](Remote Development Extension) in VS Code, and open folder in container.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy

You can create production docker image using `npm run createImage`. Then you can run image that you create using using `npm run runContainer`.

When you run production image, you can open the app with [http://localhost:3001](http://localhost:3001).
