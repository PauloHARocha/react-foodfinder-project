(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(14),n(1)),s=n(2),l=n(5),u=n(3),m=n(4),p=n(6),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onScriptLoad=n.onScriptLoad.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onScriptLoad",value:function(){var e=this,t=new window.google.maps.Map(document.getElementById(this.props.id),this.props.options),n=new URL("https://api.foursquare.com/v2/venues/explore"),a="XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",o="QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK",r="food",i="-8.129725,-34.902381";n.search=new URLSearchParams({client_id:a,client_secret:o,v:"20181025",locale:"br",ll:i,query:r}),fetch(n).then(function(e){return e.json()}).then(function(n){var a=n.response.groups[0].items.map(function(e){return{name:e.venue.name,address:e.venue.location.address,lat:e.venue.location.lat,lng:e.venue.location.lng,id:e.venue.id}});e.props.onMapLoad(t,a)})}},{key:"componentDidMount",value:function(){var e=this;if(window.google)this.onScriptLoad();else{var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.google.com/maps/api/js?key=AIzaSyDqnxrPFH-QNRfwryEntbFmlqAUL3-1dEE";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),t.addEventListener("load",function(t){e.onScriptLoad()})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"map",id:this.props.id})}}]),t}(a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav-burger",tabIndex:"1",onClick:this.props.changeMenu,onKeyPress:this.props.changeMenu},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"})),o.a.createElement("h1",{className:"title"},"Recife Boa Viagem"))}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.menu,n=e.onChangeInput,a=e.createInfoWindowFromList,r=e.showingPlaces;return o.a.createElement("aside",{className:"side-menu ".concat(t?"visible":"")},o.a.createElement("h2",{className:"menu-title"},"Food Finder"),o.a.createElement("input",{className:"food-finder",placeholder:"Search for food here",type:"text",onChange:n,tabIndex:"2"}),r.length>0&&o.a.createElement("ul",{className:"food-list"},r.map(function(e,t){return o.a.createElement("li",{tabIndex:"3",className:"food-item",key:e.name,id:t,onKeyPress:a,onClick:a},e.name)})))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={places:[],showingPlaces:[],menu:!1,infoWindow:null,map:null,markerList:[]},n.changeMenu=function(){var e=!n.state.menu;n.setState({menu:e})},n.createInfoWindowFromList=function(e){var t=n.state.markerList[e.target.id],a=n.state.showingPlaces[e.target.id];n.createInfoWindow(t,a,n.state.map)},n.onChangeInput=function(e){var t=n.state.markerList;t=t.map(function(e){return e.setMap(null),e}),n.setState({markers:t});var a=n.state.places.filter(function(t){return t.name.match(e.target.value)});console.log(a),n.createMarkers(n.state.map,a)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createInfoWindow",value:function(e,t,n){var a=this,o=this.state.infoWindow;o.close(),o.setContent(""),o.marker=e,o.addListener("closeclick",function(){o.setMarker=null});var r=new URL("https://api.foursquare.com/v2/venues/".concat(t.id,"/photos")),i="XRSSA1AQTZ45PLHSXP3ZAWMKBKKX31S0YPBDWJYCIXXHSIJA",c="QBTVBE0BUBV4RD1LAHY0Q40I4ASPCOPBKQFC4MQKXWKVU4AK";r.search=new URLSearchParams({client_id:i,client_secret:c,v:"20181025"}),fetch(r).then(function(e){return e.json()}).then(function(e){if(e.ok){var t=e.response.photos.items[0].prefix,n=e.response.photos.items[0].suffix;return(r=new URL("".concat(t).concat("width100").concat(n))).search=new URLSearchParams({client_id:i,client_secret:c,v:"20181025"}),r}return"https://via.placeholder.com/108x120.png?text=No+Image"}).then(function(e){return"<div>\n        <img src=".concat(e,"/>\n        <h3>").concat(t.name,"</h3>\n        <p>").concat(t.address,"</p>\n      </div>")}).then(function(t){o.setContent(t),a.state.markerList.map(function(e){return e.setIcon(a.makeMarkerIcon("FFFF24"))}),e.setIcon(a.makeMarkerIcon("FFFFFF")),o.open(n,e)})}},{key:"makeMarkerIcon",value:function(e){return new window.google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+e+"|40|_|%E2%80%A2",new window.google.maps.Size(21,34),new window.google.maps.Point(0,0),new window.google.maps.Point(10,34),new window.google.maps.Size(21,34))}},{key:"createMarkers",value:function(e,t){var n,a=this,o=[];this.setState({map:e,infoWindow:new window.google.maps.InfoWindow});var r=this.makeMarkerIcon,i=this.makeMarkerIcon;t.map(function(c,s){n=new window.google.maps.Marker({position:{lat:c.lat,lng:c.lng},map:e,title:c.name,animation:window.google.maps.Animation.DROP,icon:r("FFFF24")}),o.push(n),n.addListener("click",function(n){a.createInfoWindow(o[s],t[s],e)}),n.addListener("mouseover",function(){this.setIcon(i("FFFFFF"))}),n.addListener("mouseout",function(){this.setIcon(r("FFFF24"))})}),this.setState({markerList:o,showingPlaces:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,{menu:this.state.menu,onChangeInput:this.onChangeInput,createInfoWindowFromList:this.createInfoWindowFromList,showingPlaces:this.state.showingPlaces}),o.a.createElement("div",{className:"wrapper ".concat(this.state.menu?"slide":"")},o.a.createElement(h,{changeMenu:this.changeMenu}),o.a.createElement(d,{id:"MapRecife",options:{center:{lat:-8.129725,lng:-34.902381},zoom:16},onMapLoad:function(t,n){e.setState({places:n,showingPlaces:n}),e.createMarkers(t,n)}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.d488c827.chunk.js.map