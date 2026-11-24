# Lab 09 Evidence

The production app was tested on 24 November 2026 using Next.js 16.4.6 and React 19.3.0. See verification.json for recorded results.

- build-final.txt, lint.txt and typecheck.txt: final successful checks.
- server-component-error.txt: required intentional useState error, removed from final source.
- build-without-revalidation.txt and feedback-before-revalidation.jpg: production cache exercise before the fix.
- home-response.html and office-hours-response.html: unmodified HTTP response HTML, with headings and rows already present.
- office-hours-no-javascript.jpg: same app through a temporary local proxy with Content-Security-Policy: script-src 'none'. Scripts were blocked for this check; DevTools settings were not changed.
- vscode-home.png, vscode-office-hours.png and vscode-feedback.png: app running inside the actual VS Code integrated browser.
- Other captures show the main in-app browser checks and the 390 CSS pixel responsive view. The early pre-fix feedback capture reflects the narrow Codex preview pane; full desktop and actual VS Code captures are used in the report.

The local feedback JSON file is intentionally excluded. The UI screenshot includes test messages created by the production form.
