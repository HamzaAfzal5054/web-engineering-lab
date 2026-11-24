# Lab 09 Next.js Server Components and Server Actions

Hamza Afzal · 2430-0176 · BS AI · Web Engineering

This app completes the six Lab 09 tasks: Home, shared layout and routing, server-loaded office hours, a small client booking button, a feedback Server Action, and path revalidation.

## Run

Use Node.js 20.9 or later. From this `web` directory:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For the production cache exercise:

```sh
npm run build
npm start
```

Stop the development server first because both use port 3000.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
```

- View Source contains `Hello, World!` and both office-hours rows.
- Disable JavaScript and reload `/office-hours`: the schedule remains visible; booking needs JavaScript.
- Select or cancel each day with the mouse, Enter and Space. Selection resets on reload.
- Send feedback in production. The file `data/feedback.json` is created; `revalidatePath('/feedback')` refreshes the list without a manual reload.
- Blank or whitespace-only submissions are not saved. Names are limited to 80 characters and messages to 1000 characters on both server and form.

## Files and boundaries

`app/layout.tsx` supplies the shared skip link, navigation, main and footer. `app/office-hours/page.tsx` reads `data/slots.json` through `lib/slots.ts` on the server. Only `BookButton.tsx` uses `"use client"` and React state. `app/feedback/actions.ts` uses `"use server"` to validate, save and invalidate `/feedback`.

The stylesheet was copied from the existing Lab 05 `public/styles.css`, with small spacing and mobile readability additions. `next.config.ts` is an empty standard config; Tailwind and experimental cache options are not used.

## Storage scope

The JSON store is the local single-process teaching example required by the statement. Messages are ignored by Git. It needs a writable, persistent disk; it is not a multi-user production database or a GitHub Pages site. A database would be needed for multiple server instances or ephemeral hosting. Booking is in-memory UI state and does not reserve a real appointment.

See `../AI-USAGE.md`, `../evidence/lab-09/`, and the Lab 09 report in `../reports/`.

## References

- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://nextjs.org/docs/app/getting-started/mutating-data
- https://nextjs.org/docs/app/api-reference/functions/revalidatePath
