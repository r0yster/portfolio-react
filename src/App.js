import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import resumeData from './resumeData';

function App() {
  const [pages] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav pages={pages}
              setCurrentPage={setCurrentPage}
                currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        {currentPage.name === 'About' && <About />}
        {currentPage.name === 'Portfolio' && <Portfolio />}
        {currentPage.name === 'Resume' && <Resume />}
        {currentPage.name === 'Contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
