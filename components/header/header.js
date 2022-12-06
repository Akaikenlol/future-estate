const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
	<style>
	.header {
		max-width: 1200px;
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
	}

	.header img {
		height: auto;
		width: 150px;
	}

	.header ul {
		display: flex;
		gap: 50px;
	}

	.header li {
		list-style-type: none;
	}

	.header a {
		text-decoration: none;
		color: black;
	}

	.header button {
		border: none;
		background: #2563EB;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	}
	
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
