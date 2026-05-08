import { Calendar, MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML algorithms and their real-world applications.',
    date: 'May 15, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Online',
  },
  {
    title: 'Big Data Analytics Workshop',
    description: 'Hands-on session working with large datasets using Apache Spark and Python.',
    date: 'May 22, 2026',
    time: '5:30 PM - 7:30 PM',
    location: 'Campus Lab A',
  },
  {
    title: 'Industry Panel: AI in Healthcare',
    description: 'Hear from industry experts about how AI is transforming healthcare.',
    date: 'June 5, 2026',
    time: '7:00 PM - 9:00 PM',
    location: 'Auditorium B',
  },
];

const pastEvents = [
  {
    title: 'Deep Learning Fundamentals',
    description: 'Explored neural networks and deep learning architectures with practical examples.',
    date: 'April 10, 2026',
    recap: 'Over 80 attendees participated in this hands-on workshop, building their first neural network models.',
  },
  {
    title: 'Data Visualization Masterclass',
    description: 'Learned advanced techniques for creating compelling data visualizations.',
    date: 'March 28, 2026',
    recap: 'Participants created stunning interactive dashboards and learned industry best practices.',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join us for workshops, talks, and networking opportunities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-2" />
                    {event.location}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
          <p className="text-xl text-gray-600 mb-10">
            See what we've been up to
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {event.date}
                </div>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-gray-700 text-sm italic">{event.recap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}