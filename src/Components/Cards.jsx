function Cards(props) {
	return (
		<div class="cards">
			{props.cards.map((card) => (
				<div class="card">
					<img class="image" src={card.image} alt={card.imageAlt} />
					<h2 class="title">{card.title}</h2>
					<p class="description">{card.description}</p>
					<a href={card.link}>Read more</a>
				</div>
			))}
		</div>
	);
}

export default Cards;
