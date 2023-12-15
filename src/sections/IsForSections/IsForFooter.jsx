import Image from "next/image";

import TokenMirrorImage from "@/assets/images/token-mirror.svg";

export function IsForFooter({ children = undefined, bg = undefined }) {
	return (
		<div className="is-for-footer relative pt-20 px-5 pb-5 ]  rounded-[24px] translate-y-20">
			<div className="background absolute top-0 left-0 h-full w-full z-0 rounded-inherit flex items-center overflow-hidden">
				<div className="bg-current opacity-20 w-full h-full absolute" />

				<Image className="w-ful scale-[1.8]" src={bg} alt="Background" />
			</div>

			<Image
				className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px]"
				src={TokenMirrorImage}
				alt="Token mirror"
			/>

			<div className="z-10 relative">{children}</div>
		</div>
	);
}
