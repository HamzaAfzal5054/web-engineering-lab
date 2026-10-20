# Web Engineering Lab 05

Hamza Afzal · 2430-0176

Lab 05 extends the responsive office-hours page with native feedback validation and strict TypeScript. The legacy jQuery baseline is preserved in commit 82aa9ae; the final page has no jQuery dependency.

## Run

```sh
npm ci
npm run build
npm start
```

Open the HTTP address printed by the server. JavaScript modules require HTTP, not file URLs. Edit src/_.ts, then rebuild to update public/_.js. All five browser scripts, including the greeting and navigation scripts retained from earlier labs, are now compiled from TypeScript.

## Verify

```sh
npm run typecheck
npm run build
npm test
npm run lint
npm run format
```

The form uses custom validation: a trimmed name must be nonempty and email must contain @, matching the exercise. Error messages use role=alert and aria-invalid. Booking supports Tab, Enter and Space and keeps its own live region. Both features are local demonstrations: they do not send or persist data.

The Word report with screenshots is in reports/Lab-05-Hamza-Afzal-2430-0176.docx.

See LEGACY-NOTES.md for translations, compiler explanations, adaptations and assistance disclosure. evidence/lab-05 contains browser captures, compiler transcripts and Lighthouse reports. NOTES.md and evidence/lab-04 retain the previous lab record.

TypeScript source and compiled browser files are committed together. node_modules is excluded. Generated JavaScript and captured evidence are excluded from Prettier rewriting.
