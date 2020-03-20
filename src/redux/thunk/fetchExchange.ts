import {fetchExchangeAC} from "../actions/Actions";
import {getExchangeAPI} from "../api/api";

export const fetchExchangeThunk =  () => async (dispatch:any)=>{
    let Exchange = await getExchangeAPI();
    dispatch(fetchExchangeAC(Exchange));
}