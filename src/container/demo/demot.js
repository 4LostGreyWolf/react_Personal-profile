import React, {Component} from "react";
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import PropTypes from 'prop-types';

TweenOne.plugins.push(SvgDrawPlugin);
/*
* 原型动画实现定在百分之几
*
* */
const dataStartArr = ['10%', '20%', '30%', '60%', "80%", '100%',0];
let i = 0;
export default class Demoe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweenData: '100%',
        };
    }

    onClick() {
        const tweenData = dataStartArr[i];
        this.setState({
            tweenData,
        });
        i++;
        i = i >= dataStartArr.length ? 0 : i;
    }

    ellipse2path(cx, cy, rx, ry) { //非数值单位计算，如当宽度像100%则移除
        if (isNaN(cx - cy + rx - ry)) return;
        var path = 'M' + (cx - rx) + ' ' + cy + 'a' + rx + ' ' + ry + ' 0 1 0 ' + 2 * rx + ' 0' + 'a' + rx + ' ' + ry + ' 0 1 0 ' + (-2 * rx) + ' 0' + 'z';
        return path;
    }

    render() {

        return (
            <div style={{textAlign: 'center', marginTop: 40}}>
                <Button type="primary" onClick={this.onClick.bind(this)}>
                    Switch
                </Button>
                <svg width="200" height="84" version="1.2"
                     style={{display: 'block', margin: 'auto'}}
                >
                    <TweenOne
                        animation={{SVGDraw: this.state.tweenData, duration: 1000}}
                        style={{fill: 'none', strokeWidth: 10, stroke: '#019BF0'}}
                        component="path"
                        // d="M10,10c65,50,115,50,180,0"
                    d={this.ellipse2path(40, 40, 20, 20)}
                    />
                </svg>
                <p>Current Param: {this.state.tweenData}</p>
            </div>
        );
    }
}
Demoe.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};