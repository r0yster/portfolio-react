import { React, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  const [navItems] = useState(["About me", "Projects", "Contact Me", "Resume"]);
  const [currentNav, setCurrentNav] = useState(navItems[0]);

  const page = () => {
    switch (currentNav) {
      case "Contact Me":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  document.title = currentNav;

  return (
    <div>
      <Header
        navItems={navItems}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />
      {page(currentNav)}
      <Footer />
    </div>
  );
}

export default App;