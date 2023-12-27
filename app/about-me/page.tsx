import Wrapper from '@/components/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import { Skills } from '@/constant'
import { CarouselDemo } from '@/components/skilllsSlider/SkillsSlider'

const page = () => {
	return (

		<main className='text-white p-2 h-full bg-gradient-to-l from-black via-violet-900 to-black'>
			{/* about me section */}
			<section className='flex max-w-7xl lg:flex-row flex-col-reverse m-auto md:pt-36 items-center gap-4 justify-between p-14'>
				<div className=''>
					{/* about me */}
					<Wrapper>
						<div className='text-white flex flex-col gap-7 '>

							<h2 className=' font-semibold border-zinc-400 underline text-center text-3xl md:text-5xl bg-gradient-to-t from-slate-100 via-purple-300 to-purple-800 bg-clip-text text-transparent font-serif'>Who I am?</h2>
							<p className='text-sm md:text-lg  font-extralight'>Greetings! I am Muhammad Bilal Raza, a resident of Karachi, Pakistan. My educational journey began at Darul Madina International System, where I successfully completed my matriculation. Currently, I am pursuing my intermediate studies at Government Superior College, alongside my exploration of the dynamic field of web development.
							</p>
							<p className='text-sm md:text-lg font-extralight'>
								In addition to my secular education, I embarked on a religious education journey at the age of 12 when I delved into the study of the Holy Quran. Presently, I am actively engaged in a scholar course, further deepening my understanding of religious studies. This dual pursuit reflects my commitment to both secular and religious knowledge, showcasing a holistic approach to personal and intellectual development.
							</p>
						</div>
					</Wrapper>
				</div>
				<div className=''>
					<Image
						width={700}
						height={700}
						src={"/horse.png"}
						alt='Horse'
						className='' />
				</div>
			</section>

			<div className='h-0.5 w-full bg-neutral-600' />
			{/* skills and languages section */}
			<section className='flex flex-col items-center m-20'>
				{/* skills */}
				<div>

					<h2 className='font-semibold text-center  text-3xl md:text-5xl bg-gradient-to-t from-slate-100 via-purple-300 to-purple-800 bg-clip-text text-transparent underline font-serif'>What I know?</h2>

					<div className='flex gap-16 flex-col mt-10 md:mt-20'>
						<div className='flex  items-center'>
							<h3 className='border-b-2 border-zinc-400 font-semibold text-xl md:text-3xl bg-gradient-to-t from-slate-100 via-purple-300 to-purple-800 bg-clip-text text-transparent font-serif'>
								Web Development
							</h3 >
						</div>

						<p className='text-sm md:text-lg font-extralight'>Embarking on my web development journey seven months ago, I immersed myself in the dynamic realms of JavaScript, with a dedicated focus on frameworks like Next.js. Currently delving into the intricacies of JavaScript frameworks, especially Node.js, my primary goal is to create websites that transcend mere functionality and become fully immersive experiences. The web development industry throbs with vitality, underscoring a robust demand for adept full-stack developers, particularly those skilled in coveted JavaScript frameworks such as React, Angular, and Vue.js. My skill set extends to encompass responsive design, a masterful command of server-side technologies like Node.js, and the seamless integration of cloud services. As I navigate this ever-evolving landscape, I keenly recognize the paramount importance of security measures and observe the ongoing ascent of Progressive Web Apps, ensuring my continuous positioning at the forefront of emerging web development trends and technologies</p>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-28 w-'>
							<div className='flex flex-col items-center justify-center'>
								<CarouselDemo skills={Skills.frontend} />
								<label htmlFor="" className=' text-3xl font-extralight m-3 '> Frontend</label>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<CarouselDemo skills={Skills.backend} />
								<label htmlFor="" className=' text-3xl font-extralight m-3 '> Backend</label>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<CarouselDemo skills={Skills.database} />
								<label htmlFor="" className=' text-3xl font-extralight m-3 '> Database</label>
							</div>
						</div>
					</div>
				</div>
				{/* languages */}
				<div>
					{/* <h1>Which languages I can speak?</h1> */}
				</div>
			</section>
		</main>

	)
}

export default page
