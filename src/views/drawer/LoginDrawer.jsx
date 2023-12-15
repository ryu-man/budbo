import { Input } from "@/components";
import "./drawer.css";
import Link from "next/link";

import logoWithText from "@/assets/images/logos/budbo-logo-with-text.svg";
import Image from "next/image";
import { ExchangeIcon } from "@/icons";

export function LoginDrawer({}) {
	return (
		<div className="login-drawer">
			<div className="w-full h-full flex flex-col gap-16">
				<h3>
					<span className="text-primary">Hello! </span>
					<span>Login to your account</span>
				</h3>

				<div className="flex flex-col">
					<div className="flex flex-col gap-2">
						<label htmlFor="">Email Address</label>
						<Input />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="">Password</label>
						<Input />
					</div>
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

				<div className="flex flex-col gap-8">
					<div className="w-full">
						<Image className="w-full" src={logoWithText} alt="Budbo logo" />
					</div>

					<div className="py-4 px-6 border border-neutral-300 rounded-lg">
						<div className="flex gap-1 w-fit mx-auto">
							<div className="flex gap-2">
								<span>
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
