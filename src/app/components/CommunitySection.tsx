import { MessageCircle, Users, Code } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow data enthusiasts, collaborate on projects, and stay updated on the latest in AI and big data
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Discord Community</h3>
            <p className="text-gray-600 mb-4">
              Chat with members, ask questions, and share resources in real-time
            </p>
            <button className="text-purple-600 font-semibold hover:text-purple-700">
              Join Discord →
            </button>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Groups</h3>
            <p className="text-gray-600 mb-4">
              Join or create study groups for courses, certifications, and projects
            </p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Find a Group →
            </button>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Collaborations</h3>
            <p className="text-gray-600 mb-4">
              Work together on open-source projects and build your portfolio
            </p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">
              View Projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}