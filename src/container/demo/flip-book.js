import React, {Component} from "react";
import "./flip-book.scss";




export default class FlipBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    indexfun(){
        console.log(this.props.Contentshow)
        switch (this.props.Contentshow) {
            case 0:{
                return <div className="book preserve-3d">
                    <div className="book-page-box book-page-5 preserve-3d">
                        <div className="book-page page-front">
                            <p>第四页</p>
                        </div>
                    </div>
                    <div className="book-page-box book-page-4 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第三页</p>
                        </div>
                    </div>
                    {/*flip-animation-3 增加这个就可以翻页*/}
                    <div className="book-page-box book-page-3 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第二页</p>

                        </div>
                    </div>

                    <div className="book-page-box book-page-2 preserve-3d ">
                        <div className="book-page page-front">
                            <p>第一页
                                <br/>
                                个人中心
                            </p>
                        </div>
                    </div>

                    <div className="book-page-box book-page-1 preserve-3d flip-animation-1">
                        <div className="book-page page-front">
                            <p>
                                个人网页
                            </p>
                        </div>
                    </div>
                </div>
            }break;
            case 1:{
                return <div className="book preserve-3d">
                    <div className="book-page-box book-page-5 preserve-3d">
                        <div className="book-page page-front">
                            <p>第四页</p>
                        </div>
                    </div>
                    <div className="book-page-box book-page-4 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第三页</p>
                        </div>
                    </div>
                    {/*flip-animation-3 增加这个就可以翻页*/}
                    <div className="book-page-box book-page-3 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第二页
                                <br/>
                                兴趣爱好
                            </p>

                        </div>
                    </div>

                    <div className="book-page-box book-page-2 preserve-3d flip-animation-2 ">
                        <div className="book-page page-front">
                            <p>第一页
                                <br/>
                                个人中心
                            </p>
                        </div>
                    </div>

                    <div className="book-page-box book-page-1 preserve-3d flip-animation-1">
                        <div className="book-page page-front">
                            <p>
                                个人网页
                            </p>
                        </div>
                    </div>
                </div>
            }break;
            default:{
                return <div className="book preserve-3d">
                    <div className="book-page-box book-page-5 preserve-3d">
                        <div className="book-page page-front">
                            <p>第四页</p>
                        </div>
                    </div>
                    <div className="book-page-box book-page-4 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第三页</p>
                        </div>
                    </div>
                    {/*flip-animation-3 增加这个就可以翻页*/}
                    <div className="book-page-box book-page-3 preserve-3d  ">
                        <div className="book-page page-front">
                            <p>第二页</p>
                        </div>
                    </div>

                    <div className="book-page-box book-page-2 preserve-3d ">
                        <div className="book-page page-front">
                            <p>第一页
                                <br/>
                                个人中心
                            </p>
                        </div>
                    </div>

                    <div className="book-page-box book-page-1 preserve-3d ">
                        <div className="book-page page-front">
                            <p>
                                个人网页
                            </p>
                        </div>
                    </div>
                </div>
            }
        }

    }

    render() {


        return this.indexfun()



    }
}

