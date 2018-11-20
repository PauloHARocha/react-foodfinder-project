import React, { Component } from 'react';
import Map from './Map'

class App extends Component {
  state = {
    places: [
      {
        name: 'Ramon Hostel Bar',
        lat: -8.129405,
        lng: -34.903342
      },
      {
        name: 'Pracinha de Boa Viagem',
        lat: -8.132092,
        lng: -34.900324
      },
      {
        name: 'Shopping Recife',
        lat: -8.119113,
        lng: -34.904934
      },
      {
        name: 'Villa Gourmet',
        lat: -8.126144,
        lng: -34.903922
      },
      {
        name: 'Mafuá do Januário',
        lat: -8.133618,
        lng: -34.904528
      }
    ],
    menu: false
  }

  changeMenu = () => {
    let menu = !this.state.menu
    this.setState({ menu: menu })
  }

  render() {
    return (
      <div>
        <aside className={`side-menu ${this.state.menu ? "visible" : ""}`}>
          <h2>Food Finder</h2>
          <ul>
            {this.state.places.map(place => (
              <li key={place.name} >{place.name}</li>
            ))}
          </ul>
        </aside>
        <div className={`wrapper ${this.state.menu ? "slide" : ""}`}>
          <nav className="nav">
            <div className="nav-burger" tabIndex="1" onClick={this.changeMenu} onKeyPress={this.changeMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <h1>Recife Boa Viagem</h1>
          </nav>
          <Map
            id="myMap"
            options={{
              center: { lat: 41.0082, lng: 28.9784 },
              zoom: 8
            }}
            onMapLoad={map => {
              let marker = new window.google.maps.Marker({
                position: { lat: 41.0082, lng: 28.9784 },
                map: map,
                title: 'Hello Istanbul!'
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
