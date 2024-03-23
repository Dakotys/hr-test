import { createSignal, onMount } from "solid-js";

import imageLeft from "../assets/left.svg";

function Carousel(props) {
	const cardRefs = [];
	let wrapperRef;

	let cardWidth;
	let gap;

	onMount(() => {
		cardWidth = Number.parseInt(
			getComputedStyle(wrapperRef).getPropertyValue("--width").slice(0, -2),
		);
		gap = Number.parseInt(
			getComputedStyle(wrapperRef).getPropertyValue("--gap").slice(0, -2),
		);

		const observer = new IntersectionObserver(
			(entries) => {
				// biome-ignore lint/complexity/noForEach: <explanation>
				entries.forEach((entry) => {
					entry.target.classList.toggle("hiding", !entry.isIntersecting);
				});
			},
			{
				threshold: 1,
			},
		);
		// biome-ignore lint/complexity/noForEach: <explanation>
		cardRefs.forEach((ref) => {
			observer.observe(ref);
		});
	});

	const [position, setPosition] = createSignal(0);
	const move = (direction) => {
		setPosition((prev) =>
			Math.min(
				Math.max(prev + direction * (cardWidth + gap), 0),
				wrapperRef.scrollWidth - wrapperRef.clientWidth,
			),
		);
	};

	return (
		<div class="carousel">
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={() => move(1)} class="right">
				<img style={{ transform: "rotate(180deg)" }} src={imageLeft} alt="" />
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={() => move(-1)} class="left">
				<img src={imageLeft} alt="" />
			</div>
			<div
				class="wrapper"
				ref={wrapperRef}
				style={{
					transform: `translateX(${-position()}px)`,
				}}
			>
				{props.cards.map((card) => (
					<div ref={(e) => cardRefs.push(e)} class="card">
						<p class="description">{card.description}</p>
						<span class="info">
							<img class="avatar" src={card.avatar} alt="avatar" />
							<span class="details">
								<div class="name">{card.name}</div>
								<div class="position">{card.position}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
