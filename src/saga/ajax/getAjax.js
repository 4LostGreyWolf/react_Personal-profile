import $ from "jquery"
import "whatwg-fetch"


var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject){
        $.ajax({
            url: url,
            dataType:"JSON",
            timeout : 3000,
            type:'GET',
            success:function (data) {
                $(".loaging").fadeOut(1000)
                resolve(data);
            },
            complete:function (XMLHttpRequest,status) {
                if(status==='timeout'){//超时,status还有success,error等值的情况
                    // this.abort();
                    $(".loaging").fadeOut(1000)
                    // out("超时");
                }
            },
            error:function (errorThrown,textStatus,err) {
                console.log("服务器连接失败",errorThrown);
                $(".loaging").fadeOut(1000)
                if (errorThrown.status===500){
                    // out("服务器连接失败");
                }
                // console.log("error",errorThrown);
                // console.log("textStatus",textStatus);
                // console.log("err",err)

                if (!err.status ===200)
                {
                    reject("解析错误");
                    // out("error");

                }
            }
        })
    });
    return promise;
};
  module.exports = getJSON;
export function ajax(Url) {
    getJSON(Url).then(function(json) {

        return json;

    }).catch(function (error) {
        return error;
    });

}
