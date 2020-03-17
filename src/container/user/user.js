import React,{Component} from "react"
import "./user.scss"
import {Button} from "antd";
const   user =require("../../lib/img/uaer.jpg")

export default class User extends Component{
    constructor(props) {
        super(props);

    this.state ={
        pdfContent:"http://203.195.177.101/state/word/resume.pdf",
       //  pdfContent:"https://jxapi.wecial.com/api/MasterFile/GetStiReportspget?spdatas=master&sp0=676197459&detecttid=FP191220000011&cid=S1&classid=1",
        isshow:false
    }
        }
    pdfplay(){
    this.setState({
        isshow:!this.state.isshow
    })

    }

    render() {
        console.log(this.state)
    return  <div className="user">
        <img className="user_img" src={user} width="100px" height="100px" alt="暂无图片"/>
                    <h1>李进辉</h1>
            <ul className="user_ul">
                <li><p>年龄：</p><span>25</span></li>
                <li><p>籍贯：</p><span>邯郸</span></li>
                <li><p>技能：</p><span>web前端开发</span></li>
                <li><p>学历：</p><span>大专（第一学历）、本科（第二学历）</span></li>
                <li><p>简历：</p><span > <Button onClick={event => this.pdfplay(event)}>查看</Button></span></li>
                <li><p>介绍：</p><span > 我来自河北邯郸,喜欢骑行、散步、旅游。喜欢尝试没有接触过的东西.专业技能擅长界面制作,可单独完成整站制作,页面布局规划.对工作认真负责,工作效率高.既有良好团队协作精神,也可独立完成任务.可适应加班出差个性开朗容易相处团队荣誉感强。</span></li>


            </ul>

        {
            this.state.isshow? <div  className="user_pdf"  >
               <div className="user_pdf_title" onClick={event => this.pdfplay(event)} >x</div>
                <object data={this.state.pdfContent}
                        type="application/pdf"
                        width="102%"
                        height="100%"
                        standby="pdf文档加载中..."
                >
                    This browser does not support PDFs.
                </object>
            </div>:null
        }
    </div>





    }
}