export const HOME_OPEN_LIST_DATA="HOME_OPEN_LIST_DATA";
export const HOME_OPEN_LIST_DATA_huk="HOME_OPEN_LIST_DATA_huk";
export const PAGES_INDEX="PAGES_INDEX";
export const HOME_OPEN_LIST_RES="HOME_OPEN_LIST_RES";
export function sethomedata(data){
        console.log("参数拿到了home",data)
    return{type:HOME_OPEN_LIST_DATA,data}
}
export function sethomedata_d(data){
        console.log("参数 ",data)
    return{type:HOME_OPEN_LIST_DATA_huk,data}
}
export function pagesindex(data){
    console.log("参数 ",data)
    return{type:PAGES_INDEX,data}
}
export function gethomelistdata(data){
    console.log("数据回来",data)
    return{type:HOME_OPEN_LIST_RES,data}
}