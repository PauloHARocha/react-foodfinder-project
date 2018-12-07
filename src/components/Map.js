import React, { Component } from 'react';

class Map extends Component {
    
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
            
        const url = new URL("https://api.foursquare.com/v2/venues/explore")
        const parameters = {
            client_id: "XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",
            client_secrect: "QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK",
            query: "food",
            ll: "-8.129725,-34.902381"
        }
        url.search = new URLSearchParams({
            client_id: parameters.client_id,
            client_secret: parameters.client_secrect, v: "20181025", locale: 'br',
            ll: parameters.ll, query: parameters.query
        })

        fetch(url)
            .then(res => res.json())
            .then(res => {
                let places = res.response.groups[0].items.map(place => ({
                    name: place.venue.name,
                    address: place.venue.location.address,
                    lat: place.venue.location.lat,
                    lng: place.venue.location.lng,
                    id: place.venue.id
                }))
                this.props.onMapLoad(map, places)
            })
    }

    componentDidMount() {
        if (!window.google) {
            let s = document.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.defer = true
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDqnxrPFH-QNRfwryEntbFmlqAUL3-1dEE`
            let x = document.getElementsByTagName('script')[0]
            x.parentNode.insertBefore(s, x)
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
            window.gm_authFailure = () => {
                this.onError()
            };
            s.onerror = () => {
                this.onError()
            };
        } else {
            this.onScriptLoad()
        }
    }

    onError = () => {
        alert(`Something wrong happened, check your internet conection and refresh the page`)
    }

    render() {
        return (
            <div 
                className="map" 
                aria-label="map"
                role="application"
                id={this.props.id} />
        );
    }
}

export default Map