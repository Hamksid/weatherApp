
function currentTime(){
   let date = new Date(); 
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let session = "AM";
   if (hours == 0){
       hours = 12;
   }
   if (hours > 12){
       session = "PM";
   }
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;
  let time = hours + ":" + minutes + ":" + seconds + "" +session;
  document.getElementById("clock").innerHTML = time
 var t = setTimeout(function(){ currentTime() }, 1000); 
}
currentTime();


function search(){
   
    let inputState = document.getElementById("search").value
    let displayCityName = document.getElementById("displayCity")
    let key =
      `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=84a5541e536549f59b50ed907cab345b&units=metric`;
      fetch(key)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        // console.log(data.weather[0])

        description.innerHTML = data.weather[0].main 

        description.innerHTML = data.weather[0].description 

        Temparature.innerHTML= Math.round(data.main.temp) +`&deg;C`
        displayCity.innerHTML = `${data.name},${data.sys.country}`
        
      })
      .catch((err) =>displayCityName.innerHTML= `<p>Enter a valid city name</p>`);
     
    
   
    }

sch.addEventListener("click",search)