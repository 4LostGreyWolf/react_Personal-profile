/**author:lijiamiao
 * createdOn:2017-09-08
 *右侧文字属性
 * */
import { connect } from 'react-redux';
import Home from "../container/Home";
import {getSelectstyleData} from "../selectors/indexs.jsx";
import {sethomedata,sethomedata_d,pagesindex} from "../Actions/homeAction";
import {getLoginData} from "../selectors/Loginselectors";

const mapStateToProps = (state) => {
    console.log("5645646546+",getSelectstyleData(state))
    return {
        selectredu:getSelectstyleData(state).getHomeList,//默认数据
        isAuthenticated:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
         onwordfontorder:fontOr=> {dispatch(sethomedata(fontOr))},
         onwordfontorder_d:fontOr=> {dispatch(sethomedata_d(fontOr))},
        pagesindex:fontOr=> {dispatch(pagesindex(fontOr))},
    }
}

const HomeWordAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeWordAttrContainer
