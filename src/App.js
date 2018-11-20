import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Map from './Map'
import InfoWindow from './InfoWindow'

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
    menu: false,
    infoWindow: null
  }

  changeMenu = () => {
    let menu = !this.state.menu
    this.setState({ menu: menu })
  }

  createInfoWindow(marker, map) {
    let infoWindow = this.state.infoWindow
    infoWindow.close()
    infoWindow.setContent('')
    infoWindow.marker = marker

    infoWindow.addListener('closeclick', function () {
      infoWindow.setMarker = null;
    });

    infoWindow.setContent('<div>TEstando</div>')
    
    infoWindow.open(map, marker)
  }

  makeMarkerIcon(markerColor) {
    var markerImage = new window.google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
      '|40|_|%E2%80%A2',
      new window.google.maps.Size(21, 34),
      new window.google.maps.Point(0, 0),
      new window.google.maps.Point(10, 34),
      new window.google.maps.Size(21, 34));
    return markerImage;
  }
  

  render() {
    const defaultIcon = this.makeMarkerIcon;


    const highlightedIcon = this.makeMarkerIcon;
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
            id="MapRecife"
            options={{
              center: { lat: -8.129725, lng: -34.902381 },
              zoom: 15
            }}
            onMapLoad={map => {
              let marker, markerList = []
              this.setState({ infoWindow: new window.google.maps.InfoWindow()})
              this.state.places.map((place, id) => {
                marker = new window.google.maps.Marker({
                  position: { lat: place.lat, lng: place.lng },
                  map: map,
                  title: place.name,
                  animation: window.google.maps.Animation.DROP,
                  icon: defaultIcon('0091ff')
                })
                markerList.push(marker)
                marker.addListener('click', e => {
                  this.createInfoWindow(markerList[id], map)
                })
                marker.addListener('mouseover', function () {
                  this.setIcon(highlightedIcon('FFFF24'));
                });
                marker.addListener('mouseout', function () {
                  this.setIcon(defaultIcon('0091ff'));
                });
                
              })
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
