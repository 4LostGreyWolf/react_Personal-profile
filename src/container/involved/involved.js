import QueueAnim from 'rc-queue-anim';
import React, {Component} from "react";
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import { Button } from 'antd';
import "./involved.css"
const textData = {
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
    ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
    ' Asia known as motorcycles.',
    title: 'Motorcycle',
};
const pagesindex=3
let textDataarr=[
    {
        content: '为客户提供股价服务展示估值仅供参考，请在手机上搜索小程序——魔估。',
        title: '魔估小程序',
        show:false
    },
    {
        content: '帮助客户进行保险计算，对设备进行精准的性能检测，生成报告，生成保单，请在手机上搜索小程序——魔估合作人。',
        title: '魔估合作人小程序',
        show:false,
        url:""
    },
    {
        content: '此项目是完成开具二手交易发票，正规合法，票据由税务局开出，请在手机上搜索小程序——机多好。',
        title: '机多好小程序',
        show:false,
        url:""
    },
    {
        content: '此项目是与旧货业协会合作的一个为二手机械上据牌照，并且由协会颁发设备登记证书，请在手机上搜索小程序——机多好。',
        title: '非道路机械产权备案登记小程序',
        show:false,
        url:""
    },
    {
        content: '学生网课学习网站，趣味编程引导编程乐趣',
        title: '启嘉网',
        show:true,
        url:"http://www.change.tm/"
    },
    
    {
        content: '此项目是与旧货业协会合作完成一个考取评估师证项目，由专业人员进行出题考试，提供培训课程可供学员学习。',
        title: '二手工程机械评估师证 ',
        show:true,
        url:"https://jx.crgta.org.cn/mcpa/Appraiserhome/"
    },
    {
        content: '此项目是与旧货业协会合作完成一个管理服务非道路移动机械项目，为车主提供资产证明，上据牌照。',
        title: '中旧协-非道路移动机械管理服务中心',
        show:true,
        url:"https://jx.crgta.org.cn/plate"
    },
 {
     content: '与税务局合作，为车主入固定资产开据有效发票。',
         title: '工程机械交易服务 - 机多好',
     show:true,
     url:"https://www.jiduohao.com"
 }
//  ,
//     {
//         content: '与税务局合作，为车主入固定资产开据有效发票。',
//         title: '工程机械交易服务 - 机多好',
//         show:true,
//         url:"https://www.jiduohao.com"
//     }

]

let dataArray = [
    { image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
    { image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png' },
    //   { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));
export default class PicDetailsDemo extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'pic-details-demo',
    };

    constructor(props) {
        super(props);
        this.state = {
            picOpen: {},
             shoede:false
        };
    }

    onImgClick = (e, i) => {
            console.log("awedqw",textDataarr,i)
          dataArray[i].content=textDataarr[i].content
          dataArray[i].title=textDataarr[i].title
        const { picOpen } = this.state;

        Object.keys(picOpen).forEach((key) => {
            if (key !== i && picOpen[key]) {
                picOpen[key] = false;
            }
        });
        picOpen[i] = true;

        this.setState({
            picOpen,
            shoede:textDataarr[i].show
        });

    };

    onClose = (e, i) => {
        const { picOpen } = this.state;
        picOpen[i] = false;
        this.setState({
            picOpen,

        });
    };

    onTweenEnd = (i) => {
        const { picOpen } = this.state;
        delete picOpen[i];
        this.setState({
            picOpen,
        });
    };

    getDelay = (e) => {
        const i = e.index + dataArray.length % pagesindex;
        return (i % pagesindex) * 100 + Math.floor(i / pagesindex) * 100 + 200;
    };

    getLiChildren = () => {
        const imgWidth = 110;
        const imgHeight = 76;
        const imgBoxWidth = 130;
        const imgBoxHeight = 96;
        return dataArray.map((item, i) => {
            const { image, title, content } = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % pagesindex);
            const imgLeft = isEnter ? imgBoxWidth * (i % pagesindex) : 0;
            const isRight = Math.floor((i % pagesindex) / 2);
            const isTop = Math.floor(i / pagesindex);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? { width: '100%', height: 175, zIndex: 1 } : null;
            const liAnimation = isOpen ?
                ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
                ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
            let aAnimation = isEnter ?
                ({
                    delay: 400,
                    ease: 'easeInOutCubic',
                    width: imgWidth,
                    height: imgHeight,
                    onComplete: this.onTweenEnd.bind(this, i),
                    left: imgBoxWidth * (i % pagesindex),
                    top: isTop ? imgBoxHeight : 0,
                }) : null;
            aAnimation = isOpen ?
                ({
                    ease: 'easeInOutCubic',
                    left: isRight ? (imgBoxWidth * 2) - 10 : 0,
                    width: '50%',
                    height: 175,
                    top: 0,
                }) : aAnimation;

            // 位置 js 控制；
            return (
                <TweenOne
                    key={i}
                    style={{
                        left,
                        top,
                        ...liStyle,
                    }}
                    component="li"
                    className={isOpen ? 'open' : ''}
                    animation={liAnimation}
                >
                    <TweenOne
                        component="a"
                        onClick={e => this.onImgClick(e, i)}
                        style={{
                            left: imgLeft,
                            top: imgTop,
                        }}
                        animation={aAnimation}
                    >
                        <img src={image} width="100%" height="100%"/>
                    </TweenOne>
                    <TweenOneGroup
                        enter={[
                            {
                                opacity: 0, duration: 0, type: 'from', delay: 400,
                            },
                            {ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%'},
                        ]}
                        leave={{ease: 'easeInOutCubic', left: isRight ? '50%' : '0%'}}
                        component=""
                    >
                        {isOpen && (
                            <div
                                className={`${this.props.className}-text-wrapper`}
                                key="text"
                                style={{
                                    left: isRight ? '0%' : '50%',
                                }}

                            >
                                <h1>{title}</h1>
                                <Icon type="cross" onClick={e => this.onClose(e, i)}/>
                                <em/>
                                <p>{content}</p>

                                {this.state.shoede?  <Button type="dashed"   onClick={event => this.onbtnclick(event, i)}>查看</Button>:null}

                            </div>
                        )}
                    </TweenOneGroup>
                </TweenOne>
            );
        });
    };
    onbtnclick=(e,i)=>{
        console.log(i)

        window.open(textDataarr[i].url)
        this.onClose(e, i)
    }
    render() {
        return (
            <div style={{height:"100%"}}>
                <div className={`${this.props.className}-wrapper`}>
                    <div className={this.props.className}>

                        <QueueAnim type="bottom" className={`${this.props.className}-title`}>
                            <h1 key="h1">参与过的项目</h1>
                            {/*<p key="p">吸取过的教训</p>*/}
                        </QueueAnim>
                        <QueueAnim
                            delay={this.getDelay}
                            component="ul"
                            className={`${this.props.className}-image-wrapper`}
                            interval={0}
                            type="bottom"
                        >
                            {this.getLiChildren()}
                        </QueueAnim>
                    </div>
                </div>
            </div>
        );
    }
}