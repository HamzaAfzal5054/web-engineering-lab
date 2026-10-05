import { greet } from "./greet.js";

document.querySelector("#greeting").textContent = greet("World");
const links = [...document.querySelectorAll("nav a")];
const sections = links.map((link) => document.querySelector(link.hash));
function updateLocation() {
  const marker = window.innerHeight * 0.4;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section;
  }
  for (const link of links) {
    if (link.hash === `#${current.id}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}
window.addEventListener("scroll", updateLocation, { passive: true });
window.addEventListener("resize", updateLocation);
updateLocation();
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-status").textContent =
    "Your practice form passed validation. This demo does not send or store messages.";
});
