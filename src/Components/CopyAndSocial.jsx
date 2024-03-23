function Footer(props) {
	return (
		<div class="copy-and-social">
			<div class="info">
				<div class="copy">{props.copy}</div>
				<div class="links">
					{props.links.map((link) => (
						<a href={link.url}>{link.name}</a>
					))}
				</div>
			</div>
			<div class="social">
				{props.social.map((social) => (
					<a href={social.url}>
						<img src={social.icon} alt={social.name} />
					</a>
				))}
			</div>
		</div>
	);
}

export default Footer;
