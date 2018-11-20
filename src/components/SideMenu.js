import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        const { menu, onChangeInput, createInfoWindowFromList, showingPlaces} = this.props
        return (
            <aside className={`side-menu ${menu ? "visible" : ""}`}>
                <h2 className="menu-title">Food Finder</h2>
                <input className="food-finder"
                placeholder="Search for food here"
                type="text" onChange={onChangeInput} tabIndex="2"></input>
                <ul className="food-list">
                    {showingPlaces.map((place, id) => (
                        <li 
                            tabIndex="3"                                                                            
                            className=  "food-item"
                            key={place.name} 
                            id={id}
                            onKeyPress={createInfoWindowFromList} 
                            onClick={createInfoWindowFromList}>{place.name}</li>
                    ))}
                </ul>
            </aside>
        )
    }
}

export default SideMenu