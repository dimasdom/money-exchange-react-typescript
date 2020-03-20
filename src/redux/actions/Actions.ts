import {actionType, ratesType} from "../reducers/exchangeReducer";

export const FETCH_EXCHANGE_RATE:string = "FETCH_EXCHANGE_RATE";
export const fetchExchangeAC = (exchange:ratesType):actionType =>({type:FETCH_EXCHANGE_RATE,payload:exchange})