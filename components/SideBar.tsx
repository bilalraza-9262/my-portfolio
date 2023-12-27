"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constant";
import Link from "next/link";
import Transition from "./Transition";


export const Sidebar = () => {
	const [isRouting, setisRouting] = useState(false);
	const [isActive, setisActive] = useState("Home");
	const [prevPath, setprevPath] = useState("/");

	const path = usePathname()

	useEffect(() => {
		if (prevPath !== path) {
			setisRouting(true)
		}


	}, [path, prevPath])

	useEffect(() => {
		if (isRouting) {
			setprevPath(path)
			const timeout = setTimeout(() => {
				setisRouting(false)
			}, 1200)

			return () => {
				clearTimeout(timeout)
			}
		}

	}, [isRouting])


	return (
		<div className="fixed top-[20%] md:top-[40%] right-8 rounded-full z-[20] w-[] h-[] bg-gray-500 bg-opacity-50">

			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
				<div className="flex flex-col justify-center p-3 items-center h-full gap-5">
					{NavLinks.map((link) => (
						<Link
							key={link.slug}
							href={link.link}
							onClick={() => setisActive(link.name)}>

							<link.icon
								className={`w-[28px] h-[28px] ${isActive === link.name ? "text-orange-500" : "text-white"}`}
							/>

						</Link>

					))}
				</div>

			</AnimatePresence>
		</div>
	)

}