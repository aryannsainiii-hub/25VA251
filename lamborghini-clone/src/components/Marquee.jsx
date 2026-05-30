import { motion } from "framer-motion"

const Marquee = () => {
  return (

    <section className="overflow-hidden bg-black py-20 border-y border-white/10">

      <motion.div
        animate={{ x:["0%","-100%"] }}
        transition={{
          repeat:Infinity,
          duration:20,
          ease:"linear"
        }}
        className="flex whitespace-nowrap"
      >

        <h2 className="text-[120px] md:text-[200px] font-black uppercase leading-none text-white/10 mr-20">
          Lamborghini • Performance • Speed • Luxury •
        </h2>

        <h2 className="text-[120px] md:text-[200px] font-black uppercase leading-none text-white/10 mr-20">
          Lamborghini • Performance • Speed • Luxury •
        </h2>

      </motion.div>

    </section>
  )
}

export default Marquee