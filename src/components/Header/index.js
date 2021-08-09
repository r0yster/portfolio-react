import React, { useState } from 'react';
import Nav from '../Navigation';

function Header(props) {

    const [contactSelected, setContactSelected] = useState(false);
    const { navItems = [], currentNav, setCurrentNav } = props;

    return(
        <header>
            { <Nav 
                navItems={navItems}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            /> }
        </header>
        
    );
}

export default Header;