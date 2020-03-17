/**author:lijiamiao
 * createdOn:2017-09-08
 *右侧文字属性
 * */
import { connect } from 'react-redux';


import {sethomedata} from "../Actions/homeAction";
import {getLoginData} from "../selectors/Loginselectors";
import Photos from "../container/photos/photos";
import {getSelectstyleData} from "../selectors/indexs";

const mapStateToProps = (state) => {
    console.log("5645646546+",getLoginData(state))
    return {
        selectredudddd:getSelectstyleData(state).getHomedata,
        isAuthenticated:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // onwordfontorder:fontOr=> {dispatch(sethomedata(fontOr))},
    }
}

const PhotosAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos);

export default PhotosAttrContainer
