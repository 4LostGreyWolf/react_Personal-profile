import React, { Component } from "react";



export default class Photos extends Component {



    render() {

        console.log("photos",this.props.selectredudddd)
        // this.props.isAuthenticated = true;
        // this.state = {
        //     isAuthenticated: true,
        //
        // };
        return (
             <div>{this.props.isAuthenticated}</div>
        );
    }
}
