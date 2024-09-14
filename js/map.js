let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(56.893591485967946, 23.37531879206537),
        zoom: 9,
    });

    const domainBase = 'http://hards-template.lv/';

    const iconBase =
    // domainBase + "hards/img/";
    domainBase + "img/";
    const icons = {
        style: {
        icon: iconBase + "map-icon.png",
        },
    };
    const features = [{
            position: new google.maps.LatLng(56.93380698807504, 24.055606599999997),
            positionContent: new google.maps.LatLng(57.04, 24.055606599999997),
            type: "style",
            content: `<div style="text-align: center;"><p class="p"><b>Rīga</b></p><p class="mapInformer__p">Krūzes iela 23 k-3, LV - 1046</p></div>`,
        },
        {
            position: new google.maps.LatLng(56.66440661925009, 22.490165612593053),
            positionContent: new google.maps.LatLng(56.77, 22.490165612593055),
            type: "style",
            content: `<div style="text-align: center;"><p class="p"><b>Saldus</b></p><p class="mapInformer__p">Krūzes iela 23 k-3, LV - 1046</p></div>`,
        },
    ];



    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });

        const infowindow = new google.maps.InfoWindow({
            position: features[i].positionContent,
            maxWidth: 250,
            content: features[i].content
        });

        google.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map);
            //Change the marker icon
            marker.setIcon(iconBase + "map-icon-acitve.png");
        });

        google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close(map);
            //Change the marker icon
            marker.setIcon(icons[features[i].type].icon);
        });
    }

    google.maps.event.addDomListener(window, "resize", function() {
        if(window.innerWidth <=768) {
            if(window.innerWidth <=576) {
                map.setZoom(7);
            }else {
                map.setZoom(8);
            }
            
        }else {
            map.setZoom(9);
        }
      });
}



window.initMap = initMap;