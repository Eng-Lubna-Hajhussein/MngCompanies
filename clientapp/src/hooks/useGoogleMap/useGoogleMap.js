import { Google_Map_Api } from "appHelper/appVariables";

function useGoogleMap() {
  const loadAsyncScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      Object.assign(script, {
        type: "text/javascript",
        async: true,
        src,
      });
      script.addEventListener("load", () => {
        resolve(script);
      });
      document.head.appendChild(script);
    });
  };

  const initMapScript = (googleMapApiKey) => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${Google_Map_Api}?key=${googleMapApiKey}&libraries=places&v=weekly`;

    return loadAsyncScript(src);
  };

  const codeLatLng = (lat, long, setCountryCode) => {
    let latLng = new window.google.maps.LatLng(lat, long);
    let geocoder = new window.google.maps.Geocoder();
    let countryCode;
    geocoder.geocode({ latLng }, function (results, status) {
      if ("OK" === status) {
        for (let r = 0, rl = results.length; r < rl; r += 1) {
          let result = results[r];
          if (result.types[0] === "country") {
            countryCode = result.address_components[0].short_name;
            setCountryCode(countryCode);
            break;
          }
        }
      } else {
        console.log(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
    return countryCode;
  };

  const initLocationSearch = (
    searchInput,
    googleMapEl,
    onChange,
    coordinates
  ) => {
    let mapOptions,
      map,
      marker,
      searchBox,
      infoWindow = "";

    mapOptions = {
      zoom: 8,
      center: new window.google.maps.LatLng(coordinates[1], coordinates[0]),
      disableDefaultUI: false,
      scrollWheel: true,
      draggable: true,
    };
    map = new window.google.maps.Map(googleMapEl.current, mapOptions);
    marker = new window.google.maps.Marker({
      position: mapOptions.center,
      map: map,
      draggable: true,
    });
    searchBox = new window.google.maps.places.SearchBox(searchInput.current);
    window.google.maps.event.addListener(
      searchBox,
      "places_changed",
      function () {
        let places = searchBox.getPlaces(),
          bounds = new window.google.maps.LatLngBounds(),
          i,
          place,
          lat,
          long,
          address = places[0].formatted_address;

        for (i = 0; (place = places[i]); i++) {
          bounds.extend(place.geometry.location);
          marker.setPosition(place.geometry.location);
        }

        map.fitBounds(bounds);
        map.setZoom(15);

        lat = marker.getPosition().lat();
        long = marker.getPosition().lng();

        const results = places[0].address_components;
        let countryCode;
        for (let r = 0, rl = results.length; r < rl; r += 1) {
          let result = results[r];
          if (result?.types && result?.types[0] === "country") {
            countryCode = result.short_name;
            break;
          }
        }

        onChange(address, [long, lat], countryCode);

        if (infoWindow) {
          infoWindow.close();
        }
        infoWindow = new window.google.maps.InfoWindow({
          content: address,
        });

        infoWindow.open(map, marker);
      }
    );
    window.google.maps.event.addListener(marker, "dragend", function (event) {
      let lat, long, address;

      lat = marker.getPosition().lat();
      long = marker.getPosition().lng();

      let geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { latLng: marker.getPosition() },
        function (results, status) {
          if ("OK" === status) {
            let countryCode;
            for (let r = 0, rl = results.length; r < rl; r += 1) {
              let result = results[r];
              if (result.types[0] === "country") {
                countryCode = result.address_components[0].short_name;
                break;
              }
            }
            address = results[0].formatted_address;
            searchInput.current.value = address;
            onChange(address, [long, lat], countryCode);
          } else {
            console.log(
              "Geocode was not successful for the following reason: " + status
            );
          }
          if (infoWindow) {
            infoWindow.close();
          }
          infoWindow = new window.google.maps.InfoWindow({
            content: address,
          });

          infoWindow.open(map, marker);
        }
      );
    });
  };

  const initMap = (googleMapEl, coordinates) => {
    if (googleMapEl === undefined) {
      console.log("Google Map Element Is Not Defined!");
    }
    let mapOptions,
      map,
      marker = "";

    mapOptions = {
      zoom: 8,
      center: new window.google.maps.LatLng(coordinates[1], coordinates[0]),
      disableDefaultUI: false,
      scrollWheel: true,
      draggable: false,
    };
    map = new window.google.maps.Map(googleMapEl, mapOptions);
    marker = new window.google.maps.Marker({
      position: mapOptions.center,
      map: map,
      draggable: false,
    });
  };

  return { initMapScript, initLocationSearch, initMap, codeLatLng };
}

export default useGoogleMap;
