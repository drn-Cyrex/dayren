const wfDropdownBtn = document?.querySelector(".wf-dropdown-btn");
const wfNav = document?.querySelector(".wf-nav");
const wfNavItem = document?.querySelector("wf-nav-list > li");

wfDropdownBtn.addEventListener("click", () => {
   wfDropdownBtn.classList.toggle("wf-dropdown-active");
   wfNav.classList.toggle("wf-nav-active");
});

let nextDom = document.getElementById("wf-next");
let prevDom = document.getElementById("wf-prev");

let carouselDom = document.querySelector(".wf-slider");
let SliderDom = carouselDom.querySelector(".wf-slider .wf-slider-wrapper");
let thumbnailBorderDom = document.querySelector(".wf-slider .wf-thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".wf-item");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 1000;

nextDom.onclick = function () {
   showSlider("wf-next");
};

prevDom.onclick = function () {
   showSlider("wf-prev");
};

let runTimeOut;

function showSlider(type) {
   let SliderItemsDom = SliderDom.querySelectorAll(
      ".wf-slider .wf-slider-wrapper .wf-slide"
   );
   let thumbnailItemsDom = document.querySelectorAll(
      ".wf-slider .wf-thumbnail .wf-item"
   );

   if (type === "wf-next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("wf-next");
   } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
         thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("wf-prev");
   }

   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("wf-next");
      carouselDom.classList.remove("wf-prev");
   }, timeRunning);
}
