import React, { Component } from 'react';
import Map from './components/Map'
import NavBar from './components/NavBar'
import SideMenu from './components/SideMenu'

class App extends Component {
  state = {
    places: [],
    showingPlaces: [],
    menu: false,
    infoWindow: null,
    map: null,
    markerList: [],
  }

  changeMenu = () => {
    let menu = !this.state.menu
    this.setState({ menu })
  }

  createInfoWindow(marker, info, map) {
    let infoWindow = this.state.infoWindow
    infoWindow.close()
    infoWindow.setContent('')
    infoWindow.marker = marker
    
    infoWindow.addListener('closeclick', function () {
      infoWindow.setMarker = null;
    });
    let url = new URL(`https://api.foursquare.com/v2/venues/${info.id}/photos`)
    const parameters = {
      client_id: "XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",
      client_secrect: "QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK",
      v: "20181025"
    }
    url.search = new URLSearchParams({
      client_id: parameters.client_id,
      client_secret: parameters.client_secrect, v: "20181025"
    })
    
    fetch(url)
    .then(res => res.json())
    .then(res => {
      if (res.ok){
        let prefix = res.response.photos.items[0].prefix
        let size = 'width100'
        let suffix = res.response.photos.items[0].suffix
        url = new URL(`${prefix}${size}${suffix}`)
        url.search = new URLSearchParams({
          client_id: parameters.client_id,
          client_secret: parameters.client_secrect, v: "20181025"
        })
        return url
      }
      else {
        return 'https://via.placeholder.com/108x120.png?text=No+Image' //quota_exceeded
      }
    })
    .then(res => (
      `<div>
        <img src=${res} alt="${info.name}"/>
        <h3>${info.name}</h3>
        <p>${info.address}</p>
        <p>Foursquare<p>
      </div>`
    ))
    .then(content => {
      infoWindow.setContent(content)
      this.state.markerList.map(marker => (marker.setIcon(this.makeMarkerIcon('FFFF24'))))
      marker.setIcon(this.makeMarkerIcon('FFFFFF'))
      infoWindow.open(map, marker)
    })
    .catch(() =>(
      alert(`Something wrong happened, check your internet conection and refresh the page`)
    ))
  }

  createInfoWindowFromList = (e) => {
    const marker = this.state.markerList[e.target.id]
    const info = this.state.showingPlaces[e.target.id]
    this.createInfoWindow(marker, info, this.state.map)
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
      place.name.toUpperCase().match(e.target.value.toUpperCase())
    )) 
    this.createMarkers(this.state.map, showingPlaces)
  }

  createMarkers(map, showingPlaces){
    let marker, markerList = []
    this.setState({ map: map, infoWindow: new window.google.maps.InfoWindow() })
    const defaultIcon = this.makeMarkerIcon;
    const highlightedIcon = this.makeMarkerIcon;
    showingPlaces.forEach((place, id) => {
      marker = new window.google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        title: place.name,
        animation: window.google.maps.Animation.DROP,
        icon: defaultIcon('FFFF24')
      })
      markerList.push(marker)
      marker.addListener('click', e => {
        this.createInfoWindow(markerList[id], showingPlaces[id], map)
      })
      marker.addListener('mouseover', function () {
        this.setIcon(highlightedIcon('FFFFFF'));
      });
      marker.addListener('mouseout', function () {
        this.setIcon(defaultIcon('FFFF24'));
      });
    })
    this.setState({ markerList: markerList, showingPlaces: showingPlaces })
  }

  render() {
    return (
      <div>
        
        <SideMenu 
          menu={this.state.menu}
          onChangeInput={this.onChangeInput}
          createInfoWindowFromList={this.createInfoWindowFromList}
          showingPlaces={this.state.showingPlaces}/>

        <div className={`wrapper ${this.state.menu ? "slide" : ""}`}>
          <NavBar changeMenu={this.changeMenu}/>
          <Map
            id="MapRecife"
            options={{
              center: { lat: -8.129725, lng: -34.902381 },
              zoom: 16
            }}
            onMapLoad={(map, places) => {
              this.setState({ places: places, showingPlaces: places })
              this.createMarkers(map, places)
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
