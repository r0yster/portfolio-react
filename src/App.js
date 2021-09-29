import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import resumeData from './resumeData';

function App() {
  const [pages] = useState([
    { name: 'Home' },
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ChakraProvider>
      <div>
        <Header>
          <Nav pages={pages}
                setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
          ></Nav>
        </Header>
        <main>
          {currentPage.name === 'Home' && <Home />}
          {currentPage.name === 'About' && <About />}
          {currentPage.name === 'Portfolio' && <Portfolio />}
          {currentPage.name === 'Resume' && <Resume />}
          {currentPage.name === 'Contact' && <Contact />}
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
