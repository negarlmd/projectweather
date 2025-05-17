let citesData = {
  tehran: {
    city: "tehran",
    temp: 12,
    wether: "suny",
    humidity: 23,
    wanspeed: 30,
  },
  shiraz: {
    city: "shiraz",
    temp: 12,
    wether: "suny",
    humidity: 23,
    wanspeed: 30,
  },
  tabriz: {
    city: "tabriz",
    temp: 12,
    wether: "suny",
    humidity: 23,
    wanspeed: 30,
  },
};
let searchBtn = document.getElementById("search");
let searchBar = document.querySelector(".search-bar");
searchBtn.addEventListener("click", () => {
  let searchBarvalue = searchBar.value;
  let maincitiData = citesData[searchBarvalue];
  if (maincitiData) {
    document.querySelector(".city").innerHTML =
      "wether in " + maincitiData.city;
    document.querySelector(".temp").innerHTML = maincitiData.temp + "°C";
    document.querySelector(".description").innerHTML = maincitiData.wether;
    document.querySelector(".humidity").innerHTML =
      "humidity" + maincitiData.humidity;
    document.querySelector(".wind").innerHTML =
      "win" + maincitiData.windspeed + "km-h";
 document.querySelector(".weather").classList.remove("loading")
  } else {
    alert("شهر موردنظر را بدرستی وارد نمایید");
  }
});
