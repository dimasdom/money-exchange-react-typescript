import React, {useEffect, useState} from 'react'
import style from "styled-components";
import canada from './svg/canada.svg'
import honkong from './svg/hong-kong.svg'
import iceland from './svg/iceland.svg'
import philippines from './svg/philippines.svg'
import denmark from './svg/denmark.svg'
import hungary from './svg/hungary.svg'
import czechrepublic from './svg/czech-republic.svg'
import australia from './svg/australia.svg'
import romania from './svg/romania.svg'
import sweden from './svg/sweden.svg'
import indonesia from './svg/indonesia.svg'
import india from  './svg/india.svg'
import brazil from './svg/brazil.svg'
import russia from './svg/russia.svg'
import croatia from './svg/croatia.svg'
import japan from './svg/japan.svg'
import usa from './svg/united-states-of-america.svg'
import china from './svg/china.svg'
import england from './svg/england.svg'
import israel from './svg/israel.svg'
import newzealand from './svg/new-zealand.svg'
import {connect} from "react-redux";
import {getRates} from "../getRates";
import {stateType} from "../redux/store";
import {fetchExchangeThunk} from "../redux/thunk/fetchExchange";
let StyledBlockWithGradientBackground = style.div`
height:${(props:{height:number|null|undefined})=>props.height}%;
animation: color-change-5x 20s linear infinite alternate both;
@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}

`;


let Main:React.FC = (props:any) => {
    const useFetching = (someFetchActionCreator:any) => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(props.fetchRates);
    let [currency,setcurrency] = useState("USD");
    let [count,setCount]=useState(1);
    let setCURRENCTY = (event:any)=>{
        setcurrency(event.target.value)
    }
    let SetCOUNT = (event:any)=>{
        setCount(event.target.value)
        console.log(currency)
    }
    return(
        <div>
        <StyledBlockWithGradientBackground height={65}>
            <div className="container">
<div className="row text-center pt-5 ">
    <div className="col-12 logo mt-5 "><h1 className="text-pop-up-top text-center text-white display-1">Exchange</h1></div>
    <div className="col-6 logo slide-in-fwd-right"><h1 className="display-2 text-white ">Powered By React</h1></div>
    <div className="col-6 slide-in-fwd-left "><img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" /></div>

</div>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-md-4 col-sm-12 bg-white rounded inputblock shadow scale-in-center">
                    <div className="input-group mt-3 mb-3 mb-lg-4 mt-lg-4 ">
                        <div className="input-group-prepend w-25">
                        <select className="custom-select border-0" onChange={setCURRENCTY} id="inputGroupSelect01">
                            <option value="USD">USD</option>
                            <option value="RUB">RUB</option>
                            <option value="GBP">GBP</option>
                            <option value="HKD">HKD</option>
                            <option value="ISK">ISK</option>
                            <option value="PHP">PHP</option>
                            <option value="DKK">DKK</option>
                            <option value="HUF">HUF</option>
                            <option value="CZK">CZK</option>
                            <option value="AUD">AUD</option>
                            <option value="RON">RON</option>
                            <option value="SEK">SEK</option>
                            <option value="IDR">IDR</option>
                            <option value="INR">INR</option>
                            <option value="BRL">BRL</option>
                            <option value="JPY">JPY</option>
                            <option value="ILS">ILS</option>
                            <option value="NZD">NZD</option>
                            <option value="HRK">HRK</option>
                            <option value="CAD">CAD</option>
                            <option value="CNY">CNY</option>
                        </select>
                        </div>
                        <input type="number" className="w-75 rounded border-0" value={count} onChange={SetCOUNT} />
                    </div>
                </div>
                <div className="col-4"></div>
            </div>


        </StyledBlockWithGradientBackground>
            {props.rates.CAD ?

            <div className="container slide-in-fwd-bottom text-center ml-auto mr-auto ">
                <div className="row ">
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                        <div className="col-5 mt-3 mb-3">
                        <img className="img-fluid" src={canada}/>
                        </div>
                        <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                            <p  >{((props.rates.CAD * 1/props.rates[currency])*count).toFixed(2)}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={honkong}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `}>
                                <p  >{((props.rates.HKD * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={iceland}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.ISK * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={philippines}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.PHP * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={denmark}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.DKK * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={hungary}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.HUF * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={czechrepublic}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.CZK * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={australia}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.AUD * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={romania}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.RON * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={sweden}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.SEK * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={indonesia}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.IDR * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={india}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.INR * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={brazil}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.BRL * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={russia}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.RUB * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={croatia}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.HRK * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={japan}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.JPY * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={usa}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.USD * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={china}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.CNY * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={england}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.GBP * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={israel}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.ILS * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 m-4 shadow">
                        <div className="row">
                            <div className="col-5 mt-3 mb-3">
                                <img className="img-fluid" src={newzealand}/>
                            </div>
                            <div className={`col-6  containerpop  mt-4 ${count>1 ? "many" : "display-4" } `  }>
                                <p  >{((props.rates.NZD * 1/props.rates[currency])*count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>:
                <div className="container text-center">
                        <div className="atom-spinner mt-4 ml-auto mr-auto">
                            <div className="spinner-inner">
                                <div className="spinner-line"></div>
                                <div className="spinner-line"></div>
                                <div className="spinner-line"></div>
                                <div className="spinner-circle">
                                    &#9679;
                                </div>
                            </div>
                        </div>
                </div>
                }
        </div>
    )
}

let MapStateToProps = (state:stateType):object=>({
  rates:getRates(state)
})
let mapDispatchToProps:object ={
    fetchRates:fetchExchangeThunk
}
export default connect(MapStateToProps,mapDispatchToProps)(Main)