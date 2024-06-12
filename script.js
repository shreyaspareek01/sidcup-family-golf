let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursorBlur");
let h4nav = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

h4nav.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#96c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.to("#aboutUs img", {
  scale: 1.7,
  duration: 1,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -65%",
    end: "top -95%",
    scrub: 1,
  },
});

gsap.to("#cardsContainer", {
  left: 110,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutUs",
    scroller: "body",
    start: "top 20%",
    end: "top -10%",
    scrub: 1.5,
  },
});

gsap.to("#colon1", {
  top: 30,
  left: 250,
  scrollTrigger: {
    trigger: "#quote",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 4,
  },
});

gsap.to("#colon2", {
  bottom: 65,
  right: 260,
  scrollTrigger: {
    trigger: "#quote",
    scroller: "body",
    start: "top 45%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.to("#page4 h1", {
  y: -100,
  scrollTrigger: {
    trigger: "#quote",
    scroller: "body",
    // markers:true,
    start: "top 40%",
    end: "top 10%",
    scrub: 3,
  },
});
