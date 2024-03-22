import "./app.css";

import Cards from "./Components/Cards";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import PriceCards from "./Components/PriceCards";
import headerImage from "./assets/header.png";

function App() {
	return (
		<div class="app">
			<Navigation
				logo="ACME"
				menu={["First", "Second", "Third", "Fourth", "Fifth", "Sixth"]}
			/>
			<Header
				headline="Medium length display headline"
				description="Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right"
				actions={
					<div class="actions">
						<button type="button" onClick={() => alert("Button clicked")}>
							Action
						</button>
						<span class="header-description">
							Separated they live in Books, but sometimes. Learn more
						</span>
					</div>
				}
				image={<img src={headerImage} alt="Header" />}
			/>
			<Cards
				cards={[
					{
						image: "https://source.unsplash.com/random/80x80",
						imageAlt: "Random image",
						title: "Medium length headline",
						description:
							"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.",
						link: "/",
					},
					{
						image: "https://source.unsplash.com/random/700x600",
						imageAlt: "Random image",
						title: "Medium length headline",
						description:
							"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.",
						link: "/",
					},
					{
						image: "https://source.unsplash.com/random/600x600",
						imageAlt: "Random image",
						title: "Medium length headline",
						description:
							"All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.",
						link: "/",
					},
				]}
			/>
			<Form />
			<PriceCards
				cards={[
					{
						icon: "src/assets/price.png",
						price: "$68",
						description:
							"Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the playbar,",
						features: [
							"Showcase and embed your work",
							"Publish across social channels",
						],
						link: "/",
					},
					{
						icon: "https://source.unsplash.com/random/80x80",
						price: "$99",
						description:
							"Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the playbar,",
						features: [
							"Showcase and embed your work",
							"Publish across social channels",
							"Agree to subscribe to newsletters",
							"Premium support",
						],
						link: "/",
					},
				]}
			/>
			<Carousel
				cards={[
					{
						description:
							"“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
					{
						description:
							"“Kids ages 8 to 12 can expand their digital creativity through hands-on projects at Apple. Campers choose one of three tracks, then spend 90 minutes a day for three days. Gorgeous, highquality video sharing on desktop, mobile, tablet.”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
					{
						description:
							"“Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
					{
						description:
							"“Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
					{
						description:
							"“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
					{
						description:
							"“Kids ages 8 to 12 can expand their digital creativity through hands-on projects at Apple. Campers choose one of three tracks, then spend 90 minutes a day for three days. Gorgeous, highquality video sharing on desktop, mobile, tablet.”",
						avatar: "https://source.unsplash.com/random/40x40",
						name: "John Doe",
						position: "CEO",
					},
				]}
			/>
			<Footer
				logo="ACME"
				menus={[
					{
						title: "First column",
						items: ["First page", "Second page", "Third", "Fourth"],
					},
					{
						title: "Second column",
						items: ["Fifth page", "Sixth page", "Seventh"],
					},
					{
						title: "Third column",
						items: ["Eighth page", "Ninth page", "Tenth"],
					},
				]}
			/>
		</div>
	);
}

export default App;
