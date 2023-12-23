"use client";
import Link from "next/link";
import { navItems } from "@constants";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [fixed, setFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 600) {
				setFixed(true);
			} else {
				setFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`w-full px-[100rem] bg-black text-white flex items-center justify-between h-[10vh] transition-all ease-linear duration-500 ${
					fixed
						? "fixed transition-all ease-linear duration-500 bg-blue-600 text-white"
						: ""
				}`}>
				<div>
					<h1 className="text-[30rem] font-bold tracking-wider">🌏 PLANET</h1>
				</div>
				<div className="flex items-center gap-x-[10rem] list-none">
					{navItems.map((item) => (
						<li key={item.id}>
							<Link
								className="text-[22rem] font-medium tracking-wider cursor-pointer"
								href={`#${item.href}`}>
								{item.title}
							</Link>
						</li>
					))}
				</div>
			</div>
		</>
	);
}
