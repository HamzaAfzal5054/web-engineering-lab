import { greet } from "./greet.js";
import { getRequired } from "./utils.js";
getRequired("#greeting").textContent = greet("Hamza Afzal");
const links = [...document.querySelectorAll("nav a")];
const sections = links.map((link) => getRequired(link.hash));
function updateLocation() {
    const marker = window.innerHeight * 0.4;
    let current = sections[0];
    if (current === undefined)
        return;
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker)
            current = section;
    }
    for (const link of links) {
        if (link.hash === `#${current.id}`)
            link.setAttribute("aria-current", "location");
        else
            link.removeAttribute("aria-current");
    }
}
window.addEventListener("scroll", updateLocation, { passive: true });
window.addEventListener("resize", updateLocation);
updateLocation();
