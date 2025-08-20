import { Swiper } from "swiper";
import { Mousewheel, Pagination } from "swiper/modules";

const grSwiper = new Swiper(".gr-swiper", {
    modules: [Mousewheel, Pagination],
    mousewheel: true,
    direction: "vertical",
    speed: 1700,
    parallax: true,
});

// SWIPER TITLE
document.querySelectorAll(".gr-slide-content h1").forEach((e) => {
    e.innerHTML = e.textContent
        .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
        .replace(/(\S*)/g, (m) => {
            return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
        });
    e.querySelectorAll(".letter").forEach(function (l, i) {
        l.setAttribute(
            "style",
            `z-index: -${i}; transition-duration: ${i / 5 + 1}s`
        );
    });
});

grSwiper.on("slideChange", function () {
    document.querySelectorAll(".gr-slide-content").forEach(function (e, i) {
        return grSwiper.activeIndex === i
            ? e.classList.add("gr-slide-active")
            : e.classList.remove("gr-slide-active");
    });
});

// GROW MOBILE MENU
const grButton = document?.querySelector("[data-growButtonMenu]");
const grNavActive = document?.querySelector("[data-grNavActive]");

grButton?.addEventListener("click", () => {
    grButton.classList.toggle("gr-dropdown-active");
    grNavActive.classList.toggle("gr-nav-active");
});

// DIALOG
const grBtnDialog = document?.querySelector("#gr-btn-dialog");
