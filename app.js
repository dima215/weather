//console.log("Підготовка ...");
//
//setTimeout(() => {
//  console.log("Загрузка ...");
//  const user = {
//    name: "Jack",
//    age: 20,
//  };
//
//  setTimeout(() => {
//    console.log(user);
//  }, 2000);
//}, 2000);
//
//
//const request = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    console.log("Загрузка ...");
//    const user = {
//      name: "Jack",
//      age: 20,
//    };
//
//    if (user.hasOwnProperty("name1")) {
//      resolve(user);
//    } else {
//      reject();
//    }
//  }, 2000);
//});
////===
//request
//  .then((user) => {
//    console.log(user);
//  })
//  .catch(() => console.log("Error"));
//
//
//
//  request
//  .then((user) => {
//    console.log(user);
//    user.city = "Kyiv";
//    return user;
//  })
//  .then((user) => {
//    console.log(user);
//    user.fullName = "Bla - bla";
//    console.log(user);
//  })
//  .catch(() => console.log("Error"));
//
//
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))

//fetch("https://api.github.com/users/kznkv-skillup")
//  .then((res) => res.json())
//  .then((data) => console.log(data));


let cityName = document.querySelector(".city");
let citytemp = document.querySelector(".temp");
let cityPressure = document.querySelector(".pressure");
let cityDescription = document.querySelector(".description");
let cityHumidity = document.querySelector(".humidity");
let citySpeed = document.querySelector(".speed");
let cityDeg = document.querySelector(".deg");
let img = document.querySelector(".icon");

function cityWeather() {
  let city = document.querySelector('input');
  console.log(city.value);

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then(res => res.json())
    .then(data => {
      let name = data.name;
      let temp = data.main.temp;
      let pressure = data.main.pressure;
      let description = data.weather[0].description;
      let humidity = data.main.humidity;
      let speed = data.wind.speed;
      let deg = data.wind.deg;
      let icon = data.weather[0].icon;
      
      img.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);

      cityName.textContent = name;
      citytemp.textContent = temp;
      cityPressure.textContent = pressure;
      cityDescription.textContent = description; 
      cityHumidity.textContent = humidity;
      citySpeed.textContent = speed;
      cityDeg.textContent = deg;
      
      console.log(name)
      console.log(data)
      console.log(temp)
      console.log(pressure) 
      console.log(description)
      console.log(humidity)
      console.log(speed)
      console.log(deg)
      console.log(icon)


  });

}




document.querySelector("button").addEventListener("click", cityWeather);