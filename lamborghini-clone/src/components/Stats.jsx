import { motion } from "framer-motion"

const stats = [
  {
    number: "1015",
    label: "Horsepower"
  },

  {
    number: "350+",
    label: "Top Speed"
  },

  {
    number: "2.5s",
    label: "0-100 km/h"
  },
]

const Stats = () => {
  return (

    <section id="performance" className="relative min-h-screen overflow-hidden flex items-center justify-center px-10">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/stats.mp4" type="video/mp4" />
      </video>
      {/* BACKGROUND CAR */}
<img
  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
  alt=""
className="absolute bottom-0 w-full object-cover opacity-20 scale-125 mix-blend-screen"/>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-400/10 blur-[150px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full">

        {/* TITLE */}
        <motion.div
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
          className="text-center mb-24"
        >

          <h2 className="text-6xl md:text-8xl font-black uppercase">
            Performance
          </h2>

          <p className="text-gray-400 mt-6 tracking-[5px]">
            ENGINEERED FOR EXTREME SPEED
          </p>

        </motion.div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:100 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index * 0.2 }}
              viewport={{ once:true }}
              className="glass rounded-3xl p-16 text-center hover:scale-105 transition duration-500"
            >

              <h3 className="text-6xl md:text-7xl font-black">
                {stat.number}
              </h3>

              <p className="mt-6 text-gray-300 tracking-[4px] uppercase">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Stats