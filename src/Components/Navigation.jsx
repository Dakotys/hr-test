function Navigation(props) {
	return (
		<nav class="nav">
			<a href="/" class="logo">
				{props.logo}
			</a>
			<ul class="menu">
				{props.menu.map((item) => (
					<li>
						<a href={item.toLowerCase()}>{item}</a>
					</li>
				))}
			</ul>
			<div class="buttons">
				<button type="button" class="login">
					Profile
				</button>
				<button type="button" class="signup">
					Cart
				</button>
			</div>
		</nav>
	);
}

export default Navigation;
