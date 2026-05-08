import { Linkedin, Mail, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Big Data Society</h3>
            <p className="text-gray-400 mb-4">
              Empowering students and professionals to excel in data science, machine learning, and artificial intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
              <li><a href="#get-involved" className="hover:text-white">Get Involved</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@bigdatasociety.org" className="hover:text-white">
                  contact@bigdatasociety.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Big Data Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}