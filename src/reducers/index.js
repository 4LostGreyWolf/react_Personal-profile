import {combineReducers} from 'redux';
import {  getHomeList} from "./indexreducers/homereducers";
import {getlogindata} from "./indexreducers/loginreducers";


const imEditer = combineReducers({
    getHomeList,
    // getHomedata,
    getlogindata
});
export default imEditer;