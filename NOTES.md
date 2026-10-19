# Lab 04 Notes

Hamza Afzal · Roll number 2430-0176

## Tasks 1 through 8

1. The universal reset includes pseudo-elements. Border-box includes content, padding and border in the declared width. Main uses max-inline-size: 60rem, margin-inline: auto and padding-block: 1rem. The viewport metadata was already present and is retained.
2. For the original conflict demonstration, nav ul li a has specificity (0,0,4), .nav-link has (0,1,0), and a[aria-current="location"] has (0,1,1). With normal declarations in the same layer, the current link is crimson; the other link is darkgreen. :where(nav ul li) a has (0,0,1). No !important is needed. The final page uses theme accent tokens for both links and bold underlining for the current link so the demonstration's fixed purple, green and crimson do not harm dark-mode contrast.
3. All rules belong to reset, base, components or utilities. Normal declarations in later layers outrank earlier layers before selector specificity is considered. Inheritance supplies a value only if no applicable declaration supplies one.
4. The shared spacing token is 1rem. Theme tokens use oklch lightness, chroma and hue; hue is 255. color-mix derives border and muted colors. light-dark selects the active scheme. Body supplies inherited text properties; form controls explicitly inherit the font.
5. SVG uses currentColor for strokes and fills. The svg color follows the accent token. Both themes are tested through browser media emulation.
6. Header and navigation use Flexbox. Header wraps, aligns items centrally and distributes title and navigation with space-between. Navigation spacing comes from gap.
7. Office hours uses Grid with 2fr 1fr columns; the form uses 1fr 1fr. The schedule heading and status, Topic fieldset and Message span all columns. The retained Location column makes this a five-column table after adding Book.
8. At 40rem or less, both grids use one column. At the usual 16px root size, 40rem corresponds to 640 CSS pixels. A 390px viewport was tested.

## Tasks 9 and 10

Each booking button carries its day in dataset.day. One tbody listener handles bubbled clicks and finds buttons with closest(). The row's selected class and aria-pressed state stay synchronized. querySelectorAll counts selected rows. A role=status paragraph announces pending work, confirmation and cancellation. The button is temporarily disabled to prevent duplicate operations on that row.

## Task 11 Runtime prediction and result

The lab snippet prints:

```text
1 start
4 end
3 promise
2 timeout
```

The call stack runs both synchronous console.log statements first. Promise.then schedules a microtask. setTimeout schedules a later task even when its delay is zero. The browser drains microtasks before running the timer task. This order was also checked by executing the equivalent sequence in Chrome and collecting its output.

utils.js exports delay and makeCounter. delay returns a Promise resolved by a timer. await delay(1000) suspends the current async handler without blocking other browser work. makeCounter returns a function that retains the lexical count variable after the outer function returns. Each confirmed selection increments that counter. Cancellation updates the selected count without claiming a new confirmation. State is in memory and resets on reload; this is a local lab demonstration, not a server booking service.

## Task 12 Verification and repository status

Chrome desktop 1440 × 1100 and mobile 390 × 844 were tested using Playwright because the Browser plugin was unavailable. Enter selected Monday; Space cancelled it; Wednesday then received confirmation number 2. There were no page JavaScript errors. Both independently emulated light and dark Lighthouse accessibility audits scored 100. Automated audits do not cover every accessibility concern. The existing unit test and ESLint checks passed.

The original script.js remains a module because it imports greet.js. Changing it to a classic script as shown in the generic handout would break this repository. main.js is loaded as another module.

The implementation and lab notes are tracked in this repository. Browser screenshots, both Lighthouse reports and the verification results are included in evidence/lab-04. The downloadable archive also contains a standalone report for review.

## Source and assistance

Based on the provided Lab 04 Statement and the existing repository at https://github.com/HamzaAfzal5054/web-engineering-lab. Implementation, explanations and automated verification were prepared with Codex assistance. Screenshots are captures of the actual local implementation and Lighthouse reports.
