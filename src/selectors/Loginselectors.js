/**author:lijiamiao
 * createdOn:2017-08-30
 * 添加风格
 * */

//添加风格
// selectstyle,
// showStyleReducer,
import { createSelector } from 'reselect';


const getSelectstyle = (state) => state.getlogindata;

export const getLoginData = createSelector(
    getSelectstyle,
    //reducer里组件对应的方法
    (getlogindata) => {

        return {
            getlogindata
        }
    }
);
