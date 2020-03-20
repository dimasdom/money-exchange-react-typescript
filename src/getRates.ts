import {ratesType} from "./redux/reducers/exchangeReducer";
import {stateType} from "./redux/store";

export const getRates = (state:stateType):ratesType=>{
    return state.Exchange.rates
};