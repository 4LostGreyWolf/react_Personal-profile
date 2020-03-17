
import React, { Component } from "react";
import { Auth } from "aws-amplify";
import * as react_router_dom from "react-router-dom";
// import {hashHistory} from "react-router"

import Routes from "./Routes";
import './App.css';
const {HashRouter, withRouter} =react_router_dom
  class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    async componentDidMount() {

        try {
            console.log("556699++++++")
            await Auth.currentSession();
            this.userHasAuthenticated(true);
        }
        catch(e) {
            if (e !== 'No current user') {
                // alert(e);
            }
        }

        this.setState({ isAuthenticating: false });
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    handleLogout = async event => {
        await Auth.signOut();

        this.userHasAuthenticated(false);

        this.props.history.push("/login");
    }

    render() {
    return (
      <div className="App" >
          <HashRouter >
              <div className="App container">
                  <Routes   />
              </div>
          </HashRouter >
      </div>
    );
  }
}

export default withRouter(App) ;
