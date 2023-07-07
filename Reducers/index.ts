import { combineReducers } from "redux";
import noteReducer from "./noteReducers";



const reducers = combineReducers({
  vacation: noteReducer,
});

export default reducers;