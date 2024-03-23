function Navigation(props) {
	return (
		<nav class="nav">
			<div class="left">
				<a href="/" class="logo">
					{props.logo}
				</a>
				<span class="mobile hamburger">☰</span>
			</div>
			<ul class="menu">
				{props.menu.map((item) => (
					<li>
						<a href={item.toLowerCase()}>{item}</a>
					</li>
				))}
			</ul>
			{props.actions && props.actions}
		</nav>
	);
}

export default Navigation;
