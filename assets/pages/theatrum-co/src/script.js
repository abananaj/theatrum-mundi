gsap.registerPlugin(SplitText, ScrollTrigger);

window.addEventListener("load", () => gsap.set("body", { autoAlpha: 1 }));

const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".scrollContainer"),
	smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrollContainer", {
	scrollTop(value) {
		return arguments.length
			? locoScroll.scrollTo(value, 0, 0)
			: locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight
		};
	},

	pinType: document.querySelector(".scrollContainer").style.transform
		? "transform"
		: "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.to(".panel", {
	scaleY: 0,
	duration: 1.65,
	ease: "power4.inOut"
});

const splitName = new SplitText("h1", {
	type: "chars"
});
const splitJL = new SplitText(".JL", {
	type: "chars"
});

const nameTL = gsap.timeline();

nameTL
	.set("h1", { scale: 1.4 })
	.from(splitName.chars, {
		yPercent: gsap.utils.wrap([200, -80]),
		opacity: 0,
		stagger: 0.018,
		duration: 1.6,
		ease: "power4.inOut"
	})
	.to("h1", { scale: 1, duration: 0.95, ease: "power3.out" }, "-=0.75")
	.from(".hero", { opacity: 0, duration: 4, ease: "power2.out" }, "-=0.55");

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".sec-img",
		// markers: true,
		scrub: 0.4,
		scroller: ".scrollContainer",
		pin: true,
		start: "center center",
		end: "+=100%"
	}
});

tl
	.to(".mask", {
		scaleY: 0
	})
	.from(
		splitJL.chars,
		{
			opacity: 0,
			x: -100,
			stagger: 0.015
		},
		0
	)
	.from(
		".img",
		{
			opacity: 0,
			scale: 1.7
		},
		0
	);

gsap.from("p", {
	scrollTrigger: {
		trigger: ".sec-p",
		// markers: true,
		start: "top center",
		scroller: ".scrollContainer",
		toggleActions: "play none none reverse"
	},
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out"
});

//PINNING

gsap.to(".pinQuote", {
	yPercent: -100,
	ease: "none",
	stagger: 0.5,
	scrollTrigger: {
		trigger: "#container",
		start: "top top",
		end: "+=300%",
		scrub: true,
		pin: true
	}
});

gsap.set(".pinQuote", { zIndex: (i, target, targets) => targets.length - i });
