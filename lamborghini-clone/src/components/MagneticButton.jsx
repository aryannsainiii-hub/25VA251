import { useRef } from "react"
import { motion } from "framer-motion"

const MagneticButton = ({ children }) => {

  const ref = useRef(null)

  const handleMouseMove = (e) => {

    const { clientX, clientY } = e
    const button = ref.current

    const rect = button.getBoundingClientRect()

    const x = clientX - (rect.left + rect.width / 2)
    const y = clientY - (rect.top + rect.height / 2)

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px,0px)`
  }

  return (

    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale:0.9 }}
className="px-10 py-5 rounded-full uppercase tracking-[3px] transition duration-300 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-yellow-400 hover:text-black font-bold"    >
      {children}
    </motion.button>

  )
}

export default MagneticButton