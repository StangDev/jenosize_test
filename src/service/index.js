const axios = require('axios')

const key = "AIzaSyCgm_yK9lKnQTOXVEGxRY3Au3iiXQ89vn8"
const fields = "photos,formatted_address,name,rating,opening_hours,geometry"
const inputtype = "textquery"
const region ="th"
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getPlaceGoogleService = (payload) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${payload}@13.8939882,100.514098,17z&inputtype=${inputtype}&fields=${fields}&language=${region}&region=${region}&key=${key}`
    return axios.get(proxyurl+apiUrl)
                  .then(response => {return response.data})
                    .catch((e) => console.log(e))
}

export const getTestService = () => {
  const apiUrl = `https://api.norsuwan.dev/api/foodShop`
  return axios.get(proxyurl+apiUrl)
                .then(response => {return response.data})
                  .catch((e) => console.log(e))
}

