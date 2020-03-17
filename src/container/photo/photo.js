import React, { Component } from "react";



export default class Photo extends Component {


    onwordfontorders(){
        this.props.userHasAuthenticated("867896784654654++5+5+6565+6+5+45+6");
    }
    render() {

        console.log("photo",this)
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
