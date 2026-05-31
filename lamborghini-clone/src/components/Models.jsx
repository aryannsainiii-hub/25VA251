import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

const cars = [
  {
    name: "REVUELTO",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },

  {
    name: "HURACÁN",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  },

  {
    name: "AVENTADOR",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
]

const Models = () => {
  return (
    <section id="models" className="min-h-screen bg-black px-10 py-32">

      <motion.h2
        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        viewport={{ once:true }}
        className="text-5xl md:text-7xl font-bold mb-20 uppercase"
      >
        Models
      </motion.h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
        {cars.map((car, index) => (
<Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  glareEnable={true}
  glareMaxOpacity={0.3}
  scale={1.02}
  transitionSpeed={1500}
>

  <motion.div
    key={index}
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration:0.8, delay:index * 0.2 }}
    viewport={{ once:true }}
className={`
group relative overflow-hidden rounded-3xl cursor-pointer
${index === 0 ? "md:col-span-2 md:row-span-2 h-[620px]" : "h-[300px]"}
`}  >

    <img
      src={car.image}
      alt={car.name}
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

    {/* TEXT */}
    <div className="absolute bottom-10 left-10">

      <h3 className="text-4xl font-bold tracking-wider">
        {car.name}
      </h3>

      <p className="text-gray-300 mt-2">
        Discover the power
      </p>

    </div>

  </motion.div>

</Tilt>
        ))}

      </div>

    </section>
  )
}

export default Models