import { greet } from "./greet.js";

const heading = document.querySelector("#greeting");
heading.textContent = greet("World");
