import { motion } from "framer-motion"

const Loader = () => {
  return (

    <motion.div
      initial={{ opacity:1 }}
      animate={{ opacity:0 }}
      transition={{
        delay:2.5,
        duration:1
      }}
      className="fixed inset-0 bg-black z-[99999] flex flex-col justify-center items-center pointer-events-none"
    >

      {/* LOGO */}
      <motion.h1
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-5xl md:text-8xl font-black uppercase tracking-[10px]"
      >
        Lamborghini
      </motion.h1>

      {/* LOADING BAR */}
      <div className="w-[300px] h-[2px] bg-white/10 mt-10 overflow-hidden rounded-full">

        <motion.div
          initial={{ x:"-100%" }}
          animate={{ x:"100%" }}
          transition={{
            duration:2,
            ease:"easeInOut"
          }}
          className="w-full h-full bg-yellow-400"
        />

      </div>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
        className="mt-6 tracking-[5px] text-gray-500 uppercase text-sm"
      >
        Crafted For Performance
      </motion.p>

    </motion.div>

  )
}

export default Loader