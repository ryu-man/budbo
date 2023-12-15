import sidebarImage from "@/assets/images/sidebar.png";
import { Input } from "@/components";
import Image from "next/image";
import Link from "next/link";

import chrisImage from "@/assets/images/quotes/chris.jpg";
import { ChevronRightIcon } from "@/icons";

export function Sidebar() {
	return (
		<div className="sidebar sticky top-44 right-0 flex flex-col w-[350px] rounded-lg bg-white-lilac-50 border overflow-hidden h-fit pointer-events-auto">
			<Image
				className="h-auto -translate-y-[16%] absolute top-0 left-0 w-full"
				src={sidebarImage}
				alt="Sidebar image"
			/>

			<div className="flex flex-col items-center gap-6 px-6 py-4 mt-32">
				<div className="flex flex-col gap-4 w-full">
					<div>
						<label className="text-neutral-600" htmlFor="">
							Email Address
						</label>
						<Input />
					</div>

					<div>
						<label className="text-neutral-600" htmlFor="">
							Password
						</label>
						<Input />
					</div>

					<button className="bg-jungle-green-600 text-white text-xl rounded-md py-2 px-4 w-full hover:bg-jungle-green-700 transition-colors duration-200">
						Login
					</button>
				</div>

				<div className="flex flex-col items-center gap-4">
					<Link className="text-primary underline" href="/reset">
						Forget Password
					</Link>

					<div>
						Don&apos;t have an account?{" "}
						<Link className="text-primary underline" href="/reset">
							register
						</Link>{" "}
						now.
					</div>
				</div>
			</div>

			<div className="bg-white border-t border-neutral-300 pb-4 flex flex-col gap-8 text-rum-700">
				<div className="quote flex flex-col px-6 pt-6 gap-6">
					<div className="flex gap-4">
						<Image
							className="w-12 h-12 rounded-full"
							src={chrisImage}
							alt="Quote person image"
						/>
						<div className="flex flex-col">
							<div className="font-bold text-black">Chris</div>
							<div className="text-rum-700">Beach City Hydroponics</div>
						</div>
					</div>

					<p className="text-base">
						Very excited to be partnering up with Budbo and using the Budbo
						Connect platform!.
					</p>
				</div>

				<div className="qutotes-navigation flex justify-between px-20 text-xs">
					<span className="rotate-180">
						<ChevronRightIcon />
					</span>
					<span>
						<ChevronRightIcon />
					</span>
				</div>
			</div>
		</div>
	);
}
