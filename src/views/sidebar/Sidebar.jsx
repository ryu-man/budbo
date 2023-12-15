import sidebarImage from "@/assets/images/sidebar.png";
import { Input } from "@/components";
import Image from "next/image";
import Link from "next/link";

import chrisImage from "@/assets/images/quotes/chris.jpg";
import { ChevronRightIcon } from "@/icons";
import { Quote } from "./Quote";
import { Quotes } from "./Quotes";

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

			<Quotes />
		</div>
	);
}
