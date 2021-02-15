const main_el = document.getElementById("main");
const body_el = document.querySelector("body");
const { visualViewport } = window;


body_el.addEventListener('mouseover', e => {
    const gap = (visualViewport.width / 2) - e.screenX;
    console.log(e.target.closest("nav"))
    if (e.target.closest("nav")) {
        if (body_el.classList.contains("bg-right")) body_el.classList.remove("bg-right");
        body_el.classList.add("bg-left");
    } else {
        if (gap > 0) {
            if (body_el.classList.contains("bg-right")) body_el.classList.remove("bg-right");
            body_el.classList.add("bg-left");
        } else {
            if (body_el.classList.contains("bg-left")) body_el.classList.remove("bg-left");
            body_el.classList.add("bg-right");
        }
    }
});

body_el.addEventListener("mouseleave", () => {
    if (body_el.classList.contains("bg-right")) body_el.classList.remove("bg-right");
    if (body_el.classList.contains("bg-left")) body_el.classList.remove("bg-left");
});