import assert from "node:assert/strict";
import test from "node:test";

import { greet } from "../public/greet.js";

test('greet("World") returns the expected message', () => {
  assert.equal(greet("World"), "Hello, World!");
});
