const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");
const navItems = document.querySelectorAll("#mainNav .link");
const pages = document.querySelectorAll(".page");

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});

const navToggleEnter = gsap
  .timeline()
  .set(navToggle, { autoAlpha: 1 })
  .from(navToggle, { yPercent: -100, ease: "power4.in" });

// ScrollTrigger.create({
//   trigger: "body",
//   start: "75% bottom",
//   animation: navToggleEnter,
//   toggleActions: "play none none reverse",
//   fastScrollEnd: true
// });

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const targetPageId = event.target.dataset.pageTarget;
    const targetPage = document.getElementById(event.target.dataset.pageTarget);
    targetPage.classList.add("active");
    nav.classList.remove("active");
    navToggle.style.bottom = "-100%";
  });
});

const closeButtons = document.querySelectorAll(".back");
closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.closest(".page").classList.remove("active");
    navToggle.classList.remove("hide");
    navToggle.style.bottom = "0";
  });
});