import React, { useState } from 'react'
import Image from 'next/image'
import { ProjectSlider } from '@/components/projectSlider/Projects'
import { projects } from '@/constant'

const page = () => {


	return (
		<main className='bg-[#0C011A] max-w-screen-2xl p-6 min-h-screen flex  justify-center items-center'>
			{/* upper section */}


			<div className='absolute -left-36 bottom-10 rotate-12 animate-pulse'>
				<Image
					src="/assets/bulb.png"
					alt='bulb'
					width={260}
					height={260}
					className='w-full h-full hidden md:block'
				/>
			</div>


			{/* projects section */}
			<section className='flex flex-col mt-28 gap-20 w-full'>
				<div className='flex md:flex-row flex-col justify-evenly items-center'>
					<div className='w-1/2 text-white'>
						<h2 className='text-center font-bold text-xl lg:text-3xl m-5'>Project Using Typescript</h2>
						<p className='font-light text-sm md:block hidden lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum dolor. Quaerat odit dignissimos quasi non, aliquid iste. Blanditiis delectus natus quia beatae. Atque, eligendi! Porro vel exercitationem, non facilis unde neque architecto atque delectus fuga adipisci est expedita explicabo.</p>
					</div>
					<div className='w-'>
						<ProjectSlider card={projects.typescript} options={false} />
					</div>
				</div>
				<div className='flex justify-evenly md:flex-row flex-col items-center'>
					<div className='w-1/2 text-white'>
						<h2 className='text-center font-bold text-xl lg:text-3xl m-5'>Project Using Next JS</h2>
						<p className='font-light text-sm lg:text-lg md:block hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum dolor. Quaerat odit dignissimos quasi non, aliquid iste. Blanditiis delectus natus quia beatae. Atque, eligendi! Porro vel exercitationem, non facilis unde neque architecto atque delectus fuga adipisci est expedita explicabo.</p>
					</div>
					<div>
						<ProjectSlider card={projects.nextjs} options={true} />
					</div>
				</div>
			</section>
		</main>
	)
}

export default page
