import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <div 
                className="nav-burger" 
                tabIndex="1" 
                aria-label="menu"
                role="menu"
                onClick={props.changeMenu} 
                onKeyPress={props.changeMenu}
                >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <h1 className="title">Recife Boa Viagem</h1>
        </nav>
    )  
}

export default NavBar