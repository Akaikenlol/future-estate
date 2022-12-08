const sr = ScrollReveal({
	distance: "60px",
	duration: 2000,
});

sr.reveal(`.hero-content`, { origin: "left" });
sr.reveal(`.hero-image`, { origin: "right" });

sr.reveal(`.selling-point-card, .property-card`, {
	origin: "top",
	interval: 300,
	delay: 500,
});
