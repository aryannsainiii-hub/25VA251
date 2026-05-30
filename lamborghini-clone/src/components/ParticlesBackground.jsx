import Particles from "react-tsparticles"

const ParticlesBackground = () => {
  return (

    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: "#facc15",
          },

          links: {
            enable: true,
            color: "#facc15",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },
        },
      }}
    />

  )
}

export default ParticlesBackground