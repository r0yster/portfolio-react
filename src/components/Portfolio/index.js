import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Local Heroes',
      description: 'Full stack application that connects tourists with local individuals/groups based one common interests',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'The Movie Hub',
      description: 'Website built on pure HTML, CSS, and JavaScript to provide users with a one stop shop for all their movie needs.',
      link: "https://r0yster.github.io/Project1/",
      repo: "https://github.com/r0yster/Project1"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS mock website allowing users to sign up for a run',
      link: "https://r0yster.github.io/run-buddy/",
      repo: "https://github.com/r0yster/run-buddy"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;