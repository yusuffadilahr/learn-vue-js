import axios from "axios"

export const getDataNews = async (baseUrlApi: string, apiKey: string) => {
    const fetched = await axios.get(`${baseUrlApi}/top-headlines/sources?apiKey=${apiKey}`)
    return fetched
}