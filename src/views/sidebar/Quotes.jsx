"use client";

import { ChevronRightIcon } from "@/icons";
import { Quote } from "./Quote";

import chrisImage from "@/assets/images/quotes/chris.jpg";
import ginaImage from "@/assets/images/quotes/gina.jpg";
import isaacImage from "@/assets/images/quotes/isaac.jpg";
import skyImage from "@/assets/images/quotes/sky.jpg";
import { useEffect, useState } from "react";
import { Dots } from "./Dots";

const quotes = [
	{
		name: "Chris",
		location: "Beach City Hydroponics",
		text: "Very excited to be partnering up with Budbo and using the Budbo Connect platform!.",
		image: chrisImage,
	},
	{
		name: "Gina DeSito",
		location: "Club Nirvana",
		text: "This is the potential amazon of the cannabis, cbd, and hemp industries, its a one stop shop for finding and buying!",
		image: ginaImage,
	},
	{
		name: "Isaac Rodriguez",
		location: "Austin, TX",
		text: "The blockchain integration and underlying technology is what attracted me to budbo as an early investor",
		image: isaacImage,
	},
	{
		name: "Sky Grizzly",
		location: "GI Grow",
		text: "The platform does a lot of magic for me, makes things easy, glad its here ",
		image: skyImage,
	},
];

export function Quotes() {
	const [selectedQuote, setSelectedQuote] = useState(0);

	return (
		<div className="bg-white border-t border-neutral-300 pb-4 flex flex-col gap-8 text-rum-700">
			<div className="realtive h-[164px] w-full">
				{quotes.map((quote, i) => (
					<div
						key={quote.name}
						className="absolute w-full"
						style={{ opacity: selectedQuote === i ? "1" : "0" }}
					>
						<Quote quote={quote} />
					</div>
				))}
			</div>

			<div className="qutotes-navigation flex justify-between px-20 text-xs">
				<button
					className="rotate-180"
					onClick={() => {
						const index = selectedQuote - 1;
						console.log(index);
						setSelectedQuote(index < 0 ? quotes.length - 1 : index);
					}}
				>
					<ChevronRightIcon />
				</button>

				<Dots length={quotes.length} active={selectedQuote} />

				<button
					onClick={() => {
						setSelectedQuote((selectedQuote + 1) % quotes.length);
					}}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</div>
	);
}
