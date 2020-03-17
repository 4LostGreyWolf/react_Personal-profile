import $ from "jquery"
// import {out} from "ROOT_PATH/js/components/singleTool/Modal";
import axios from 'axios'

var postJSON = function(url,data) {
    var promise = new Promise(function(resolve, reject){
        // axios.post(url,data,{
        //     RequestVerificationToken:"Admin~20108",
        //     'Content-Type':"application/x-www-form-urlencoded"
        // }).then(function (data) {
        //     console.log("55+++++++",data)
        //     resolve(data);
        // }).catch(function (err) {
        //     console.log(err)
        //     reject(err);
        // })
        // $.ajax({
        //     url: url,
        //     dataType:"JSON",
        //     data:data,
        //     headers: {
        //         RequestVerificationToken:"Admin~20108",
        //         'Content-Type':"application/x-www-form-urlencoded"
        //     },
        //     type:'POST',
        //     success:function (data) {
        //         $(".loaging").fadeOut(1000)
        //         $(".coverred").hide();
        //         resolve(data);
        //     },
        //     error:function (errorThrown,textStatus,err) {
        //         $(".loaging").fadeOut(1000)
        //         console.log("服务器连接失败",errorThrown);
        //         if (errorThrown.status===500){
        //             $(".loaging").fadeOut(1000)
        //             out("服务器连接失败")
        //         }
        //         if (!err.status ===200)
        //         { $(".loaging").fadeOut(1000)
        //             reject(err);
        //         }
        //     }
        // })
    });
    return promise;
};
module.exports = postJSON;
export default function ajaxPost(Url,data) {
    postJSON(Url,data).then(function(json) {
        return json;
    }).catch(function (error) {
        return error;
    });
}
