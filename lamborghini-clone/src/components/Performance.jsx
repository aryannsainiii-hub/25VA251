import { motion } from "framer-motion"

const Performance = () => {
  return (

    <section className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-center px-10">

      <motion.h2
        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        viewport={{ once:true }}
        className="text-6xl md:text-9xl font-bold uppercase"
      >
        2.5s
      </motion.h2>

      <motion.p
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ delay:0.5 }}
        viewport={{ once:true }}
        className="text-gray-400 text-2xl mt-6 uppercase tracking-[10px]"
      >
        0 → 100 km/h
      </motion.p>

    </section>

  )
}

export default Performance