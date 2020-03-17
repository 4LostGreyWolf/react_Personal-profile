
 
  // import {styleAsync} from "ROOT_PATH/js/saga/text/text"
 
import {confirmAsync} from "./sagaAsync/homeSaga";
  import {all} from 'redux-saga/effects'
  export default function* rootSaga() {
    yield all([
         // styleAsync(), //风格选择
        confirmAsync()
    ])
}
