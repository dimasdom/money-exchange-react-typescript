import {FETCH_EXCHANGE_RATE} from "../actions/Actions";

export interface actionType{
    type:string
    payload:ratesType
}
export interface ratesType{
    CAD:  number | null
    HKD:  number | null
    ISK:  number | null
    PHP:  number | null
    DKK:  number | null
    HUF:  number | null
    CZK:  number | null
    AUD:  number | null
    RON:  number | null
    SEK:  number | null
    IDR:  number | null
    INR:  number | null
    BRL:  number | null
    RUB:  number | null
    HRK:  number | null
    JPY:  number | null
    THB:  number | null
    CHF:  number | null
    SGD:  number | null
    PLN:  number | null
    BGN:  number | null
    TRY:  number | null
    CNY:  number | null
    NOK:  number | null
    NZD:  number | null
    ZAR:  number | null
    USD:  number | null
    MXN:  number | null
    ILS:  number | null
    GBP:  number | null
    KRW:  number | null
    MYR:  number | null
}
export interface initialStateType{
rates:ratesType
}
let initialState:initialStateType = {
    rates:{
        CAD:   null,
        HKD:   null,
        ISK:   null,
        PHP:   null,
        DKK:   null,
        HUF:   null,
        CZK:   null,
        AUD:   null,
        RON:   null,
        SEK:   null,
        IDR:   null,
        INR:   null,
        BRL:   null,
        RUB:   null,
        HRK:   null,
        JPY:   null,
        THB:   null,
        CHF:   null,
        SGD:   null,
        PLN:   null,
        BGN:   null,
        TRY:   null,
        CNY:   null,
        NOK:   null,
        NZD:   null,
        ZAR:   null,
        USD:   null,
        MXN:   null,
        ILS:   null,
        GBP:   null,
        KRW:   null,
        MYR:   null,
    }
}
export let ExchangeReducer = (state:initialStateType = initialState,action:actionType):initialStateType =>{
    switch (action.type) {
        case FETCH_EXCHANGE_RATE :{
            return{
                rates:{
                    CAD:   action.payload.CAD,
                    HKD:   action.payload.HKD,
                    ISK:   action.payload.ISK,
                    PHP:   action.payload.PHP,
                    DKK:   action.payload.DKK,
                    HUF:   action.payload.HUF,
                    CZK:   action.payload.CZK,
                    AUD:   action.payload.AUD,
                    RON:   action.payload.RON,
                    SEK:   action.payload.SEK,
                    IDR:   action.payload.IDR,
                    INR:   action.payload.INR,
                    BRL:   action.payload.BRL,
                    RUB:   action.payload.RUB,
                    HRK:   action.payload.HRK,
                    JPY:   action.payload.JPY,
                    THB:   action.payload.THB,
                    CHF:   action.payload.CHF,
                    SGD:   action.payload.SGD,
                    PLN:   action.payload.PLN,
                    BGN:   action.payload.BGN,
                    TRY:   action.payload.TRY,
                    CNY:   action.payload.CNY,
                    NOK:   action.payload.NOK,
                    NZD:   action.payload.NZD,
                    ZAR:   action.payload.ZAR,
                    USD:   action.payload.USD,
                    MXN:   action.payload.MXN,
                    ILS:   action.payload.ILS,
                    GBP:   action.payload.GBP,
                    KRW:   action.payload.KRW,
                    MYR:   action.payload.MYR,
                }
            }
        }
        default : return state
    }
}