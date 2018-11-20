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
    showingPlaces: [
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
    infoWindow: null,
    map: null,
    markerList: []
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
    let content = `<div><img className="info__yelp" alt="Yelp Logo" 
    src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/1ea40efd80f5/assets/img/brand_guidelines/yelp_fullcolor.png"/></div>`
    infoWindow.setContent(content)
      
    
    infoWindow.open(map, marker)
  }

  createInfoWindowFromList = (e) => {
    let marker = this.state.markerList[e.target.id]
    this.createInfoWindow(marker, this.state.map)
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
  onChangeInput = (e) => {
    let clearMarkers = this.state.markerList;
    clearMarkers = clearMarkers.map(marker => {
      marker.setMap(null);
      return marker;
    });

    this.setState({ markers: clearMarkers });
    let showingPlaces = this.state.places.filter(place => (
      place.name.includes(e.target.value)
    ))
    console.log(showingPlaces)
    
    this.createMarkers(this.state.map, showingPlaces)
  }

  createMarkers(map, showingPlaces){
    let marker, markerList = []
    this.setState({ map: map, infoWindow: new window.google.maps.InfoWindow() })
    const defaultIcon = this.makeMarkerIcon;
    const highlightedIcon = this.makeMarkerIcon;
    showingPlaces.map((place, id) => {
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
    this.setState({ markerList: markerList, showingPlaces: showingPlaces })
  }

  render() {
    return (
      <div>
        <aside className={`side-menu ${this.state.menu ? "visible" : ""}`}>
          <h2>Food Finder</h2>
          <input type="text" onChange={this.onChangeInput}></input>
          <ul>
            {this.state.showingPlaces.map((place, id) => (
              <li key={place.name} id={id} onClick={this.createInfoWindowFromList}>{place.name}</li>
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
              this.createMarkers(map, this.state.showingPlaces)
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
