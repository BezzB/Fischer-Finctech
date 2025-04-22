# Disabled API Routes

These API routes have been moved here from the `pages/api` directory because the project is using Next.js static export mode (`output: 'export'` in next.config.js), which doesn't support API routes.

## Why were these moved?

Next.js static export mode doesn't support server-side functionality including API routes. When trying to build with API routes present in the `pages/api` directory, you'll get errors like:

```
⚠ Specified "headers" will not automatically work with "output: export".
⨯ API Routes cannot be used with "output: export".
```

## How to handle forms instead?

Since you can't use server-side API routes with static export, you should use client-side form submission services like:

1. **EmailJS** (already implemented in the project)
2. Formspree
3. Netlify Forms (if hosting on Netlify)
4. Other third-party form services

## How to restore API routes

If you decide to switch to a hosting provider that supports server-side functionality (like Vercel):

1. Remove `output: 'export'` from `next.config.js`
2. Move the files from this directory back to `pages/api/`
3. Update the form handling code to use the API routes instead of EmailJS

Note: The site is currently set up to use EmailJS for form submissions, which works well with static hosting. 