import { combineReducers } from "redux"
import AuthReducer from "./auth"
import DataReducer from "./data"

const AllReducers = combineReducers({
    AuthReducer,
    DataReducer,
})

export default AllReducers