// import CustomCursor from '@/components/CursorAnim'
import Particle from '@/components/Particle'
import Image from 'next/image'
import Link from 'next/link'
import "./otherCss/style.css"

export default function Home() {
  return (
    <main className="relative h-screen flex items-center">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className="rotate-180 absolute   h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
      </video>


      {/* <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div> */}
      <section className='flex w-full flex-col-reverse items-center md:flex-row justify-around mt-16'>

        <div className='flex flex-col items-center gap-3  z-[10]'>
          <h1 className='text-white text-3xl md:text-5xl font-medium m-5'>I'm</h1>
          <section className="animation text-white text-3xl md:text-5xl ">
            <div className="first bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-red-400 via-stone-200 to-stone-400 bg-clip-text text-transparent font-bold text-center border-r-4 border-l-4">
              <div>Bilal Raza</div>
            </div>
            <div className="second bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-red-400 via-stone-200 to-stone-400 bg-clip-text text-transparent font-bold">
              <div>Web Developer</div>
            </div>
            <div className="third bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-red-400 via-stone-200 to-stone-400 bg-clip-text text-transparent font-bold">
              <div>Canva Designer</div>
            </div>
          </section>
          <p className='text-xl text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px] m-7 '><q>If you <strong>focus</strong> on results, you will never change but if you <strong>focus</strong> on change, you will get result</q> 🎯
          </p>
          <div className='relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] md:mt-5 '>
            <Link href={"./my-projects"}>
              <Image
                src="/assets/rounded-text.png"
                alt=''
                width={160}
                height={160}
                className='slow-spin hover:cursor-pointer'
              /></Link>
          </div>
        </div>
        <div className='z-[10] '>
          <Image
            src="/assets/MoustacheMan.png"
            alt='paint'
            width={560}
            height={560}
            className=' w-[300px] object-cover h-[300px] md:w-[560px] md:h-[560px]'
          />
        </div  >
      </section>
    </main>
  )
}
