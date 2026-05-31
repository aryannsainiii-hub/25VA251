const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
]

const Gallery = () => {
  return (

    <section className="bg-black py-32 overflow-hidden">

      <h2 className="text-5xl md:text-7xl font-bold uppercase px-10 mb-20">
        Gallery
      </h2>

      <div className="flex gap-10 w-max animate-scroll px-10">

        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[400px] h-[500px] rounded-3xl overflow-hidden"
          >

            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>
        ))}

      </div>

    </section>
  )
}

export default Gallery