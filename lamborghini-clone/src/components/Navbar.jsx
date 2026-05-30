import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (

    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[9999] px-10 py-8">

        <div className="flex justify-between items-center backdrop-blur-md border border-white/10 rounded-full px-10 py-4 bg-white/5">

          {/* LOGO */}
          <h1 className="text-3xl font-black tracking-[6px]">
            LAMBORGHINI
          </h1>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-2"
          >

            <span className="w-10 h-[2px] bg-white"></span>
            <span className="w-10 h-[2px] bg-white"></span>

          </button>

        </div>

      </nav>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.5 }}
            className="fixed inset-0 z-[9998] bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-16"
          >

            {/* LINKS */}
{[
  { name:"Home", link:"#home" },
  { name:"Models", link:"#models" },
  { name:"Performance", link:"#performance" },
  { name:"Experience", link:"#experience" },
  { name:"Contact", link:"#contact" },
].map((item,index) => (

  <motion.a
    key={index}
    href={item.link}
    onClick={() => setOpen(false)}
    initial={{ opacity:0, x:-100 }}
    animate={{ opacity:1, x:0 }}
    exit={{ opacity:0, x:-100 }}
    transition={{
      delay:index * 0.1
    }}
    className="text-6xl md:text-9xl font-black uppercase text-white/20 hover:text-yellow-400 transition duration-300 mb-6"
  >
    {item.name}
  </motion.a>

))}

            {/* FOOTER TEXT */}
            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.7 }}
              className="absolute bottom-10 left-16 text-gray-500 tracking-[4px] uppercase"
            >
              Crafted for cinematic driving emotion
            </motion.p>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}

export default Navbar