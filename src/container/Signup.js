import React, {Component} from "react";


import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import {Auth} from "aws-amplify";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";
import Demo from "./demo/demo";
import Demoe from "./demo/demot";
import Zmage from 'react-zmage'
import PicDetailsDemo from "./involved/involved";
let imgurl = require("../lib/img/egg.png")
let td = require("../lib/img/td.png")



export  default class  Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            router:null,
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null,
            arradmin: this.arrchonzghi(),
            adminindex: 0,
            paused: false,
            reverse: true,
            moment: null,
            paused1: false,
            reverse1: true,
            moment1: null,
        };


    }

    arrchonzghi() {
        let arr = []
        for (let i = 0; i < 4; i++) {

            arr.push({
                moment: null,
                paused: false,
                reverse: true,
            })
        }
        return arr
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});
        //
        // try {
        //     const newUser = await Auth.signUp({
        //         username: this.state.email,
        //         password: this.state.password
        //     });
        //     this.setState({
        //         newUser
        //     });
        // } catch (e) {
        //     alert(e.message);
        // }
        //
        // this.setState({isLoading: false});
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true,
        });

        try {
            await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
            await Auth.signIn(this.state.email, this.state.password);

            this.props.userHasAuthenticated(true);
            this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            this.setState({isLoading: false});
        }
    }

    renderConfirmationForm() {
        return (
            <form onSubmit={this.handleConfirmationSubmit}>

                <LoaderButton
                    block
                    bsSize="large"
                    // disabled={!this.validateConfirmationForm()}
                    disabled={false}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Verify"
                    loadingText="Verifying…"
                />

            </form>
        );
    }

    MouserOver(e, index) {
        e.stopPropagation()

        switch (index) {
            case 1: {
                this.setState({

                    paused: false,
                    reverse: false,
                    moment: null,
                });
            }
                break;
            case 0: {
                this.setState({
                    paused: false,
                    reverse: true,
                    moment: null,
                    paused1: false,
                    reverse1: false,
                    moment1: null,
                });
            }
                break;

        }

    }

    MouseOut(e, index) {

        e.stopPropagation()
        switch (index) {
            case 1: {
                this.setState({
                    paused: false,
                    reverse: true,
                    moment: null,
                });
            }
                break;
            case 0: {
                this.setState({
                    paused1: false,
                    reverse1: true,
                    moment1: null,
                });
            }
                break;

        }


    }


    click(index){
        switch (index){
            case 0:{
                console.log(this.props)

                this.props.history.push("/involved");

            }
            break;
            case 1:{
                console.log(1)
                this.props.history.push("/work");
            }
                break;
        }

    }
    user(){
        this.props.history.push("/user");
    }
    renderForm() {

        return (
            <div>
                <div   className="tops">


                    {/*<Zmage src="http://www.huiaidan.cn/img/6.png" width="150" height="150"  alt="图片介绍文字"/>*/}
                    <h1 style={{marginTop: 20, fontSize: 40, fontFamily: '华文彩云'}} className="third_neon" onClick={event => this.user(event)}>     欢迎来到我的个人网站，我是李进辉。   </h1>

                </div>
                <div className="content">
                    <div className="content_con">
                        <div onMouseOver={event => this.MouserOver(event, 0)}
                             onMouseOut={event => this.MouseOut(event, 0)}
                             onClick={event => this.click(0)}
                             // onClick={event =>  this.props.onRef("55555555555555555555**------88888")}   父组件调用
                             className="titkl imgh"
                        >

                            宝贵经历
                            <div className="contfg">

                                <Demo paused={this.state.paused1}
                                      reverse={this.state.reverse1}
                                      moment={this.state.moment1}
                                      name=" 工作的同时。每一次出现的错误，遇到的困难都是我最宝贵的经历。解决了的使我学会了更多，没有解决的使我改变了看问题的思路，再去解决掉。每一次遇到的麻烦，是我前进的养料。"
                                >
                                </Demo>

                            </div>
                            <img src={td} className="imgon"/>
                            <img src={td} className="imgtw"/>

                        </div>
                        <div onMouseOver={event => this.MouserOver(event, 1)}
                             onMouseOut={event => this.MouseOut(event, 1)}
                             onClick={event => this.click(1)}
                             className="titkl imghd"
                        >
                            萌芽初现
                            {/*<Demoe/>*/}

                            <div className="contfg">
                            <Demo paused={this.state.paused}
                                  reverse={this.state.reverse}
                                  moment={this.state.moment}
                                  name="大学教育经历，一个孕育我编程思想的地方乐知学院，学校是一生中过的最悠闲的地方，也是最快萌芽梦想的地方，感谢曾经遇到过我的人。"
                            />
                            </div>
                            <img src={td} className="imgon"/>
                            <img src={td} className="imgtw"/>
                        </div>
                        {/*<div onMouseOver={event => this.MouserOver(event,2)} onMouseOut={event =>this.MouseOut(event,2) }*/}
                        {/*    onClick={event =>  this.props.onRef("55555555555555555555**------88888")}   //父组件调用*/}
                        {/*     className="titkl imghd"*/}
                        {/*>*/}
                        {/*    asdasd*/}
                        {/*<Demo paused={this.state.arradmin[this.state.adminindex].paused}*/}
                        {/*reverse={this.state.arradmin[this.state.adminindex].reverse}*/}
                        {/*moment={this.state.arradmin[this.state.adminindex].moment}*/}
                        {/*/>*/}
                        {/*</div>*/}
                        {/*<div onMouseOver={event => this.MouserOver(event,3)} onMouseOut={event =>this.MouseOut(event,3) }>*/}
                        {/*<Demo paused={this.state.arradmin[this.state.adminindex].paused}*/}
                        {/*reverse={this.state.arradmin[this.state.adminindex].reverse}*/}
                        {/*moment={this.state.arradmin[this.state.adminindex].moment}*/}
                        {/*/>*/}
                        {/*</div>`*/}
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}

