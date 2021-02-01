export default async function getWeatherData({ geocode }) {
  let url = 'https://apiprevmet3.inmet.gov.br/previsao/<geocode>'
  url = url.replace('<geocode>', geocode)
  
  const response = await fetch(url)
  const data = await response.json()
  
  return data[geocode]
}