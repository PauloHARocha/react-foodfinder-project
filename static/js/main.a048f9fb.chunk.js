(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(8),i=t.n(r),c=(t(14),t(1)),s=t(2),l=t(5),u=t(3),d=t(4),m=t(6),p=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).onError=function(){alert("Something wrong happened, check your internet conection and refresh the page")},t.onScriptLoad=t.onScriptLoad.bind(Object(m.a)(Object(m.a)(t))),t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"onScriptLoad",value:function(){var e=this,n=new window.google.maps.Map(document.getElementById(this.props.id),this.props.options),t=new URL("https://api.foursquare.com/v2/venues/explore"),a="XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",o="QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK",r="food",i="-8.129725,-34.902381";t.search=new URLSearchParams({client_id:a,client_secret:o,v:"20181025",locale:"br",ll:i,query:r}),fetch(t).then(function(e){return e.json()}).then(function(t){var a=t.response.groups[0].items.map(function(e){return{name:e.venue.name,address:e.venue.location.address,lat:e.venue.location.lat,lng:e.venue.location.lng,id:e.venue.id}});e.props.onMapLoad(n,a)}).catch(function(){return alert("Something wrong happened, check your internet conection and refresh the page")})}},{key:"componentDidMount",value:function(){var e=this;if(window.google)this.onScriptLoad();else{var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.defer=!0,n.src="https://maps.google.com/maps/api/js?key=AIzaSyDqnxrPFH-QNRfwryEntbFmlqAUL3-1dEE";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t),n.addEventListener("load",function(n){e.onScriptLoad()}),window.gm_authFailure=function(){e.onError()},n.onerror=function(){e.onError()}}}},{key:"render",value:function(){return o.a.createElement("div",{className:"map","aria-label":"map",role:"application",id:this.props.id})}}]),n}(a.Component),h=function(e){return o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav-burger",tabIndex:"1","aria-label":"menu",role:"menu",onClick:e.changeMenu,onKeyPress:e.changeMenu},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"})),o.a.createElement("h1",{className:"title"},"Recife Boa Viagem"))},f=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.menu,t=e.onChangeInput,a=e.createInfoWindowFromList,r=e.showingPlaces;return o.a.createElement("aside",{className:"side-menu ".concat(n?"visible":"")},o.a.createElement("h2",{className:"menu-title"},"Food Finder"),o.a.createElement("input",{tabIndex:"2","aria-label":"search for food",className:"food-finder",placeholder:"Search for food here",type:"text",onChange:t}),o.a.createElement("ul",{className:"food-list"},r.map(function(e,n){return o.a.createElement("li",{tabIndex:"3","aria-label":"choose restaurant",role:"button",className:"food-item",key:e.id,id:n,onKeyPress:a,onClick:a},e.name)})))}}]),n}(a.Component),g=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={places:[],showingPlaces:[],menu:!1,infoWindow:null,map:null,markerList:[]},t.changeMenu=function(){var e=!t.state.menu;t.setState({menu:e})},t.createInfoWindowFromList=function(e){var n=t.state.markerList[e.target.id],a=t.state.showingPlaces[e.target.id];t.createInfoWindow(n,a,t.state.map)},t.onChangeInput=function(e){var n=t.state.markerList;n=n.map(function(e){return e.setMap(null),e}),t.setState({markers:n});var a=t.state.places.filter(function(n){return n.name.toUpperCase().match(e.target.value.toUpperCase())});t.createMarkers(t.state.map,a)},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"createInfoWindow",value:function(e,n,t){var a=this,o=this.state.infoWindow;o.close(),o.setContent(""),o.marker=e,o.addListener("closeclick",function(){o.setMarker=null});var r=new URL("https://api.foursquare.com/v2/venues/".concat(n.id,"/photos")),i="XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",c="QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK";r.search=new URLSearchParams({client_id:i,client_secret:c,v:"20181025"}),fetch(r).then(function(e){return e.json()}).then(function(e){if(e.ok){var n=e.response.photos.items[0].prefix,t=e.response.photos.items[0].suffix;return(r=new URL("".concat(n).concat("width100").concat(t))).search=new URLSearchParams({client_id:i,client_secret:c,v:"20181025"}),r}return"https://via.placeholder.com/108x120.png?text=No+Image"}).then(function(e){return"<div>\n        <img src=".concat(e,' alt="').concat(n.name,'"/>\n        <h3>').concat(n.name,"</h3>\n        <p>").concat(n.address,"</p>\n        <p>Foursquare<p>\n      </div>")}).then(function(n){o.setContent(n),a.state.markerList.map(function(e){return e.setIcon(a.makeMarkerIcon("FFFF24"))}),e.setIcon(a.makeMarkerIcon("FFFFFF")),o.open(t,e)}).catch(function(){return alert("Something wrong happened, check your internet conection and refresh the page")})}},{key:"makeMarkerIcon",value:function(e){return new window.google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+e+"|40|_|%E2%80%A2",new window.google.maps.Size(21,34),new window.google.maps.Point(0,0),new window.google.maps.Point(10,34),new window.google.maps.Size(21,34))}},{key:"createMarkers",value:function(e,n){var t,a=this,o=[];this.setState({map:e,infoWindow:new window.google.maps.InfoWindow});var r=this.makeMarkerIcon,i=this.makeMarkerIcon;n.forEach(function(c,s){t=new window.google.maps.Marker({position:{lat:c.lat,lng:c.lng},map:e,title:c.name,animation:window.google.maps.Animation.DROP,icon:r("FFFF24")}),o.push(t),t.addListener("click",function(t){a.createInfoWindow(o[s],n[s],e)}),t.addListener("mouseover",function(){this.setIcon(i("FFFFFF"))}),t.addListener("mouseout",function(){this.setIcon(r("FFFF24"))})}),this.setState({markerList:o,showingPlaces:n})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,{menu:this.state.menu,onChangeInput:this.onChangeInput,createInfoWindowFromList:this.createInfoWindowFromList,showingPlaces:this.state.showingPlaces}),o.a.createElement("div",{className:"wrapper ".concat(this.state.menu?"slide":"")},o.a.createElement(h,{changeMenu:this.changeMenu}),o.a.createElement(p,{id:"MapRecife",options:{center:{lat:-8.129725,lng:-34.902381},zoom:16},onMapLoad:function(n,t){e.setState({places:t,showingPlaces:t}),e.createMarkers(n,t)}})))}}]),n}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-foodfinder-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-foodfinder-project","/service-worker.js");w?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(n,e)})}}()},9:function(e,n,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.a048f9fb.chunk.js.map