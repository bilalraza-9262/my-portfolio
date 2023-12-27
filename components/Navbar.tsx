import React from 'react'
import { Socials } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import "./nav.css"
const Navbar = () => {
	return (
		<div className='backdrop-blur-md fixed z-[20] bg-black/10  top-0 w-full flex gap-7 justify-around sm:justify-between md:px-60 p-7 items-center'>
			<div className='content text-xl md:text-6xl'>
				<h2 >
				HELLO 👋🏽
				</h2>
				<h2 >
					HELLO 👋🏽

				</h2>
			</div>
			<div className='flex gap-5'>
				{Socials.map((social) => (
					<Link key={social.slug} href={social.link} target='_blank'>
						<Image

							src={social.src}
							alt={social.name}
							width={24}
							height={24}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Navbar
