const axios = require('axios')

const key = "AIzaSyCgm_yK9lKnQTOXVEGxRY3Au3iiXQ89vn8"
const intiLocation ="13.8939882,100.514098"
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getPlaceGoogleService = payload => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${intiLocation}&radius=2000&keyword=${payload}&key=${key}`

    return axios.get(proxyurl+apiUrl)
                    .then(response => {return response.data})
                    .catch((e) => console.log(e))

}

export const getPhotoPlaceGoogleService = payload => {
  return  `https://maps.googleapis.com/maps/api/place/photo?photoreference=${payload}&sensor=false&maxheight=500&maxwidth=500&key=${key}`
  // return axios.get(proxyurl+apiUrl)
  //                 .then(response => {return response.data})
  //                 .catch((e) => console.log(e))

}
