import { Input } from "@/components";
import "./drawer.css";
import Link from "next/link";

import logoWithText from "@/assets/images/logos/budbo-logo-with-text.svg";
import Image from "next/image";
import { ExchangeIcon } from "@/icons";

export function LoginDrawer({}) {
	return (
		<div className="login-drawer">
			<div className="w-full h-full flex flex-col py-20 box-border">
				<div className="flex flex-col gap-4 px-10 pb-8">
					<h4 className="">
						<span className="text-primary">Hello! </span>
						<span>
							Login to your <br /> account
						</span>
					</h4>

					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="">Email Address</label>
							<Input />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Password</label>
							<Input />
						</div>

						<button className="bg-primary hover:bg-electric-violet-700 text-white rounded-md py-2 transition-colors duration-200">Login</button>
					</div>

					<div className="flex flex-col items-center gap-4">
						<Link className="text-primary" href="/reset">
							Forgot Password?
						</Link>
						<div>
							Don&apos;t have an account?{" "}
							<Link className="text-primary" href="/register">
								Register
							</Link>{" "}
							now.
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-8 px-10 border-t border-neutral-300 py-8">
					<div className="w-full">
						<Image className="w-full" src={logoWithText} alt="Budbo logo" />
					</div>

					<div className="py-4 px-6 border border-neutral-300 rounded-lg">
						<div className="flex gap-1 w-fit mx-auto">
							<div className="flex gap-2">
								<span className="text-rum-700">
									<ExchangeIcon />
								</span>
								<span className="text-primary">1 BUDBO</span>
							</div>

							<span> =</span>
							<span className="text-black">0.15 USDT</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
