export default async function fetchGeocodes() {
  const url = 'https://api.sheety.co/67fbe6e80e506f3de070d95501d122ea/geocodeMunicipiosBrasil/dtb2018Municipio'
  
  const response = await fetch(url)
  const data = await response.json()
  
  //retorna um array de objetos
  return data.dtb2018Municipio
}