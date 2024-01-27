import { combineReducers } from "redux";
import { stockReducer } from "./SearchStock/SearchStockReducer";

const rootReducer = combineReducers({
    stockReducer :stockReducer
})

export default rootReducer;