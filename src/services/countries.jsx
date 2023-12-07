import axios from "axios"

const baseUrl = ('https://studies.cs.helsinki.fi/restcountries/api/name')

const getCountry = async country => {
    const response = await axios.get(`${baseUrl}/${country}`)
    return response.data
}

export default { getCountry }