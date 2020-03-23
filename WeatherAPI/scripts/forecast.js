const key = "B5nnJAfmOjsELtnYZV2EtcHUjRLXBpFB";
//GetWeather
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const respone = await fetch(base + query);
  const data = await respone.json();
  return data[0];
};

// GetCity
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("lucknow").then(data => {
  return getWeather(data.Key).then(data => {
    console.log(data.WeatherText);
  });
});
