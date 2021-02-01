import { URLs } from './utils.js'
import fetchGeocodes from './fetchGeocodes.js'
import getWeatherData from './getWeatherData.js'

const { geocodeURL, weatherURL } = URLs()

export default async function search() {
  const searchInput = document.getElementById('search').value

  const response = await fetchGeocodes()
  let geocode = await response.filter(item => item.nomeMunicípio === searchInput)
  geocode = geocode[0].códigoMunicípioCompleto
  const weatherData = await getWeatherData({ geocode })

  return weatherData 
}