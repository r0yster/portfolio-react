import React from 'react';
import resumeData from '../../resumeData';

function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="row">
            <div className="col-3">
            </div>
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                return(
                  <li>
                    <a href={item.url}><i className={item.className} /></a>
                  </li>
                )
              })
            }
            {/* <div className="col-9">
              <a href="https://github.com/r0yster">GitHub</a>
              <a href="https://www.linkedin.com/in/roy-cantu/">LinkedIn</a>
              <a href="mailto:RoyCantu@roiscool.me">Email</a>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  );
  // const icons = [
  //   {
  //     name: "fab fa-github",
  //     link: "https://github.com/"
  //   },
  //   {
  //     name: "fab fa-linkedin",
  //     link: "https://www.linkedin.com/"
  //   },
  //   {
  //     name: "fab fa-stack-overflow",
  //     link: "mailto:RoyCantu@roiscool.me"
  //   }
  // ]

  // return (
  //   <footer className="flex-row px-1">
  //     {icons.map(icon =>
  //     (
  //       <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
  //     )
  //       )}
  //   </footer>
  // );
}

export default Footer;