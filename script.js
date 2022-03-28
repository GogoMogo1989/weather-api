const loadEvent = async _ => {

    const apiKey="4da00b046a02fb55e5d68ac66acf1b75"
    const cityInput = document.querySelector("#cityinput")
    const description = document.querySelector("#description")
    const temp = document.querySelector("#tempature")
    const wind = document.querySelector("#wind")
    let icon = document.querySelector("#img")
    let hum = document.querySelector("#humidity")

    cityInput.addEventListener('keyup', function(event){

        if(event.keyCode === 13){

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
                .then(res => res.json())
                .then(data => {

                    console.log(data)

                    let description2 = data["weather"]["0"]["description"]
                    let tempature = data["main"]["temp"]
                    let windSpeed = data["wind"]["speed"]
                    let icon2 = data["weather"]["0"]["icon"]
                    let hum2 = data["main"]["humidity"]
                    description.innerHTML = description2
                    temp.innerHTML = Math.round(tempature - 273).toFixed(2).slice(0, 2)+"°C"
                    wind.innerHTML = `${windSpeed} km/h`
                    icon.setAttribute('src', `http://openweathermap.org/img/wn/${icon2}@2x.png`)
                    hum.innerHTML = `${hum2} %`
                
                })

                .catch(err => alert("Wrong city name, please choose than other city!"))
        }
    })

}

window.addEventListener("load", loadEvent);