# Web Engineering Lab 02

Semantic HTML and accessibility foundations, extending the Lab 01 greeting project.

## Run

```sh
npm ci
npm start
```

## Verify

```sh
npm test
npm run lint
npm run format
```

The page includes semantic landmarks, a keyboard skip link, accessible office-hours table, decorative and informative SVGs, a labelled form with native validation, visible focus states, and current-section navigation. The sample contact form does not send or store messages.

Accessibility verification on 5 October 2026: Lighthouse Accessibility 100/100 and zero axe-core violations. Keyboard checks covered Tab, Shift+Tab, Enter and Space. Chrome extension installation and an interactive DevTools audit remain separate lab steps; the recorded audit uses Lighthouse CLI in Chrome and axe-core through Playwright.

`node_modules/` is excluded by `.gitignore`.
