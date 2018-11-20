import React, { Component } from 'react';

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

    ]
  }
  render() {
    return (
      <div>
        <aside className="side-menu">
          <h2>Food Finder</h2>
          <ul>
            {this.state.places.map(place => (
              <li key={place.name} >{place.name}</li>
            ))}
          </ul>
        </aside>
        
      </div>
    );
  }
}

export default App;
