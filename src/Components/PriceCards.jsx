function PriceCards(props) {
	return (
		<div class="price-cards">
			{props.cards.map((card) => (
				<div class="card">
					<img class="icon" src={card.icon} alt="icon" />
					<div>
						<span class="price">{card.price}</span>
						<span class="period">/mo</span>
					</div>
					<p class="description">{card.description}</p>
					<div class="divider" />
					<div class="features-title">Feature One</div>
					<ul class="features">
						{card.features.map((feature) => (
							<li class="feature">{feature}</li>
						))}
					</ul>
					<button type="button">Action</button>
					<div class="end">
						Separated they live in right. <a href={card.link}>Link</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default PriceCards;
