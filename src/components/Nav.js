import React from 'react';

function Nav(props) {
  const { pages, setCurrentPage, currentPage } = props;

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((page) => (
            <li key={page}>
              <span className={`mx-5 ${
                currentPage.name === page.name && 'navActive'
                }`}
                onClick={() => setCurrentPage(page)}>
                {page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;