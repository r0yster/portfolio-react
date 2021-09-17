import React from 'react';

function Header({children}) {
  return (
    <header className="flex-row space-between px-1">
      {children}
    </header>
  );
};

export default Header;