import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        const { menu, onChangeInput, createInfoWindowFromList, showingPlaces} = this.props
        return (
            <aside className={`side-menu ${menu ? "visible" : ""}`}>
                <h2>Food Finder</h2>
                <input type="text" onChange={onChangeInput}></input>
                <ul className="food-list">
                    {showingPlaces.map((place, id) => (
                        <li className="food-item"
                            key={place.name} i
                            d={id} 
                            onClick={createInfoWindowFromList}>{place.name}</li>
                    ))}
                </ul>
            </aside>
        )
    }
}

export default SideMenu