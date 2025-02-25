const Hero = ({ openModal }) => {
    return (
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refer & Earn with Accredian</h1>
          <p className="text-xl mb-8">Share the joy of learning and earn rewards!</p>
          <button
            onClick={openModal}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300"
          >
            Refer Now
          </button>
        </div>
      </section>
    )
  }
  
  export default Hero
  
  