import axios from './axios';
import requests from "./requests";
import {setDataByCountry,setPredictions} from "../actions/actions";

/**
 * @description fetch a list of countries
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function fetchCountries(){
     const request = axios.get(requests.fetchCountries);
     return request;
}

/**
 * @description fetch a status by the selected country
 * @param country
 * @returns {function(...[*]=)}
 */
export function fetchStatusByCountry(country) {
    return dispatch =>{
        const request = axios.get(requests.fetchStatusByCountry+country);
        request.then(request=>dispatch(setDataByCountry([request.data])));
    }

}

/**
 * fetch the status of all countries
 * @returns {function(...[*]=)}
 */
export function fetchStatusByAll() {
    return dispatch =>{
        const request = axios.get(requests.fetchStatusByCountry);
        request.then(request=>dispatch(setDataByCountry(request.data)));
    }

}

/**
 * @description fetch the preduction for the next 14 days by the selected country
 * @param country
 * @returns {function(...[*]=)}
 */
export function fetchPredictionByCountry(country){
    return dispatch =>{
        const request = axios.get(requests.fetPredictionByCountry+country);
        request.then(request=>dispatch(setPredictions(request.data))).catch((error=>dispatch(setPredictions([]))));
    }

}
