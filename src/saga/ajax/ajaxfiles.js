import $ from "jquery"
import "whatwg-fetch"
import {JSEncrypt} from "ROOT_PATH/lib/jsencrypt"
import {out} from "ROOT_PATH/js/components/singleTool/Modal";
var getJSON = function(url,password) {
    var promise = new Promise(function(resolve, reject){
        $.ajax({
            url: url,
            dataType: 'text',
            timeout : 3000,
            success:function (data) {
                  console.log("1111111111111111")
                let encrypt = new JSEncrypt();
                encrypt.setPublicKey(data);//设置公有key
                let text = password;
                let datas = encrypt.encrypt(text);
                resolve(datas);
            },
            complete:function (XMLHttpRequest,status) {
                if(status==='timeout'){
                    $(".loaging").fadeOut(1000)
                    out("超时,您的网速较慢");
                }
            },
            error:function (errorThrown,textStatus,err) {
                console.log("服务器连接失败",errorThrown);
                if (errorThrown.status===500){
                    out("服务器连接失败")
                }
                if (!err.status===200)
                {
                    reject("解析错误");
                    out("error")
                }
            }
        })
    });
    return promise;
};
module.exports = getJSON;
export function ajaxfiles(Url,password) {
    getJSON(Url,password).then(function(json) {

        return json;

    }).catch(function (error) {

        return error;
    });

}
