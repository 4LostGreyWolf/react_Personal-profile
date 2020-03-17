import React, {Component} from "react";

import Carousel3d from "../demo/carouse";
import Zmage from 'react-zmage'
import "./work.css"
export default class Work  extends Component {
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
        this.props.history.push("/home");
    }

    render() {
        console.log(this.state.IsPCTrue)
        if (this.state.IsPCTrue) {
            return (
                //<Edit/>

                Carousel()
            );
        } else {
            return   Carousel()
        }


    }
}

const imgWrapper = [
    // 'http://203.195.177.101/state/img/6.png',
    // 'http://203.195.177.101/state/img/1.jpg',
    // 'http://203.195.177.101/state/img/2.jpg',
    // 'http://203.195.177.101/state/img/3.jpg',
    // 'http://203.195.177.101/state/img/4.jpg',
    // 'http://203.195.177.101/state/img/5.jpg',
    '/state/img/6.png',
    '/state/img/1.jpg',
    '/state/img/2.jpg',
    '/state/img/3.jpg',
    '/state/img/4.jpg',
    '/state/img/5.jpg',
    // 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png',
    // 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png',
    // 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png',
    // 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png',
    // 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png',
    /* 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png',
    'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png', */
];
// 使用 Carousel3d 的代码
function Carousel() {
    const children = imgWrapper.map((src, i) => (

    <Zmage src={src} className="img-wrapper" key={i.toString()}   alt="图片介绍文字"/>
    ));
    return (
        <div className="carousel-demo-wrapper">
                <div className='titlk third_neon'   >生活三年的地方，教我技能地方</div>
            <Carousel3d className="carousel-demo" childMaxLength={6}>
                {children}
            </Carousel3d>
        </div>);
}


// {/*<div*/}
// {/*key={i.toString()}*/}
// {/*className="img-wrapper"*/}
// {/*style={{*/}
// {/*backgroundImage: `url(${src})`,*/}
// {/*}}*/}
// {/*/>*/}


// <div className="Index">
//
//     <div style={{width: "13%", height: 20}}></div>
//     <div style={{marginTop: -200,color: "black"}}  >
//         <h1 style={{fontSize: 60, color: 'white', textAlign: 'left'}}>
//             <div className="texty-demo" style={{marginTop: 64,color: "black"}}>
//                 <Texty> 前进的人</Texty>
//             </div>
//         </h1>
//         <p style={{color: 'white', width: 400}}>
//             <div className="texty-demo" style={{marginTop: 104,color: "black"}}>
//                 <Texty> 在路上，前进的人总是孤独的。当温暖的夕阳洒满大地，追逐着太阳。当然太阳又落下的时候，有可能我再等待它重新升起。</Texty>
//             </div>
//         </p>
//         <div className='inde_btn'><Button type="primary"
//                                           onClick={event => this.btn_click()}>撕开黑夜</Button></div>
{/*</div>*/}
{/*</div>*/}
