import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Pinned = () => {

  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline({

      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top top",
        end:"+=2000",
        scrub:true,
        pin:true,
      }

    })

    tl.fromTo(
      textRef.current,
      {
        opacity:0,
        y:100,
      },
      {
        opacity:1,
        y:0,
        duration:1,
      }
    )

    .to(
      textRef.current,
      {
        opacity:0,
        y:-100,
        duration:1,
      }
    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden flex justify-center items-center"
    >

      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt=""
        className="absolute w-full h-full object-cover opacity-40"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-10"
      >

        <h2 className="text-5xl md:text-9xl font-black uppercase leading-none">
          Precision <br />
          In Motion
        </h2>

        <p className="mt-10 text-gray-300 max-w-2xl mx-auto text-lg">
          Every detail engineered for ultimate performance
          and cinematic driving emotion.
        </p>

      </div>

    </section>
  )
}

export default Pinned