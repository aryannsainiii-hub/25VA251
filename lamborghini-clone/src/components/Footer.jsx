import { motion } from "framer-motion"

const Footer = () => {
  return (

    <footer id="contact" className="relative overflow-hidden bg-black px-10 pt-40 pb-20">
      {/* BACKGROUND IMAGE */}
<img
  src="/images/111.jpg"
  alt=""
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    opacity-10
    scale-110
  "
/>
{/* OVERLAY */}
<div className="absolute inset-0 bg-black/80"></div>

      {/* GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* BIG TEXT */}
        <motion.h2
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
          className="text-6xl md:text-[160px] font-black uppercase leading-none tracking-[-5px]"
        >
          Lamborghini
        </motion.h2>

        {/* SUBTEXT */}
        <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Crafted for speed, precision, and cinematic driving emotion.
            A futuristic automotive experience built with React.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-6 text-gray-300 uppercase tracking-[3px]">

            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-24 border-t border-white/10 pt-10 flex justify-between text-gray-500 text-sm">

          <p>© 2026 Lamborghini Clone</p>

          <p>Designed with cinematic motion</p>

        </div>

      </div>

    </footer>

  )
}

export default Footer