import { createSignal, onMount } from "solid-js";

import imageSend from "../assets/send.svg";

function Footer(props) {
	console.log(props.menus);
	return (
		<div class="footer">
			<a href="/" class="logo">
				{props.logo}
			</a>
			<div class="menu-fill" />
			<div class="menus">
				{props.menus.map((menu) => (
					<span class="menu">
						<h3>{menu.title}</h3>
						<ul class="links">
							{menu.items.map((item) => (
								<li>
									<a href={item.toLowerCase()}>{item}</a>
								</li>
							))}
						</ul>
					</span>
				))}
			</div>
			<div class="menu-fill" />
			<div class="divider" />
			<div class="subscribe">
				<h3>Subscribe</h3>
				<div class="email">
					<input type="email" placeholder="Enter your email address" />
					<button type="button" onclick={() => alert("Click!")}>
						<img src={imageSend} alt="" />
					</button>
				</div>
				<p>Join our newsletter to stay up to date on features and releases</p>
			</div>
		</div>
	);
}

export default Footer;
