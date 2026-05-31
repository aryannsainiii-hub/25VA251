import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Cinematic = () => {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(

      sectionRef.current,

      {
        opacity:0,
        y:100,
      },

      {
        opacity:1,
        y:0,
        duration:1.5,

        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 80%",
        }

      }

    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-10 overflow-hidden bg-black"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[180px] rounded-full"></div>

      {/* CAR IMAGE */}
      <img
        src="/images/revuelto.png"
        alt=""
       className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  opacity-50
  scale-110
"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <h2 className="text-6xl md:text-9xl font-black uppercase leading-none">

          Feel The
          <br />
          Adrenaline

        </h2>

        <p className="mt-10 text-gray-400 max-w-2xl text-lg">

          Every curve. Every sound. Every acceleration.
          Designed to create pure emotion.

        </p>

      </div>

    </section>

  )
}

export default Cinematic