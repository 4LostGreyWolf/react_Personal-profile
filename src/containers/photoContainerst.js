/**author:lijiamiao
 * createdOn:2017-09-08
 *右侧文字属性
 * */
import { connect } from 'react-redux';

import {getLoginData} from "../selectors/Loginselectors";
import Photo from "../container/photo/photo";
import {setLogin} from "../Actions/loginAction";

const mapStateToProps = (state) => {
    console.log("5645646546+",getLoginData(state))
    return {

        // isAuthenticated:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userHasAuthenticated:fontOr=> {dispatch(setLogin(fontOr))},
    }
}

const PhotoAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Photo);

export default PhotoAttrContainer
