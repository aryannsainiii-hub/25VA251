import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Parallax = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0,1], [-100,100])

  return (

    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
    >

      <motion.img
        style={{ y }}
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt=""
        className="absolute w-full h-[120%] object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-10">

        <h2 className="text-5xl md:text-8xl font-bold uppercase">
          Pure Emotion
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Designed to awaken adrenaline and redefine speed.
        </p>

      </div>

    </section>
  )
}

export default Parallax