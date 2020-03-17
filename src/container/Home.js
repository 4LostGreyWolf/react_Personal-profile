import React, {Component} from "react";
import * as antd from 'antd';
import {NavBar, Icon, Button} from 'antd-mobile';
import imglogo from '../lib/img/egg.png';
import "./Home.css";
import asyncComponent from "../components/AsyncComponent";
import FlipBook from "./demo/flip-book";
import {cookie, imggul} from "../components/state"
const {Layout, Menu, Avatar} = antd
const {Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;
const AsyncSignup = asyncComponent(() => import("./Signup"));
const AsyncLogin = asyncComponent(() => import("../containers/loginContainerst"));
let that;
let inhj = 0;
export default class Home extends Component {
    constructor(props) {
        super(props);
        let index = this.props.selectredu[this.props.selectredu.length - 1].index
        this.state = {
            isLoading: true,
            isAuthenticated: false,
            notes: [],
            avatar: 48,
            IsPCTrue: this.IsPC(),
            Contentshow: index,
            collapsed: true,
            flipbook: true
        };
        inhj = index
        that = this;
        setTimeout(() => {
            this.setState({
                flipbook: false
            })
        }, 3000)
    }

    async componentDidMount() {


        window.addEventListener('resize', this.handleResize.bind(this))

        this.setState({isLoading: false});
    }

    componentDidUpdate() {


        // console.log(this.props.selectredu[this.props.selectredu.length-1])
        // inhj=this.props.selectredu[this.props.selectredu.length-1].index;
        // this.setState({
        //     Contentshow:this.props.selectredu[this.props.selectredu.length-1].index
        // })
    }

    notes() {

        // return API.get("http://v.juhe.cn", "/toutiao/index?type=&key=36bdc7ebb2c1324f25e5506816074589");
    }

    state = {
        collapsed: true,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed, this.state.avatar);
        this.setState({collapsed, avatar: collapsed ? 48 : 64});
    }

    user() {
        this.props.history.push("/user");
    }

    renderNotesList(notes) {
        const dfg = {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
        }
        let timet, timeo;

        return <Layout style={{minHeight: '100vh'}}>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className="left_sider"
            >
                <div className="logo" onClick={event => this.user(event)}>
                    <Avatar size={this.state.avatar} src={imglogo}/>
                </div>
                <Menu theme="dark" defaultSelectedKeys={[(this.state.Contentshow + 1).toString()]} mode="inline">
                    <Menu.Item key="1" onClick={() => {
                        inhj = 0
                        cookie("put", inhj.toString(),"Contentshow")
                        if (!this.state.flipbook) {
                            clearTimeout(timeo)
                            this.setState({
                                flipbook: true
                            })
                            timet = setTimeout(() => {
                                this.setState({
                                    flipbook: false,
                                    Contentshow: inhj
                                })
                            }, 3000)
                            // this.setState({
                            //     Contentshow: 0
                            // })
                            this.props.pagesindex(inhj)
                        }
                    }}>
                        <antd.Icon type="pie-chart"/>
                        <span>个人中心</span>

                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => {
                        inhj = 1
                        cookie("put", inhj.toString(),"Contentshow")
                        if (!this.state.flipbook) {
                            clearTimeout(timet)
                            this.setState({
                                flipbook: true
                            })
                            timeo = setTimeout(() => {
                                this.setState({
                                    flipbook: false,
                                    Contentshow: inhj
                                })
                            }, 5000)
                            this.props.pagesindex(inhj)
                        }

                    }}>
                        <antd.Icon type="desktop"/>
                        <span>兴趣爱好</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><antd.Icon type="user"/><span>我的更多</span></span>}
                    >
                        <Menu.Item key="3">我的老家</Menu.Item>
                        <Menu.Item key="4">我的家人</Menu.Item>
                        {/*<Menu.Item key="4">我的工作</Menu.Item>*/}

                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                {/*<Header style={{ background: '#fff', paddingLeft: 24 }} >*/}
                {/*<Breadcrumb style={{ margin: '16px 0',textAlign: "left" }}>*/}
                {/*<Breadcrumb.Item href="#/login">*/}
                {/*<antd.Icon type="home" />*/}
                {/*</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item href="#/home">*/}
                {/*<antd.Icon type="user" />*/}
                {/*<span>Application List</span>*/}
                {/*</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>*/}
                {/*Application*/}
                {/*</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                {/*</Header>*/}

                 <Content style={{
                     margin: '24px 16px',
                     padding: 10,
                     background: '#fff',
                     minHeight: 676,
                     minWidth: 1000,
                     overflow: "hidden"
                 }}>
                     <div style={{
                         padding: 10,
                         background: '#fff',
                         height: document.documentElement.clientHeight - 117,
                         minHeight: 360,
                         minWidth: 1000,
                         position: "relative",
                         overflowY: 'auto',
                         width: "102%"
                     }}>
                         {this.Contenthtml()}

                         {this.state.flipbook ?
                             <div style={dfg}>
                                 <FlipBook Contentshow={inhj}/>
                             </div> : null
                         }
                     </div>
                 </Content>

                <Footer style={{textAlign: 'center'}}>
                    冀ICP备19002580号-1
                </Footer>
            </Layout>
        </Layout>
    }

    handleSubmit = async (index) => {


        // this.setState({ isLoading: true });
        console.log("点击了登录", this)
        // const data =  await Auth.signIn(this.state.email, this.state.password);
        // console.log("55666+++++",data)
        this.props.onwordfontorder_d(index);

        // try {
        //   await Auth.signIn(this.state.email, this.state.password);
        //   console.log("adas可以显示")
        //   this.props.userHasAuthenticated(true);
        // } catch (e) {
        //
        //   alert(e.message);
        //   this.setState({ isLoading: false });
        // }
    }

    onRef(index) {
        // console.log("55555555++++++++++++",index)
        // that.props.history.push("/work");
        that.handleSubmit(index)
    }

    Contenthtml() {


        let jsonsty = {width: '502px', height: "609px"}
        switch (this.state.Contentshow) {
            case 0: {
                //onRef={this.onRef}

                return <AsyncSignup history={this.props.history} onRef={this.onRef}/>
            }
                break;
            case 1: {

                return <div style={{display: this.state.flipbook ? "none" : "block"}}>
                    <p>图片部分摘抄于：<a target="_blank"
                                  href="https://www.zcool.com.cn/u/1634492">https://www.zcool.com.cn/u/1634492</a></p>
                    <AsyncLogin name="散步，忙完一天的事之后，吃完饭一个人或者两个人，不带钱跟手机，漫无目的的走。让风带走一天的疲惫。" imgArray={imggul[0]}
                                jsonsty={jsonsty}/>
                    <AsyncLogin name="乐途，快乐总是在路上，骑行带我去看很美的地方" imgArray={imggul[1]}/>

                    <AsyncLogin name="蹦极，从40多米的空中跳下，一开始睁着充满好奇的双眼，慢慢闭上眼睛，感受最低点从心脏传来的沉痛，回味以往的经历，那一刻好长。"
                                imgArray={imggul[2]} jsonsty={jsonsty}/>
                    {/*<Button type="primary" onClick={() => {*/}
                    {/*    this.props.onwordfontorder_d("65465412315485466++9999");*/}
                    {/*}}>Button</Button>*/}
                </div>
            }
                break;
            default: {
                return <AsyncLogin name="title"/>
            }
        }
    }

    renderLander() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >NavBar</NavBar>
            </div>
        );
    }

    renderNotes() {

        return (
            <div className="notes">
                暂无
            </div>
        );
    }

    onwordfontorders() {
        this.props.onwordfontorder("home_get")
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

    componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱

        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    parseQueryString(str) {
        let arr = [],
            length = 0,
            res = {};
        arr = str.split('&');
        length = arr.length;
        for (var i = 0; i <= length - 1; i++) {
            res[arr[i].split('=')[0]] = arr[i].split('=')[1];
        }
        return res;
    }

    componentWillMount() {
        let dats = cookie("get","","Contentshow")
        if (dats.show) {
            console.log(dats)
            inhj = dats.data
            this.setState({
                Contentshow: dats.data
            })
        } else {
            inhj = parseInt(this.props.selectredu[this.props.selectredu.length - 1].index);

            this.setState({
                Contentshow: inhj
            })
        }


    }

    render() {
        // let index =this.props.selectredu[this.props.selectredu.length-1].index

        // return <Button onClick={event =>  this.handleSubmit(event)}>点击</Button>
        if (this.state.IsPCTrue) {
            return (
                <div className="Home_cen">
                    {this.renderNotesList()}
                    {/*<Button onClick={event =>  this.handleSubmit(event)}>点击</Button>*/}
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.isAuthenticated ? this.renderNotes() : this.renderLander()}
                    <Button onClick={event => this.handleSubmit(event)}>点击</Button>
                </div>
            );
        }
    }
}

