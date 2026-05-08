import { UserPlus, Mic, Handshake } from 'lucide-react';

export default function GetInvolved() {
  const options = [
    {
      icon: UserPlus,
      title: 'Join as a Member',
      description: 'Become part of our community and gain access to all events, workshops, and resources.',
      action: 'Sign Up Now',
      color: 'blue',
    },
    {
      icon: Mic,
      title: 'Become a Speaker',
      description: 'Share your knowledge and experience with our members. We welcome speakers from all backgrounds.',
      action: 'Apply to Speak',
      color: 'purple',
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Collaborate with us to sponsor events, offer workshops, or provide opportunities for our members.',
      action: 'Get in Touch',
      color: 'green',
    },
  ];

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to participate and contribute to our growing community
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => {
            const Icon = option.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600',
              purple: 'bg-purple-100 text-purple-600 hover:bg-purple-600',
              green: 'bg-green-100 text-green-600 hover:bg-green-600',
            };

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className={`${colorClasses[option.color as keyof typeof colorClasses].split(' ')[0]} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={colorClasses[option.color as keyof typeof colorClasses].split(' ')[1]} size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${colorClasses[option.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[option.color as keyof typeof colorClasses].split(' ')[1]} hover:text-white`}>
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}