
import {call,put,takeLatest,select,all} from 'redux-saga/effects';

// import  ajax from "ROOT_PATH/js/saga/ajax/PostrqeqAjax"
//
//
// import ajaxpar from "ROOT_PATH/js/saga/ajax/getparAjax"
  import  {axios_get} from "../axios/axios_get";
// import {getHomedata} from "../selectors";
// import {setLogin} from "../../Actions/loginAction";

// import {gethomelistdata} from "../../Actions/homeAction";

function* ajaxjumpss() {
    // let downloadroot = yield select(getHomedata);
    console.log("//---------------------********")
      let downloadroot =  yield axios_get("http://60.174.226.164:21531/api/Location/GetLocationList").then(res=>{
          console.log(res)
      })
     // console.log("//---------------------********",downloadroot)
    // yield put(setLogin(""));
}

export function * confirmAsync() {
    console.log("dfgr6tuty")
    yield takeLatest("HOME_OPEN_LIST_DATA_huk",ajaxjumpss);

}


