/**author:lijiamiao
 * createdOn:2017-09-08
 *右侧文字属性
 * */
import { connect } from 'react-redux';
import Login from "../container/Login";
import {setLogin} from "../Actions/loginAction";
import {getSelectstyleData} from "../selectors/indexs.jsx";
import {getLoginData} from "../selectors/Loginselectors";





// import {saveGetRedis} from "ROOT_PATH/js/Actions/index";

// import {getSelectstyleData} from  'ROOT_PATH/js/selectors/indexs.jsx'

const mapStateToProps = (state) => {

    return {
         // selectredudddd:getSelectstyleData(state).getHomedata,
        // getHomeList:getSelectstyleData(state).getHomeList,//默认数据
         selectredu:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
          userHasAuthenticated:fontOr=> {dispatch(setLogin(fontOr))},
    }
}

const LoginAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginAttrContainer
