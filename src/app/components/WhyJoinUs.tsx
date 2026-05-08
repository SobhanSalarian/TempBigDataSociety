import { Brain, Users, TrendingUp, Award, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Learn AI & Data Skills',
    description: 'Access workshops, tutorials, and hands-on sessions covering machine learning, data analysis, and AI technologies.',
  },
  {
    icon: Rocket,
    title: 'Build Real Projects',
    description: 'Work on practical projects that solve real-world problems and build your portfolio.',
  },
  {
    icon: Users,
    title: 'Connect with Industry Experts',
    description: 'Network with professionals from leading tech companies and gain industry insights.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Your Career',
    description: 'Enhance your resume, develop in-demand skills, and discover job opportunities in data science.',
  },
  {
    icon: Award,
    title: 'Open to All Backgrounds',
    description: 'Whether you\'re a beginner or experienced, everyone is welcome to learn and grow with us.',
  },
];

export default function WhyJoinUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a vibrant community dedicated to advancing knowledge in big data and artificial intelligence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}