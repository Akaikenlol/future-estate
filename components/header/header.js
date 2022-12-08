const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
	<style>
	
	@import url("/components/header/style.css");
	</style>
    <div class="header">
        <img src="../assets/images/future-estate.png" />
		<ul>
			<li><a href="">Home</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Service</a></li>
			<li><a href="">Blog</a></li>
			<li><a href="">Contact</a></li>
		</ul>
		<button>Sign Up</button>
    </div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(headerTemplate.content);
	}
}

// customElements.define("header-component", Header);
export default Header;
