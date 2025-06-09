const navToggle = gsap
	.timeline()
	.set("#navbar", { autoAlpha: 1 })
	.from("#navbar", { yPercent: 100, ease: "power4.in" })
	.from("#navbar nav ul li", { xPercent: -100, duration: 0.35 });

ScrollTrigger.create({
	trigger: "body",
	start: "75% bottom",
	animation: navToggle,
	toggleActions: "play none none reverse",
	fastScrollEnd: true,
	markers: {
		// indent: 150 * i,
		startColor: "black",
		endColor: "black"
	}
});