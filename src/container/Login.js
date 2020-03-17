import React, { Component } from "react";
// import { Auth } from "aws-amplify";

import {Button} from 'antd';
import "./Login.css";
import PhotoAttrContainer from "../containers/photoContainerst";
import PhotosAttrContainer from "../containers/photosContainerst";
import PhotodAttrContainer from "../containers/photodContainerst";
import Interest from "./interest/interest";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // this.setState({ isLoading: true });
    console.log("点击了登录",this)
    // const data =  await Auth.signIn(this.state.email, this.state.password);
    // console.log("55666+++++",data)
      this.props.userHasAuthenticated("8789789789798789");

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

  render() {

    return (
      <div className="Login">

        {/*  <Button type="primary">Button</Button>*/}
        {/*<PhotoAttrContainer />*/}
        {/*<PhotosAttrContainer/>*/}
        {/*  <PhotodAttrContainer/>*/}
          <h2>{this.props.name}</h2>

        <Interest imgArray={this.props.imgArray} jsonsty={this.props.jsonsty}/>


      </div>
    );
  }
}
