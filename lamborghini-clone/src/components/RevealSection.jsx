import { motion } from "framer-motion"

const RevealSection = () => {
  return (

    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">

      {/* IMAGE */}
      <motion.img
        initial={{ scale:1.4, opacity:0 }}
        whileInView={{ scale:1, opacity:1 }}
        transition={{ duration:1.5 }}
        viewport={{ once:true }}
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        alt=""
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <motion.div
        initial={{ opacity:1 }}
        whileInView={{ opacity:0.4 }}
        transition={{ duration:1.5 }}
        viewport={{ once:true }}
        className="absolute inset-0 bg-black"
      ></motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ delay:0.5, duration:1 }}
        viewport={{ once:true }}
        className="relative z-10 text-center px-10"
      >

        <h2 className="text-5xl md:text-8xl font-bold uppercase leading-none">
          Engineered <br />
          For Emotion
        </h2>

        <p className="mt-8 text-gray-300 max-w-2xl mx-auto">
          Experience precision, speed, and adrenaline
          in its purest form.
        </p>

      </motion.div>

    </section>
  )
}

export default RevealSection