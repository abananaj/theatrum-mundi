const backToTop = gsap.timeline()
		.set(".bttWrap", {autoAlpha:1})
		.from(".bttWrap", {yPercent:100, ease:"back"})
		.from("a", {xPercent:-100, duration:0.35})

ScrollTrigger.create({
	trigger:"body",
	start:"75% bottom",
	animation:backToTop,
	toggleActions:"play none none reverse",
	fastScrollEnd:true
})






