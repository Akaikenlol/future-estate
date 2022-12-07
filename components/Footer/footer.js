const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("/components/footer/style.css");
	</style>
    <div class="footer">
		<div class="footer-container">
		<div class="brand">
			<img src="../assets/images/future-estate.png" />
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis illum non vitae, officia similique quos corrupti soluta.</p>
		</div>
		<ul class="footer-links">
			<h1>Quick Links</h1>
			<li><a href="">Home</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Service</a></li>
			<li><a href="">Blog</a></li>
			<li><a href="">Contact</a></li>
		</ul>

		<ul class="footer-services">
			<h1>Services</h1>
			<li><a href="">About Us</a></li>
			<li><a href="">Blog & Articles</a></li>
			<li><a href="">Terms & Conditions</a></li>
			<li><a href="">Privacy Policy</a></li>
			<li><a href="">Contact Us</a></li>
		</ul>

		<ul class="footer-contact">
			<h1>Quick Links</h1>
			<li>Address: 002 Crown Street</li>
			<li>London, SW17 55Z</li>
			<li>Phone: 000 123 456 789</li>
			<li>Email: futureestate@email.com</li>
		</ul>
		
		</div>
    </div>
`;

class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

export default Footer;
