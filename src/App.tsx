import { useState } from 'react'
import './styles.css'

const hackathons = [
  {
    title: 'Hackathon (Microsoft/Yirigaa) - December 2023',
    description: 'Latest event with Microsoft and Yirigaa partnership.',
    link: 'Hackathon/2023-12/index.html'
  },
  {
    title: 'Hackathon (NavigatorGroup/DataX) - September 2023',
    description: 'Navigator Group and DataX team challenge event.',
    link: 'Hackathon/2023-09/index.html'
  },
  {
    title: 'Hackathon (IBM/Illumio) - September 2022',
    description: 'IBM and Illumio sponsored hackathon showcase.',
    link: 'Hackathon/2022-09/index.html'
  },
  {
    title: 'Hackathon (Microsoft) - July 2021',
    description: 'Microsoft hackathon with peer teams and solutions.',
    link: 'Hackathon/2021-07/index.html'
  },
  {
    title: 'Hackathon (TCS/Westpac) - December 2020',
    description: 'TCS and Westpac sponsored hackathon event.',
    link: 'Hackathon/2020-12/index.html'
  },
  {
    title: 'Hackathon (IBM) - March 2020',
    description: 'IBM hackathon focused on business analytics.',
    link: 'Hackathon/2020-03/index.html'
  },
  {
    title: 'Hackathon (ITIC/AWS/TCS/SAS) - July 2019',
    description: 'ITIC, AWS, TCS, SAS sponsored event.',
    link: 'Hackathon/2019-07/index.html'
  },
  {
    title: 'Hackathon (Agate/AWS/SAS) - September 2018',
    description: 'Agate, AWS, SAS hackathon.',
    link: 'Hackathon/2018-09/index.html'
  },
  {
    title: 'Hackathon (SAS/Yellowfin/Microsoft) - July 2018',
    description: 'SAS, Yellowfin, Microsoft event.',
    link: 'Hackathon/2018-07/index.html'
  }
]

const executives = [
  { role: 'Founder and Chair', name: 'Prof. Amin Beheshti', link: 'https://protect-au.mimecast.com/s/b-LFCANpnDCrWv8gt8Lc3A?domain=data-science-group.github.io' },
  { role: 'President', name: 'Sobhan Salarian', link: 'https://www.linkedin.com/in/sobhansalarian/' },
  { role: 'Vice President (HDR)', name: 'Kamyar Taeb', link: 'https://url.au.m.mimecastprotect.com/s/FQM3CRONg6sv5wX5vt9MF3H13fBg?domain=linkedin.com' },
  { role: 'Vice President (Postgraduate)', name: 'Atena Yavari', link: 'https://au.linkedin.com/in/atenayavari' },
  { role: 'Vice President (Undergraduate)', name: 'Sogol Hosseini', link: 'https://www.linkedin.com/in/sogol-hosseini-5172611a4' },
  { role: 'Team Coordinator', name: 'Alireza Shammasi', link: 'https://www.linkedin.com/in/alireza-shammasi-13b72824a/' },
  { role: 'Treasurer', name: 'Mohammad H. Ahmadi', link: 'https://www.linkedin.com/in/mhahmadi/' },
  { role: 'Secretary', name: 'Marjan BaghGolshani', link: 'https://www.linkedin.com/in/marjan-baghgolshani-0462a2125/' },
  { role: 'Female Ambassador', name: 'Afrooz Sheikholeslami', link: 'https://www.linkedin.com/in/afrooz-sheikholeslami-496127196/' },
  { role: 'Events Director', name: 'Parimehr Morassafar', link: 'https://url.au.m.mimecastprotect.com/s/ndz4CQnM1WfkonLoktxjIEHGX5gP?domain=linkedin.com' },
  { role: 'Co-Events Director', name: 'Laura Hardy', link: 'https://www.linkedin.com/in/laura-hardy-8a613b322/' },
  { role: 'IT Director', name: 'Alireza Yegane', link: 'https://www.linkedin.com/in/alireza-yegane' },
  { role: 'Web and Social Media Director', name: 'SeyedAli Mohseni', link: 'https://www.linkedin.com/in/sayedali-mohseni-464953152/' },
  { role: 'Industry and External Relations Director', name: 'Erfan Moshiri', link: 'https://www.linkedin.com/in/erfanmoshiri/' }
]

const tutorials = [
  { title: 'Microsoft Bootcamp', link: 'https://www.linkedin.com/feed/update/urn:li:activity:6841627488947458048/' },
  { title: 'Python Tutorial', link: 'Tutorial/Python/index.htm' }
]

const workshops = [
  { title: 'AIPA Workshop 2023', link: 'https://aip-research-center.github.io/AIPA_workshop/2023/' },
  { title: 'AI Centre Workshop 2022', link: 'https://www.youtube.com/watch?v=L6FSCu739sc' },
  { title: 'Telstra Workshop 2022', link: 'https://www.linkedin.com/posts/telstra-purple_techathon-airpseeder-activity-7072792318835097602-yoLT?utm_source=share&utm_medium=member_desktop' },
  { title: 'AIPA Workshop 2022', link: 'https://aip-research-center.github.io/AIPA_workshop/2022/' },
  { title: 'Policing (AFP) Workshop 2021', link: 'https://aip-research-center.github.io/AIPLE_Workshop/2021/' },
  { title: 'AIPA Workshop 2021', link: 'https://aip-research-center.github.io/AIPA_workshop/2021/index.html' },
  { title: 'AIPA Workshop 2020', link: 'https://aip-research-center.github.io/AIPA_workshop/2020/index.html' }
]

const carouselImages = [
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2022-09/photos/46.jpg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2019-07/photos/080.jpeg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2019-07/photos/000.jpg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2019-07/photos/065.jpg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2019-07/photos/045.jpg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/050.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/001.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/003.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/005.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/009.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-07/photos/026.JPG',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-09/photos/005.jpg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-09/photos/051.jpeg',
  'https://data-science-group.github.io/BigDataSociety/Hackathon/2018-09/photos/027.jpg'
]

function App() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name)
  }

  return (
    <div className="app" style={{ backgroundColor: '#ebebe0', minHeight: '100vh' }}>
      <header className="site-header" style={{ backgroundColor: '#ffffff' }}>
        <nav className="navbar navbar-inverse" style={{ margin: 0, borderRadius: 0 }}>
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="index.html"><span className="glyphicon glyphicon-home"></span></a></li>
              <li className={`dropdown ${dropdownOpen === 'members' ? 'open' : ''}`}>
                <a className="dropdown-toggle" onClick={() => toggleDropdown('members')} href="#">Members<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="members.html">BigDataSoc Members</a></li>
                </ul>
              </li>
              <li className={`dropdown ${dropdownOpen === 'hackathons' ? 'open' : ''}`}>
                <a className="dropdown-toggle" onClick={() => toggleDropdown('hackathons')} href="#">Hackathons<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {hackathons.map((h) => (
                    <li key={h.title}><a href={h.link}>{h.title}</a></li>
                  ))}
                </ul>
              </li>
              <li className={`dropdown ${dropdownOpen === 'tutorials' ? 'open' : ''}`}>
                <a className="dropdown-toggle" onClick={() => toggleDropdown('tutorials')} href="#">Tutorials<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {tutorials.map((t) => (
                    <li key={t.title}><a href={t.link} target="_blank">{t.title}</a></li>
                  ))}
                </ul>
              </li>
              <li className={`dropdown ${dropdownOpen === 'workshops' ? 'open' : ''}`}>
                <a className="dropdown-toggle" onClick={() => toggleDropdown('workshops')} href="#">Workshops<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {workshops.map((w) => (
                    <li key={w.title}><a href={w.link} target="_blank">{w.title}</a></li>
                  ))}
                </ul>
              </li>
              <li className={`dropdown ${dropdownOpen === 'contact' ? 'open' : ''}`}>
                <a className="dropdown-toggle" onClick={() => toggleDropdown('contact')} href="#">Contact<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#contactpage">Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main style={{ backgroundColor: '#ffffff', padding: '24px', marginTop: '24px' }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {carouselImages.map((_, i) => (
              <li key={i} data-target="#myCarousel" data-slide-to={i} className={i === 0 ? 'active' : ''}></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {carouselImages.map((img, i) => (
              <div key={i} className={`item ${i === 0 ? 'active' : ''}`}>
                <img src={img} alt={`Hackathon ${i}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <section id="welcome" className="section">
          <h1>Welcome to BigDataSoc</h1>
          <p style={{ textAlign: 'justify' }}>
            The Big Data Society (BigDataSoc) at <a href="https://www.mq.edu.au/" target="_blank">Macquarie University</a>, is a student society affiliated with the <a href="https://data-science-group.github.io" target="_blank">Data Science Lab</a>, and the <a href="https://www.mq.edu.au/research/research-centres-groups-and-facilities/centres/centre-for-applied-artificial-intelligence" target="_blank">Centre for Applied Artificial Intelligence</a>, at the <a href="https://www.mq.edu.au/faculty-of-science-and-engineering/departments-and-schools/school-of-computing" target="_blank">School of Computing</a>, <a href="https://www.mq.edu.au/" target="_blank">Macquarie University</a>. We are <b>Australia's FIRST</b> Big Data Society!
          </p>
          <p style={{ textAlign: 'justify' }}>
            Established in 2018, the Big Data Society aims to provide all students, researchers, and academics, an inspiring, cohesive, and creative environment, where we all can learn more about the big data problem and its real-world applications. This will make the university experience even more fun and fulfilling, whilst maximizing students' employment opportunities.
          </p>
          <h3>BigDataSoc Executives:</h3>
          <p>
            <b>Founder and Chair:</b> <a href="https://protect-au.mimecast.com/s/b-LFCANpnDCrWv8gt8Lc3A?domain=data-science-group.github.io" target="_blank">Prof. Amin Beheshti</a>
            <br /><br />
            <b>*2026 Executives*</b><br />
            <br />
            <b>President:</b> <a href="https://www.linkedin.com/in/sobhansalarian/" target="_blank">Sobhan Salarian</a>
            <br />
            <b>Vice President (HDR):</b> <a href="https://url.au.m.mimecastprotect.com/s/FQM3CRONg6sv5wX5vt9MF3H13fBg?domain=linkedin.com" target="_blank">Kamyar Taeb</a>
            <br />
            <b>Vice President (Postgraduate):</b> <a href="https://au.linkedin.com/in/atenayavari" target="_blank">Atena Yavari</a>
            <br />
            <b>Vice President (Undergraduate):</b> <a href="https://www.linkedin.com/in/sogol-hosseini-5172611a4" target="_blank">Sogol Hosseini</a>
            <br />
            <b>Team Coordinator:</b> <a href="https://www.linkedin.com/in/alireza-shammasi-13b72824a/" target="_blank">Alireza Shammasi</a>
            <br />
            <b>Treasurer:</b> <a href="https://www.linkedin.com/in/mhahmadi/" target="_blank">Mohammad H. Ahmadi</a>
            <br />
            <b>Secretary:</b> <a href="https://www.linkedin.com/in/marjan-baghgolshani-0462a2125/" target="_blank">Marjan BaghGolshani</a>
            <br />
            <b>Female Ambassador:</b> <a href="https://www.linkedin.com/in/afrooz-sheikholeslami-496127196/" target="_blank">Afrooz Sheikholeslami</a>
            <br />
            <b>Events Director:</b> <a href="https://url.au.m.mimecastprotect.com/s/ndz4CQnM1WfkonLoktxjIEHGX5gP?domain=linkedin.com" target="_blank">Parimehr Morassafar</a>, <a href="https://www.linkedin.com/in/laura-hardy-8a613b322/" target="_blank">Laura Hardy</a>
            <br />
            <b>IT Director:</b> <a href="https://www.linkedin.com/in/alireza-yegane" target="_blank">Alireza Yegane</a>
            <br />
            <b>Web and Social Media Director:</b> <a href="https://www.linkedin.com/in/sayedali-mohseni-464953152/" target="_blank">SeyedAli Mohseni</a>
            <br />
            <b>Industry and External Relations Director:</b> <a href="https://www.linkedin.com/in/erfanmoshiri/" target="_blank">Erfan Moshiri</a>
          </p>
          <h3 id="contactpage">BigDataSoc Contacts:</h3>
          <p>
            Website: <a href="https://data-science-group.github.io/BigDataSociety/" target="_blank">https://data-science-group.github.io/BigDataSociety/</a>
            <br />
            LinkedIn: <a href="https://www.linkedin.com/in/centre-for-applied-artificial-intelligence/" target="_blank">Centre for Applied AI</a>
            <br />
            Email: <a href="mailto:mq.bigdata.society@gmail.com" target="_blank">ai@mq.edu.au</a>
          </p>
        </section>

        <hr />

        <section id="sponsors" className="section">
          <h3>Sponsors and Supporters</h3>
          <p>Official sponsor logos and partner details will be added here soon.</p>
          <p>Current supporters include Macquarie University, the Data Science Lab, and the Centre for Applied Artificial Intelligence.</p>
        </section>

        <hr />

        <nav className="navbar navbar-inverse navbar-static-top" style={{ marginTop: '24px' }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Copyright © 2018 by BigDataSoc. All rights reserved</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#contactpage">Contact</a></li>
              <li><a href="#sponsors">Sponsors and Supporters</a></li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  )
}

export default App
