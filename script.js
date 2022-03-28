const loadEvent = async _ => {

    const apiKey="4da00b046a02fb55e5d68ac66acf1b75"
    const cityInput = document.querySelector("#cityinput")
    const button = document.querySelector("#button")
    const cityYouPut = document.querySelector("#cityyouput")
    const description = document.querySelector("#description")
    const temp = document.querySelector("#tempature")
    const wind = document.querySelector("#wind")
    let icon = document.querySelector("#img")
    let feels = document.querySelector("#feelslike")

    button.addEventListener('click', function(){

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)

                let nameValue = data["name"]
                let description2 = data["weather"]["0"]["description"]
                let tempature = data["main"]["temp"]
                let windSpeed = data["wind"]["speed"]
                let icon2 = data["weather"]["0"]["icon"]
                let feels2 = data["main"]["feels_like"]

                cityYouPut.innerHTML = nameValue
                description.innerHTML = description2
                temp.innerHTML = Math.round(tempature - 273).toFixed(2)
                wind.innerHTML = windSpeed
                icon.setAttribute('src', `http://openweathermap.org/img/wn/${icon2}@2x.png`)
                feels.innerHTML = Math.round(feels2 - 273).toFixed(2)
             
            })

            .catch(err => alert("Wrong city name, please choice to other city!"))

    })

}

window.addEventListener("load", loadEvent);