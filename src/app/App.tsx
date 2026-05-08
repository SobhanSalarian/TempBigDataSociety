import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoinUs from './components/WhyJoinUs';
import EventsSection from './components/EventsSection';
import SpeakersSection from './components/SpeakersSection';
import CommunitySection from './components/CommunitySection';
import LinkedInCTA from './components/LinkedInCTA';
import TeamSection from './components/TeamSection';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyJoinUs />
      <EventsSection />
      <SpeakersSection />
      <CommunitySection />
      <LinkedInCTA />
      <TeamSection />
      <GetInvolved />
      <Footer />
    </div>
  );
}