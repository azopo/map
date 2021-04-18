let mapContainer = document.getElementById("map")
let map = L.map(mapContainer).setView([50.4546600, 30.5238000], 6)
L.tileLayer("https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=gyGG11VGyqbpjcmJWj2Y", {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map)
let greenIcon = L.icon({
    iconUrl: 'img/leaf-green.png',
    shadowUrl: 'img/leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});
let cities = {
    kyiv: {
        coordinates: [50.4546600, 30.5238000],
        desc: 'Київ 50.4546600, 30.5238000'
    },
    lviv: {
        coordinates: [49.8382600, 24.0232400],
        desc: 'Львів 49.8382600, 24.0232400'
    },
    dnipro: {
        coordinates: [48.4500000, 34.9833300],
        desc: 'Дніпро 48.4500000, 34.9833300'
    },
    donetsk: {
        coordinates: [48.0230000, 37.8022400],
        desc: 'Донецьк 48.0230000, 37.8022400'
    },
    odessa: {
        coordinates: [46.4774700, 30.7326200],
        desc: 'Одеса 46.4774700, 30.7326200'
    }
}
Object.keys(cities).forEach(function (prop) {
    L.marker(cities[prop].coordinates, {icon: greenIcon}).addTo(map).bindPopup(cities[prop].desc).on('click', () => {
        document.getElementById("lable").innerText = cities[prop].desc
    });
});