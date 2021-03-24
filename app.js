



const s = document
let lat,long;



navigator.geolocation.getCurrentPosition(function(e){
  console.log(e);
  
  lat = e.coords.latitude;
  long = e.coords.longitude;
  var marker1 = new mapboxgl.Marker()
.setLngLat([long, lat])
.addTo(map);

  map.flyTo({
    center: [long,lat],
    essential: true
  })
}, function(error){
  var marker1 = new mapboxgl.Marker()
.setLngLat([0, 0])
.addTo(map);

map.flyTo({
    center: [0,0],
    essential: true
  })
  console.error(error)
}, {enableHighAccuracy: true, timeout: 1000,})


mapboxgl.accessToken = 'pk.eyJ1IjoiY2R1Ym9pcyIsImEiOiJja21tZWZ6NmMwZXJjMndueGZyY3BiYmp2In0.x8cfzYt1Xrqs2aIPc6xxzQ';
var map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [-74.5, 40], 
zoom: 4
});