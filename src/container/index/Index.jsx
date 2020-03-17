import React, {Component} from "react";
import "./Index.scss";
import {Button} from "antd";
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import ScllorGather from "../demo/scroll";
import {cookie} from "../../components/state";


//import Edit from "../demo/logo";


// import FlipBook from "../demo/flip-book";
// import User from "../user/user";
let fan = require("../../lib/img/fan.png")

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

            IsPCTrue: this.IsPC(),

        };
    }

    IsPC() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    handleResize() {
        console.log(this.IsPC(), "当前模式")
        this.setState({
            IsPCTrue: this.IsPC()
        })

    }

    componentDidMount() {

        window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }

    componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱

        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    btn_click() {
        cookie("put", "0","Contentshow")
        this.props.history.push("/home");
    }

    render() {


  // return   <ScllorGather/>
        console.log(this.state.IsPCTrue)
        const plk={position: "absolute",
        bottom: '-5px',
        fontSize: '25px',
        color: 'white',
            cursor: 'pointer'
        }
        if (this.state.IsPCTrue) {
            return (
                    //<Edit/>

                 <div className="Index">

                    <div style={{width: "13%", height: 20}}></div>
                    <div style={{marginTop: -200,color: "black"}}  >
                        <h1 style={{fontSize: 60, color: 'white', textAlign: 'left'}}>
                            <div className="texty-demo" style={{marginTop: 64,color: "black"}}>
                                <Texty> 前进的人</Texty>
                            </div>
                        </h1>
                        <div style={{color: 'white', width: 400}}>
                            <div className="texty-demo" style={{marginTop: 104,color: "black",fontSize: "18px"}}>
                                <Texty className='text'> 在路上前进的人总是孤独的。温暖的夕阳洒满大地，永远追逐着太阳。当太阳落下的时候，你期待它的是重新升起。如果你喜欢一只蝴蝶，千万不要去追，因为去追你也追不到，你应该去种花，等到春暖花开时，蝴蝶自然会 来。很多人都缺少一份重新再来的勇气。</Texty>


                            </div>
                        </div>
                        <div className='inde_btn'>
                            {/*<Button type="primary"*/}
                            {/*                              onClick={event => this.btn_click()}>撕开黑夜</Button>*/}
                        <img src={fan} style={{width:'160px',     height: '123px',cursor: 'pointer'}} onClick={event => this.btn_click()}  />
                        <p style={plk} onClick={event => this.btn_click()}> 撕开黑夜</p>
                    </div>
                    </div>
                </div>
            );
        } else {
            return <div className="Indexs">
                <div >

                    <h1 style={{fontSize: 60,   textAlign: 'left',color: "black"}}  ><div className="texty-demo" style={{marginTop: 64,color: "black"}}>
                        <Texty> 前进的人</Texty>
                    </div></h1>
                    <div style={{color: 'white', width: 200}}>
                        <div className="texty-demo" style={{ marginTop: 64,color: "black",fontSize: "18px"}}  >
                            <Texty className='text'> 在路上前进的人总是孤独的。温暖的夕阳洒满大地，永远追逐着太阳。当太阳落下的时候，你期待它的是重新升起。如果你喜欢一只蝴蝶，千万不要去追，假如因为去追你也追不到，你应该去种花，等到春暖花开时，蝴蝶自然会 来。很多人都缺少一份重新再来的勇气。</Texty>
                        </div>
                    </div>
                    <div className='inde_btn'><Button type="primary" onClick={event => this.btn_click()}>撕开黑夜</Button>
                    </div>
                </div>
            </div>
        }


    }
}

