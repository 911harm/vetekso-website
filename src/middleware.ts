import { defineMiddleware } from "astro:middleware";

// In static output mode, request headers are not available.
// Language detection is handled client-side in src/pages/index.astro.
export const onRequest = defineMiddleware((_context, next) => {
  return next();
});
