import {HOME_OPEN_LIST_RES,PAGES_INDEX,HOME_OPEN_LIST_DATA} from "../../Actions/homeAction";

let ste =[{
    index:"0"
}]
export function getHomeList(state=ste,action) {
    switch (action.type)
    {

        case HOME_OPEN_LIST_RES:
        {
            console.log("数据回来",state)
            return[
                ...state,
                {
                    data:action.data
                }
            ]
        }break;
        case PAGES_INDEX:{
            return [...state,{
                index:action.data
            }]
        }break;

        default :return state
    }
}

// export function getHomedata(state = ste,action) {
//     switch (action.type)
//     {
//
//         case HOME_OPEN_LIST_DATA:
//         {
//             console.log("参数过来了",action)
//             return[
//                  ...state,
//                 {
//                     data:action.data
//                 }
//             ]
//         }
//         default :return state
//     }
// }

