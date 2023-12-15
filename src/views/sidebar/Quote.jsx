import Image from "next/image";

export function Quote({ quote = {} }) {
	const { name = "", location = "", text = "", image = undefined } = quote;
	return (
		<div className="quote flex flex-col px-6 pt-6 gap-6">
			<div className="flex gap-4">
				<Image
					className="w-12 h-12 rounded-full"
					src={image}
					alt="Quote person image"
				/>
				<div className="flex flex-col">
					<div className="font-bold text-black">{name}</div>
					<div className="text-rum-700">{location}</div>
				</div>
			</div>

			<p className="text-base">{text}</p>
		</div>
	);
}
