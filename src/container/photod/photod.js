import React, { Component } from "react";



export default class Photod extends Component {


    onwordfontorders(){
        this.props.userHasAuthenticated("234325456");
    }
    render() {

        console.log("Photod",this)
        // this.props.isAuthenticated = true;
        // this.state = {
        //     isAuthenticated: true,
        //
        // };
        return (
             <div onClick={event => this.onwordfontorders()}>aksjdhasj</div>
        );
    }
}
