"use client"
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"

type SkillsType = {
  title: string,
  para: string,
  slug: number,
  percentage: string | number,
  src: string
}




export function CarouselDemo({ skills }: { skills: SkillsType[] }) {
  const [hover, setHover] = useState<boolean>(false)


  function hoverControl() {
    setHover(true)
    // console.log("hover");

  }


  const hoverLeaver = () => {
    setHover(false)
  }
  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {skills.map((item,index) =>
        (

          <CarouselItem onMouseLeave={hoverLeaver}  onMouseOver={hoverControl} key={item.slug}>
            <div className="p-1 relative"  >
              <Card >
                <CardContent className="bg-gradient-to-bl from-black via-violet-900 to-black flex aspect-square items-center justify-center p-6">
                  {hover && (typeof item.percentage === "number" ? (
                    <div className="absolute w-full bg-gradient-to-l from-violet-900 via-black to-violet-900 text-white h-full flex flex-col justify-center items-center">
                      <p className="font-extralight m-2 text-md  text-center text-white hidden xl:block border-black  p-4">{item.para} {item.percentage}% knowledge about {item.title}</p>
                      <h2 className="font-bold text-xl block xl:hidden  text-center text-white  "> {item.percentage}%</h2>
                      <div className="w-4/5 h-3 rounded-full mb-4 bg-white">
                        <div className={`h-3 bg-purple-800 ${item.percentage < 80 ? "w-3/4" : item.percentage < 90 ? "w-5/6" : "w-11/12"}`} />
                      </div>
                    </div>) : (<div className="absolute  w-full backdrop-blur-sm bg-gradient-to-l from-violet-900 via-black to-violet-900 text-white h-full flex flex-col justify-center items-center">
                      <p className="font-extralight text-md text-center text-white hidden xl:block  border-black  p-4">{item.para}</p>
                      <h2 className="font-bold text-xl   text-center text-white  "> {item.percentage}</h2>
                    </div>))
                  }

                  <Image
                    src={item.src}
                    alt=""
                    width={300}
                    height={300}
                    className="" />

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
