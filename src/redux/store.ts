import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {ExchangeReducer, initialStateType} from "./reducers/exchangeReducer";
export interface stateType {
    Exchange:initialStateType
}
export let state = createStore(
    combineReducers({
        Exchange:ExchangeReducer
    }),applyMiddleware(thunk)
)