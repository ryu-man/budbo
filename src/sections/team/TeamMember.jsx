import Image from "next/image";

export function TeamMemeber({ member }) {
	const { name, position, description, photo } = member;

	return (
		<div className="team-member flex flex-col gap-4 items-center border border-neutral-200 rounded-lg py-8 px-2">
			<div className="border border-neutral-300 rounded-full w-fit p-2">
				<Image
					className="w-24 h-24 rounded-full object-cover"
					src={photo}
					alt={name}
				/>
			</div>

			<div className="flex flex-col items-center gap-1 text-center">
				<h6>{name}</h6>
				<div className="text-rum-700">{position}</div>
			</div>

			<p className="text-base text-rum-700">{description}</p>
		</div>
	);
}
