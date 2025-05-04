import axios from "axios"

const baseUrlLocal = import.meta.env.VITE_BASE_URL_LOCAL

export const getDataNews = async (baseUrlApi: string, apiKey: string) => {
    const fetched = await axios.get(`${baseUrlApi}/top-headlines/sources?apiKey=${apiKey}`)
    return fetched
}

export const authRegister = async (data: any) => {
    const postedData = await axios.post(`${baseUrlLocal}/api/user/auth-register`, data)
    return postedData
}