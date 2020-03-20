import  axios from 'axios'


export const getExchangeAPI = ():Promise<any> =>{
    return axios.get("https://api.exchangeratesapi.io/latest?base=USD").then(response =>{return response.data.rates})
}