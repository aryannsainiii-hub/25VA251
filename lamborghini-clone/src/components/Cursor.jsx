import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Cursor = () => {

  const [position, setPosition] = useState({ x:0, y:0 })

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <>
      {/* MAIN CURSOR */}
      <motion.div
        animate={{
          x:position.x - 10,
          y:position.y - 10
        }}
        transition={{
          type:"spring",
          stiffness:500,
          damping:28
        }}
        className="fixed top-0 left-0 w-5 h-5 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
      />

      {/* OUTER GLOW */}
      <motion.div
        animate={{
          x:position.x - 25,
          y:position.y - 25
        }}
        transition={{
          type:"spring",
          stiffness:150,
          damping:20
        }}
        className="fixed top-0 left-0 w-14 h-14 border border-yellow-400/40 rounded-full pointer-events-none z-[9998]"
      />

    </>

  )
}

export default Cursor