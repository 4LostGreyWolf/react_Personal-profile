import $ from "jquery"
import "whatwg-fetch"
import {out} from "ROOT_PATH/js/components/singleTool/Modal";

var getJSON = function(url,data) {

    var promise = new Promise(function(resolve, reject){

        $.ajax({
            url: url,
            dataType:"JSON",
            timeout : 30000,
            type:'GET',
            data:data,
            success:function (data) {
                $(".loaging").fadeOut(1000)
                resolve(data);
            },
            complete:function (XMLHttpRequest,status) {
                if(status==='timeout'){//超时,status还有success,error等值的情况
                    $(".loaging").fadeOut(1000)
                    out("超时");
                }
            },
            error:function (errorThrown,textStatus,err) {
                console.log("服务器连接失败",errorThrown);
                if (textStatus==="error"){
                    out("服务器连接失败")
                }
                if (errorThrown.status===500){
                    $(".loaging").fadeOut(1000)
                    out("服务器连接失败")
                }
                console.log("textStatus",textStatus);


                if (!err.status ===200)
                { $(".loaging").fadeOut(1000)
                    reject("解析错误");

                }
            }
        })
    });
    return promise;
};
module.exports = getJSON;
export function ajaxpar(Url,data) {
    getJSON(Url,data).then(function(json) {

        return json;

    }).catch(function (error) {
        return error;
    });

}
