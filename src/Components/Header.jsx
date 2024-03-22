function Header(props) {
	return (
		<div class="header">
			<div class="left">
				<h1 class="headline">{props.headline}</h1>
				<p class="description">{props.description}</p>
				<div class="actions">{props.actions}</div>
			</div>
			<div class="right">{props.image}</div>
		</div>
	);
}

export default Header;
