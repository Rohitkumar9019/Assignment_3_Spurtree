const temp = async () => {
  let Country = document.getElementById("demo").value;
  const apiURL =
    "http://api.weatherstack.com/current?access_key=d18df8978d1b8686bca250b8c1daf217&query=" +
    Country;
  const res = await axios.get(apiURL);
  console.log(res.data);

  const sentence =
    "Todays weather in " +
    Country +
    " is " +
    res.data.current.weather_descriptions[0] +
    " With temerature being " +
    res.data.current.temperature +
    " degree celsius reported at " +
    res.data.current.observation_time +
    ".";
  document.getElementById("demo3").style["display"] = "block";
  document.getElementById("demo2").innerHTML = sentence;
};

function jsDsp() {
  temp();
}
