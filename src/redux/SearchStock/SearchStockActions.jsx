import { FETCH_SEARCHSTOCK, FETCH_SEARCHSTOCK_RECOMMENDATION, FETCH_SEARCHSTOCK_REQUEST, FETCH_SEARCHSTOCK_ERROR,FETCH_SEARCHSTOCK_SELECTEDSTOCK } from "./ActionType";
import { API_KEY_ALLSTOCKS,TOKEN_KEY ,API_KEY_SELECTEDSTOCKS} from "./constants";
import axios from "axios";
export const seacrhStock = (type,action) => {
    switch (type) {
        case FETCH_SEARCHSTOCK_REQUEST:
            return {
                type: FETCH_SEARCHSTOCK_REQUEST
            }
        case FETCH_SEARCHSTOCK_ERROR:
            return {
                type: FETCH_SEARCHSTOCK_ERROR,
                payload :action
            }
        case FETCH_SEARCHSTOCK_RECOMMENDATION:
            return {
                type: FETCH_SEARCHSTOCK_RECOMMENDATION,
                payload: action
            }
        case FETCH_SEARCHSTOCK:
            return {
                type: FETCH_SEARCHSTOCK,
                payload: action
            }
        case FETCH_SEARCHSTOCK_SELECTEDSTOCK :
             return {
                type: FETCH_SEARCHSTOCK_SELECTEDSTOCK,
                payload: action
            }
        default: return { type: null }
    }

}

export const searchStockRequest = (search) => {
    return (dispatch)=>{
            dispatch(seacrhStock(FETCH_SEARCHSTOCK_REQUEST));
              const API_KEY=API_KEY_ALLSTOCKS+search+'&token='+TOKEN_KEY;
             axios.get(API_KEY)
             .then(response => {
                let data=response.data;
                data.allStocks=response.data?.result;
                dispatch(seacrhStock(FETCH_SEARCHSTOCK,data.allStocks));
             }).catch(error => {
                dispatch(seacrhStock(FETCH_SEARCHSTOCK_ERROR,error.message));
             })
          };
    }

    export const fetchSelectedStockData = (selectedStock) => {
        return (dispatch)=>{
                  const API_KEY=API_KEY_SELECTEDSTOCKS+selectedStock+'&token='+TOKEN_KEY;
                 axios.get(API_KEY)
                 .then(response => {
                    let data=response.data;
                    let i=1;
                    for(let object of data)
                    {
                      object.id=i;
                      i++;
                    }
                    dispatch(seacrhStock(FETCH_SEARCHSTOCK_SELECTEDSTOCK,data));
                 }).catch(error => {
                    dispatch(seacrhStock(FETCH_SEARCHSTOCK_ERROR,error.message));
                 })
              };
        }