import { motion } from "framer-motion"

const Intro = () => {
  return (

    <section id="experience" className="min-h-screen bg-black px-10 py-32 flex items-center transition-all duration-700">

      <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div>

          <motion.h2
            initial={{ opacity:0, x:-100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:1 }}
            viewport={{ once:true }}
            className="text-5xl md:text-8xl font-black uppercase leading-tight"
          >
            Crafted By Vision. <br />
            Driven By Power.
          </motion.h2>

          <motion.p
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ delay:0.5 }}
            viewport={{ once:true }}
            className="mt-10 text-gray-400 text-lg leading-relaxed"
          >
            Every Lamborghini is a masterpiece of innovation,
            precision engineering, and raw emotion.
            Designed to dominate both road and imagination.
          </motion.p>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity:0, x:100 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
          className="relative"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt=""
            className="rounded-3xl w-full h-[700px] object-cover"
          />

          {/* GLOW */}
          <div className="absolute -bottom-10 -right-10 w-[250px] h-[250px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

        </motion.div>

      </div>

    </section>
  )
}

export default Intro