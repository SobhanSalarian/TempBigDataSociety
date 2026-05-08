export default function Hero() {
  return (
    <section className="relative text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZXxlbnwxfHx8fDE3NzgyMTEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
      />
      {/* Overlay with reduced transparency */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Big Data Society
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Learn, build, and connect with the future of data science and artificial intelligence
            </p>
            <p className="text-lg mb-8 text-blue-50">
              Join our community of students, professionals, and enthusiasts passionate about big data, machine learning, and AI. We host workshops, industry talks, and networking events to help you grow your skills and career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Join Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Events
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            
          </div>
        </div>
      </div>
    </section>
  );
}