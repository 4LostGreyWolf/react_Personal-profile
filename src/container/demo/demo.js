import React, {Component} from "react";
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

import Texty from "rc-texty/es";

export default class Demo extends React.Component {

    constructor(props) {
        super(props);

        this.moment = null;
        this.animation = {left: '0', duration: 500};
        this.state = {
            // moment: null,
            // paused: true,
            // reverse: false,
        };
    }

    onPause = () => {
        this.setState({
            paused: true,
            moment: null,
        });
    }

    onReverse = () => {
        this.setState({
            paused: false,
            reverse: true,
            moment: null,
        });
    }

    onRestart = () => {
        this.setState({
            paused: false,
            reverse: false,
            moment: 0,
        }, () => {
            this.setState({
                moment: null,
            });
        });
    }

    onClick = () => {
        this.setState({
            paused: false,
            reverse: false,
            moment: null,
        });
    }


    render() {


        let json = {
            top: "0px",
            position: "absolute",
            height: ' 100%'
        }
        return (
            <div style={json}>
                <TweenOne
                    animation={this.animation}
                    paused={this.props.paused}
                    reverse={this.props.reverse}
                    moment={this.props.moment}
                    className="code-box-shape"
                    style={{left: '-200px',}}

                >

                    {this.props.name}

                    </TweenOne>

            </div>
        );
    }
}
Demo.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};