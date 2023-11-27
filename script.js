let long
let lat
navigator.geolocation.watchPosition(position => {
        long = position.coords.longitude
        lat = position.coords.latitude
        console.log(long, lat)
        geo.innerHTML = `${long} ${lat}`
    })
document.querySelector('form').onsubmit = function(e) {
        e.preventDefault();
        const com = document.querySelector('#com').value
        const obj = {
            coords: long + ' ' + lat,
            com: com
        }
        const keyName = 'geoloc' + Date.now()
        localStorage.setItem(keyName, JSON.stringify(obj))
        console.log(localStorage);
    }
    const keys = Object.keys(localStorage);
    const keyExists = keys.map(key => {
        if(key.includes('geoloc'))
            console.log(JSON.parse(localStorage[key]));
    });