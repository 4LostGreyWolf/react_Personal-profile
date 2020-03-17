import $ from "jquery"

var postJSON = function(url,data) {
    var promise = new Promise(function(resolve, reject){

        $.ajax({
            url: url,
            dataType:"JSON",
            data:data,
            type:'POST',
            success:function (data) {
                $(".loaging").fadeOut(1000)
                resolve(data);
            },
            error:function (errorThrown,textStatus,err) {
                $(".loaging").fadeOut(1000)
                console.log("服务器连接失败",errorThrown);
                if (errorThrown.status===500){
                    $(".loaging").fadeOut(1000)
                    /**/
                    $('.modal').fadeIn(800);
                    $('.modal-tips').html("服务器连接失败");
                }
                if (!err.status ===200)
                { $(".loaging").fadeOut(1000)
                    reject(err);
                }
            }
        })
    });
    return promise;
};
module.exports = postJSON;
export function ajax(Url,data) {
    postJSON(Url,data).then(function(json) {
        return json;
    }).catch(function (error) {
        return error;
    });
}
export function ajaxp(Url,data) {
    postJSON(Url,data).then(function(json) {
        return json;
    }).catch(function (error) {
        return error;
    });
}
