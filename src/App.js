import React from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';


function App() {

  return (
    <div>
      <main>
        <Header />
        <Nav />
        <Project />
        <Footer />
      </main>
    </div>
  );
}

export default App;
