/**author:lijiamiao
 * createdOn:2017-09-08
 *右侧文字属性
 * */
import { connect } from 'react-redux';

import {getSelectstyleData} from "../selectors/indexs.jsx";
import {sethomedata} from "../Actions/homeAction";
import {getLoginData} from "../selectors/Loginselectors";
import Index from "../container/index/Index.jsx";

const mapStateToProps = (state) => {
    console.log("5645646546+",getLoginData(state))
    return {
        selectredu:getSelectstyleData(state).getHomeList,//默认数据
        isAuthenticated:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("879+++999")
    return {
         // onwordfontorder:fontOr=> {dispatch(sethomedata(fontOr))},
    }
}

const IndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

export default IndexContainer
