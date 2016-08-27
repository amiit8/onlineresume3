
/**************************************
	 	Website : www.amitupadhyay.in
		Author : Aamit Upadhyay
	 	Email : amiit8@gmail.com
***************************************/

// initialize google map

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 18.5245649, lng: 73.7228799},
      zoom: 8
  });
}