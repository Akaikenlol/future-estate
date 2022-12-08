const template = document.createElement("template");
template.innerHTML = `
	<style>@import url("/components/property-card/property-card.css");</style>
    <div class="property-card">
		<div class="property-image">
			<img src="../assets/images/background-property.png" alt="" />
			<div class="model">FOR SALE</div>
		</div>
		<div class="property-content">
			<div style="padding: 20px">
				<div class="p-detail">
					<p class="p-type">Apartment</p>
					<p class="p-price">$600,000</p>
				</div>
				<div class="p-location">
					<img src="../assets/icons/location.png" alt="" />
					<p>Bahan, Myanmar</p>
				</div>
				<div class="p-rooms">
					<div class="p-bathroom">
						<img src="../assets/icons/bathroom.png" alt="" />
						<p>2</p>
					</div>
					<div class="p-bedroom">
						<img src="../assets/icons/bedroom.png" alt="" />
						<p>4</p>
					</div>
					<div class="p-sf">
						<img src="../assets/icons/area.png" alt="" />
						<p>1400sqft</p>
					</div>
				</div>
				<div class="divider"></div>
				<div class="p-owner">
					<div class="owner-detail">
						<img src="" alt="" />
						<p>Mommy Sage</p>
					</div>
					<div class="feedback-icon">
						<img src="../assets/icons/heart-blue.png" alt="" />
						<img src="../assets/icons/share.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
`;

class PropertyCard extends HTMLElement {
	constructor() {
		super();
		this.showInfo = false;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	static get observedAttributes() {
		return ["type", "price", "location", "bathroom", "bedroom", "area", "owner"];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this.shadowRoot.querySelector(".p-type").innerText =
			this.getAttribute("type");
		this.shadowRoot.querySelector(".p-price").innerText =
			this.getAttribute("price");
		this.shadowRoot.querySelector(".p-location p").innerText =
			this.getAttribute("location");
		this.shadowRoot.querySelector(".p-bathroom p").innerText =
			this.getAttribute("bathroom");
		this.shadowRoot.querySelector(".p-bedroom p").innerText =
			this.getAttribute("bedroom");
		this.shadowRoot.querySelector(".p-sf p").innerText =
			this.getAttribute("area");
		this.shadowRoot.querySelector(".owner-detail p").innerText =
			this.getAttribute("owner");
		const linkElem = document.createElement("link");
		linkElem.setAttribute("rel", "stylesheet");
		linkElem.setAttribute("href", "style.css");

		shadow.appendChild(linkElem);
	}
}

// customElements.define("header-component", Header);
export default PropertyCard;
