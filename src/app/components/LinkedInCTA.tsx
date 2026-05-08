import { Linkedin } from 'lucide-react';

export default function LinkedInCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Linkedin className="text-blue-600" size={40} />
        </div>
        <h2 className="text-4xl font-bold mb-4">Follow Us on LinkedIn</h2>
        <p className="text-xl mb-8 text-blue-100">
          Stay updated with event announcements, industry insights, job opportunities, and connect with our growing network of data professionals
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
          <Linkedin size={20} />
          Follow on LinkedIn
        </button>
      </div>
    </section>
  );
}