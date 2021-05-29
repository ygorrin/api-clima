$('form').submit(function () {
    $('#lugar').html("");
    let ubicacion = $('#ubicacion').val();
    let key = "4524003ded22598173805a9b95a8ab96";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&units=metric&appid=`;
    $.get(`${url}${key}`, function (res) {

        let ciudad = res.name;
        let temperatura = res.main.temp;
        let min = res.main.temp_min;
        let max = res.main.temp_max;
        let nubosidad = res.weather[0].description;
        let lon = res.coord.lon;
        let lat = res.coord.lat;
        $('#lugar').append(`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title ">${ciudad}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Información del Clima</h6>
            <p class="card-text">Temperatura: ${temperatura}°C <br>
                Min: ${min}°C, Max: ${max}°C <br>
                Nubosidad: ${nubosidad} <br>
                Latitud: ${lat}<br>
                Longitud: ${lon}</p>
        </div>
    </div>`)

    }, 'json');
    return false;
});