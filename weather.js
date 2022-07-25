//Complete the Weather API Backend part using openweathermap api
document.querySelector(".search-box").addEventListener("input", async (user_input) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = new Date()
    let search_city = user_input.target.value
    console.log(search_city)
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+search_city+"&units=metric&appid=626141e9c231b804ebce7912cb3e1046"
    try{
        let res = await fetch(url)
        let result = await res.json()
        console.log(result)
        document.querySelector(".city").innerText=result.name+", "+result.sys.country
        document.querySelector(".date").innerText=days[today.getDay()]+" "+today.getDate()+" "+months[today.getMonth()]+" "+today.getFullYear()
        document.querySelector(".temp").innerText=result.main.temp+"°C"
        document.querySelector(".weather").innerText=result.weather[0].main
        document.querySelector(".hi-low").innerText=result.main.temp_min+"°C / "+result.main.temp_max+"°C"
    } catch (error) {
        console.log(error.message)
    }
})