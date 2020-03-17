

export const imggul = [
    [

        "https://img.zcool.cn/community/01611a59375ab5a8012193a3b745a6.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01f83259375ab3a8012193a397f0e8.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01590159375ab5a8012193a3a70797.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01893b59375ab3a8012193a33e33ac.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01006559375ab4a8012193a339daf0.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01d64d59375ab4a8012193a364197a.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01298759375ab3a8012193a3591163.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01854a59375ab3a8012193a30abbdd.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/01dff659375ab3a8012193a3a790b1.jpg@1280w_1l_2o_100sh.jpg",

    ],
    [
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/cbacd876766d2b25670988d70582fac3.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/5a2924a2cba420ee4fe2e13262031ed8.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/9b82837161b01ad05d93f15dd58952d8.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/fcc2029b25bd039b85fadc7149956ee7.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/5ca872d9d0263694354c7ee8d8110dff.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/b3256854f0df9c90e3e3bf5e99ad6978.jpg',
        'http://c2.biketo.com/d/file/tour/life/2016-03-11/570bf2ccc0238a56234616e898fbc709.jpg',
    ],[

        require("../lib/img/G0018057.JPG"),
        require("../lib/img/G0018056.JPG")
    ]
]


export function  cookie(str, text,key){
    // 'Contentshow'
        switch (str) {
            case "get":{
                let arr,reg=new RegExp("(^| )"+ key+"=([^;]*)(;|$)");

                if(arr=document.cookie.match(reg)){



                    return  {
                        data:parseInt(unescape(arr[2])),
                        show:true
                    }

                }
                else{


                    return  {
                        data:"",
                        show:false
                    }

                }

            }break;
            case "put":{
                let Days = 3;  //cookie保存时间
                let exp = new Date();
                exp.setTime(exp.getTime() + Days*24*60*60*1000);
                document.cookie = key + "="+ escape (text) + ";expires=" + exp.toDateString();

            }
        }
}