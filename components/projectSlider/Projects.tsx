"use client"

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState } from "react";
import { Divide } from "lucide-react";

type CardContent = {
  src: string,
  title: string,
  description: string,
  slug: number,
  ref?: string
}
export function ProjectSlider({ card, options }: { card: CardContent[], options: boolean }) {
  const [isAllow, setAllow] = useState<boolean>(false)


  function hoverControl() {
    setAllow(true)
    // console.log("hover");

  }


  const hoverLeaver = () => {
    setAllow(false)
  }

  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {card.map((item, index) =>
        (

          <CarouselItem onMouseLeave={hoverLeaver} onMouseOver={hoverControl} key={item.slug}>
            <div className="p-1 relative"  >
              <Card >
                <CardContent className="bg-gradient-to-bl from-black via-violet-900 to-black flex aspect-square items-center justify-center p-6">
                  {isAllow &&
                    <div className="absolute w-full bg-gradient-to-l from-violet-900 via-black to-violet-900 text-white h-full flex flex-col justify-center items-center">
                      <h2 className="font-bold   text-center text-white  ">{item.title}</h2>
                      <p className="font-extralight m-2 text-md  text-center text-white hidden xl:block border-black  p-4">{item.description}</p>
                      {
                        options ?
                          (<div >
                            <div className="m-3">
                              <Link href={"https://github.com/bilalraza-9262/PIAIC-Projects "}>
                                View Code &gt;
                              </Link>
                            </div>
                            <div className="m-3">
                              <Link href={item.ref ? item.ref : ""}>
                                View Project &gt;
                              </Link>
                            </div>
                          </div>) : (
                            <div>
                              <Link href={"https://github.com/bilalraza-9262?tab=repositories "}>
                                View Code &gt;
                              </Link>
                            </div>
                          )


                      }
                      {/* <div className="w-4/5 h-3 rounded-full mb-4 bg-white">
                      <div className={`h-3 bg-purple-800 ${item.percentage < 80 ? "w-3/4" : item.percentage < 90 ? "w-5/6" : "w-11/12"}`} />
                    </div>
                  </div><div className="absolute  w-full backdrop-blur-sm bg-gradient-to-l from-violet-900 via-black to-violet-900 text-white h-full flex flex-col justify-center items-center">
                    <p className="font-extralight text-md text-center text-white hidden xl:block  border-black  p-4"></p>
                    <h2 className="font-bold text-xl   text-center text-white  "> </h2> */}
                    </div>}


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