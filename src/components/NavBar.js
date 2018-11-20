import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return (
            <nav className="nav">
                <div className="nav-burger" tabIndex="1" 
                    onClick={this.props.changeMenu} 
                    onKeyPress={this.props.changeMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <h1 className="title">Recife Boa Viagem</h1>
            </nav>
        )
    }
}

export default NavBar