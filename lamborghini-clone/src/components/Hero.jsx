import MagneticButton from "./MagneticButton"
import { motion } from "framer-motion"

const Hero = () => {
  return (

    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center px-10 transition-all duration-700">

      {/* BACKGROUND IMAGE */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute w-full h-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* GLOW */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-yellow-400/20 blur-[150px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl">

        <motion.p
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="uppercase tracking-[10px] text-yellow-400 mb-6"
        >
          Lamborghini Experience
        </motion.p>

        <motion.h1
          initial={{ opacity:0, y:100 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-6xl md:text-[150px] font-black uppercase leading-none"
        >
          Beyond <br />
          Limits
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5 }}
          className="mt-10 text-gray-300 text-lg max-w-2xl leading-relaxed"
        >
          A cinematic journey through power, precision,
          and futuristic automotive excellence.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="flex gap-6 mt-12"
        >

<MagneticButton>
  Explore
</MagneticButton>

         <MagneticButton>
  Discover
</MagneticButton>

        </motion.div>

      </div>

    </section>

  )
}

export default Hero