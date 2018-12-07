import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        const { menu, onChangeInput, createInfoWindowFromList, showingPlaces} = this.props
        return (
            <aside className={`side-menu ${menu ? "visible" : ""}`}>
                <h2 className="menu-title">Food Finder</h2>
                <input
                    tabIndex="2"
                    aria-label="search for food" 
                    className="food-finder"
                    placeholder="Search for food here"
                    type="text" 
                    onChange={onChangeInput} ></input>
                
                <ul className="food-list">
                    {showingPlaces.map((place, id) => (
                        <li
                            tabIndex="3"
                            aria-label="choose restaurant"
                            role="button"
                            className="food-item"
                            key={place.id}
                            id={id}
                            onKeyPress={createInfoWindowFromList}
                            onClick={createInfoWindowFromList}
                            >{place.name}</li>
                    ))}
                </ul>
                
                
            </aside>
        )
    }
}

export default SideMenu