import "./App.css";
import {useState, useEffect} from "react";

function App() {
	// fetch data from api
	// const fetchItems = async () => {
	// 	const response = await fetch("https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395");
	// 	const data = await response.json();
	// 	return data;
	// };

	// useEffect(() => {
	// 	// fetch data from API
	// 	const data = fetchItems();
	// 	console.log(data);
	// }, []);

	return (
		<div>
			<blockquote class="twitter-tweet">
				<p lang="en" dir="ltr">
					I will keep supporting Dogecoin
				</p>
				&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1538406040374595585?ref_src=twsrc%5Etfw">June 19, 2022</a>
			</blockquote>{" "}
			<blockquote class="twitter-tweet">
				<p lang="en" dir="ltr">
					“My children didn&#39;t choose to be born, I chose to have children. They owe me nothing, I owe them everything.” — Elon Musk{" "}
					<a href="https://t.co/oBflQnATL1">pic.twitter.com/oBflQnATL1</a>
				</p>
				&mdash; Eva Fox 🦊🇺🇦 Shadow Crew (@EvaFoxU) <a href="https://twitter.com/EvaFoxU/status/1538440196253007873?ref_src=twsrc%5Etfw">June 19, 2022</a>
			</blockquote>{" "}
			<blockquote class="twitter-tweet">
				<p lang="en" dir="ltr">
					Rocketry is amazing again because Of <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">@elonmusk</a> <a href="https://twitter.com/SpaceX?ref_src=twsrc%5Etfw">@SpaceX</a>{" "}
					<a href="https://t.co/QXu99ZW13b">pic.twitter.com/QXu99ZW13b</a>
				</p>
				&mdash; Tesla Owners Silicon Valley (@teslaownersSV) <a href="https://twitter.com/teslaownersSV/status/1538669414630903810?ref_src=twsrc%5Etfw">June 19, 2022</a>
			</blockquote>{" "}
		</div>
	);
}

export default App;
