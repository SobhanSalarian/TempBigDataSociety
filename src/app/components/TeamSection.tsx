export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'President',
      bio: 'Computer Science senior passionate about machine learning and AI ethics. Leading our society to create meaningful impact.',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzgyMTEyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Maya Patel',
      role: 'Vice President',
      bio: 'Data Science enthusiast with experience in statistical modeling and big data analytics. Organizing impactful workshops.',
      image: 'https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzgyMTEyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Jordan Lee',
      role: 'Events Coordinator',
      bio: 'Engineering student focused on cloud computing and distributed systems. Bringing industry experts to our events.',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzgyMTEyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sam Rivera',
      role: 'Tech Lead',
      bio: 'Full-stack developer with expertise in building scalable data applications. Managing our technical projects and initiatives.',
      image: 'https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzgyMTEyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team works to create valuable experiences and opportunities for all members
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}