
import {SET_LOGIN} from "../../Actions/loginAction";



export function getlogindata(state = [],action) {
    switch (action.type)
    {
        case SET_LOGIN:
        {
            console.log("参数过来了login",action)
            return  action.data

        }
        default :return state
    }
}

