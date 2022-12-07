const template = document.createElement("template");
template.innerHTML = `
	<style>
	.property-card {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 25px;
		box-shadow: var(--blur);
		overflow: hidden;
	}
	
	.property-image {
		width: 100%;
		height: 200px;
		position: relative;
	}
	
	.property-image img {
		width: 100%;
		height: 100%;
		background: gray;
	}
	
	.property-image .model {
		padding: 10px 15px;
		font-size: 16px;
		position: absolute;
		top: 15px;
		right: 15px;
		z-index: 2;
		color: white;
		background: var(--blue-400);
		border-radius: 10px;
	}
	
	.property-content {
		width: 100%;
		font-weight: bold;
	}
	
	.p-detail {
		display: flex;
		justify-content: space-between;
	}
	
	.p-price {
		color: var(--blue-600);
	}
	
	.p-location {
		display: flex;
		gap: 10px;
		align-items: center;
		color: var(--slate-400);
	}
	
	.p-location img {
		width: 24px;
		height: auto;
	}
	
	.p-rooms {
		display: flex;
		justify-content: space-between;
		color: var(--slate-400);
	}
	
	.p-rooms img {
		width: 24px;
	}
	
	.p-bathroom,
	.p-bedroom,
	.p-sf {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	
	.divider {
		width: 100%;
		height: 1px;
		background: var(--slate-400);
		margin: 20px 0;
	}
	
	.p-owner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.owner-detail {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	
	.owner-detail img {
		height: 40px;
		width: 40px;
		background: gray;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.feedback-icon {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	
	.feedback-icon img {
		width: 24px;
	}
	
	</style>
    <div class="property-card">
		<div class="property-image">
			<img src="" alt="" />
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
	}
}

// customElements.define("header-component", Header);
export default PropertyCard;
