# Lab 05 Legacy Translation Notes

Hamza Afzal · 2430-0176

## Six jQuery calls and native equivalents

| Legacy call                         | Native equivalent                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `$(document).ready(fn)`             | Load a `type="module"` script, or use `DOMContentLoaded`. Modules defer until HTML parsing finishes.                                       |
| `$("#name").val()`                  | `getRequired<HTMLInputElement>("#name").value`; trim with `.trim()`.                                                                       |
| `.after(html)`                      | Create a span with `document.createElement`, set `textContent` and attributes, then call `input.after(error)`.                             |
| `$(".error").remove()`              | `form.querySelectorAll(".error").forEach((el) => el.remove())`.                                                                            |
| `.text(message).hide().fadeIn(400)` | Assign `status.textContent = message`; remove the fade in the native port. A CSS opacity transition can be added if animation is required. |
| `$form[0].reset()`                  | `form.reset()` on an HTMLFormElement.                                                                                                      |

## Legacy smells

1. `var` has function scope; `const` and `let` express modern block scope and reassignment intent.
2. `$.trim` adds a library dependency for an operation available as `String.prototype.trim()`.
3. Error messages are built as HTML strings; element creation and textContent avoid parsing text as markup.
4. `email.indexOf("@") === -1` is less direct than `!email.includes("@")`.

jQuery standardized common tasks across inconsistent browsers. Modern native DOM APIs cover these tasks, but older deployed projects still need maintenance. The exercise pins 3.7.1 because its script depends on $.trim. The tested legacy baseline is preserved in Git commit 82aa9ae; the final page loads no jQuery.

## Behavior preserved and repository adaptations

Both versions trim name/email, require a nonempty name, and accept an email containing `@`. Empty submission displays the same two messages; a valid submission displays thanks and resets the form. The native version additionally marks invalid fields with aria-invalid, then removes the markers and messages on the next attempt. The fade is intentionally dropped.

The form keeps novalidate and required attributes. Validation intentionally matches the lab's simple rule; it is not full email verification. The Message textarea remains required in markup but is not checked by the supplied custom validator. The success text is a local demonstration and no feedback is transmitted or stored.

This repository already had a booking live region #status and a form live region #form-status. Both legacy and native feedback handlers use #form-status so booking feedback remains separate. The older form submit handler was removed to avoid duplicate handlers. All three existing schedule rows remain in the typed Slot array, matching their visible times and locations.

## Actual compiler observations

The first untyped conversion produced TS18047 (`form` is possibly null) and TS7006 (helper parameters implicitly have an any type). The feedback file initially had no imports/exports, which also caused its global `status` to conflict with the DOM declaration. Importing getRequired made it a module; typed helper parameters and checked DOM lookup resolved these errors.

Structural typing accepted an object with day, start, end, room and an extra id when passed through a variable. `describeSlot({ day: "Monday" })` produced TS2739 because start, end and room were missing. The temporary error was removed.

Changing `delay(1000)` to `delay("1000")` produced TS2345: a string is not assignable to number. A SHA-256 comparison confirmed public/main.js was unchanged by that failed build under noEmitOnError. Restoring the number made build and typecheck pass. Exact compiler transcripts are in evidence/lab-05.

## TypeScript concepts

Annotations describe values and function results; inference supplies obvious types. Slot is a structural interface. getRequired<T extends Element> is generic and throws on null; its generic type is a compile-time expectation rather than a runtime tag check. event.target is narrowed with instanceof Element, closest is checked for null, and find is checked for undefined. Type annotations and interfaces disappear from the emitted JavaScript. Browsers load public/_.js; src/_.ts is maintained as source.

## Assistance disclosure

Prepared with Codex assistance, including implementation, explanations and automated verification. The handout states an AI-assistant restriction for this lab; this work records the assistance and does not claim independent completion. Evidence consists of actual browser captures and compiler output.

## Final verification

Chrome passed native empty-form, invalid-email and valid-form tests. A valid submission cleared both error markers and reset inputs. The request log contains no jQuery on the final page. Tab and Enter booked Friday; Space cancelled it. The pending-button focus return was corrected during testing. Mobile at 390 CSS pixels had no page-level overflow.

Standard Lighthouse accessibility scored 100 in light and dark mode. Error-state snapshot audits passed all 29 applicable checks in both themes with two alerts visible. Typecheck, build, the existing unit test, ESLint and formatting checks passed. Screenshots, raw request/results JSON, compiler transcripts and both kinds of Lighthouse reports are retained under evidence/lab-05.
