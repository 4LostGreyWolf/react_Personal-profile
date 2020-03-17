import $ from "jquery"
import {out} from "ROOT_PATH/js/components/singleTool/Modal";

var postJSON = function(url,data) {
    var promise = new Promise(function(resolve, reject){

        $.ajax({
            url: url,
            dataType:"JSON",
            data:data,
            type:'POST',
            cache: false,
            contentType:false,
            processData: false,
            success:function (data) {
                $(".loaging").fadeOut(1000)

                resolve(data);
            },
            error:function (errorThrown,textStatus,err) {
                console.log("服务器连接失败",errorThrown);
                if (errorThrown.status===500){
                    out("服务器连接失败")
                    $(".loaging").fadeOut(1000)
                }
                if (!err.status ===200)
                {
                    reject(err);
                }
            }
        })
    });
    return promise;
};
module.exports = postJSON;
export default function ajaxup(Url,data) {
    postJSON(Url,data).then(function(json) {
        return json;
    }).catch(function (error) {
        return error;
    });
}
