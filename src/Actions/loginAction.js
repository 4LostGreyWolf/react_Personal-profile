export const SET_LOGIN="SET_LOGIN";
export const SET_LOGIN_to="SET_LOGIN";
export function setLogin(data){
    console.log("参数拿到了login",data)
    return{type:SET_LOGIN,data}
}
