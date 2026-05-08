export default function SpeakersSection() {
  const speakers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'AI Research Lead at TechCorp',
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzgyMTEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      topic: 'The Future of Natural Language Processing',
    },
    {
      name: 'Michael Chen',
      role: 'Data Science Manager at DataFlow',
      image: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzgyMTEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      topic: 'Building Scalable Data Pipelines',
    },
    {
      name: 'Emily Rodriguez',
      role: 'ML Engineer at CloudAI',
      image: 'https://images.unsplash.com/photo-1762968286778-60e65336d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzgyMTEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      topic: 'Practical Applications of Deep Learning',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We regularly invite industry professionals to share their expertise and insights with our community
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 mb-3">{speaker.role}</p>
                <p className="text-gray-600 text-sm">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}