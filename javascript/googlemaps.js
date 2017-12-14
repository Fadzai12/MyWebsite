  	 function initMap() {
        var uluru = {lat: 53.414739, lng: -1.430738}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    