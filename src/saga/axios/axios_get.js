import axios from "axios";

export  function axios_get (url,headers,params) {
    const promise = new Promise(function (resolve, reject) {

        axios.get(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin":"*"
            }//般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies
//是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回

        }).then(res=>{
            resolve(res);
        }).catch(res=>{
            console.log(res)
        })

    });
    return promise;
}


