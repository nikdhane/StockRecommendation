import { FETCH_SEARCHSTOCK,FETCH_SEARCHSTOCK_RECOMMENDATION,FETCH_SEARCHSTOCK_REQUEST,FETCH_SEARCHSTOCK_ERROR ,FETCH_SEARCHSTOCK_SELECTEDSTOCK} from "./ActionType"
const initialState = {
    allStocks :[],
    selectedStock :[],
    loading :false,
    error :''
}

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCHSTOCK_REQUEST:
            return {
                ...state,
                loading :true
            }
            case FETCH_SEARCHSTOCK_ERROR:
            return {
                ...state,
                loading : false,
                error: action.payload
            }
        case FETCH_SEARCHSTOCK:
            return {
                ...state,
                loading : false,
                allStocks: action.payload,
                error :''
            }
            case FETCH_SEARCHSTOCK_SELECTEDSTOCK:
            return {
                ...state,
                loading : false,
                selectedStock: action.payload,
                error :''
            }
        case FETCH_SEARCHSTOCK_RECOMMENDATION:
            return {
                ...state,
                loading : false,
                selectedStock: action.payload,
                error :''
            }
        default:
            return state
    }
}
