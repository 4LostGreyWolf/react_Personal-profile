import React from "react";
import * as react_router_dom from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
  import Loadable from "react-loadable";
import Edit from "./container/demo/logo";
import Work from "./container/work/work";
import PicDetailsDemo from "./container/involved/involved";
const {Redirect, Route, Switch} = react_router_dom;

// const AsyncHome = asyncComponent(() => import("./containers/HomeContainerst"));
// const AsyncLogin = asyncComponent(() => import("./containers/Login"));
// const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
const AsyncSignup = asyncComponent(() => import("./container/Signup"));
const IndexContainer = asyncComponent(() => import("./containers/IndexContainerst"));
// const AsyncHome = asyncComponent(() => import("./containers/HomeContainerst"));
const AsyncLogin = asyncComponent(() => import("./containers/loginContainerst"));


 export const Loading =function Loadings(props) {
    if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
        return  <Edit/>;
    } else {
        return null;
    }
}
// HomeWordAttrContainer
// LoginAttrContainer
const AsyncHome = Loadable({
    loader: () => import("./containers/HomeContainerst"),
    loading: Loading
});
const AsyncWork = Loadable({
    loader: () => import("./container/work/work"),
    loading: Loading
});
const AsyPicDetailsDemo = Loadable({
    loader: () => import("./container/involved/involved"),
    loading: Loading
});
const Asyncuser = Loadable({
    loader: () => import("./container/user/user"),
    loading: Loading
});

// const AsyncLogin = Loadable({
//     loader: () => import("./containers/loginContainerst"),
//     loading: Loading
// });
// const AsyncNotes = Loadable({
//     loader: () => import("./container/Notes"),
//     loading: Loading
// });
//
// const AsyncSignup = Loadable({
//     loader: () => import("./container/Signup"),
//     loading: Loading
// });

export default ({childProps}) =>
    <Switch>
        <Route exact path='/' component={IndexContainer}/>
        <Route path='/home' component={AsyncHome}/>
        <Route path='/login' component={AsyncLogin}/>
        {/*<Route exact path='/' component={HomeWordAttrContainer} />*/}
        {/*<Route path='/login' component={LoginAttrContainer} />*/}
        {/*<Route path='/notes' component={AsyncNotes} />*/}
        <Route path='/signup' component={AsyncSignup}/>
        <Route path='/work' component={AsyncWork}/>
        <Route path='/user' component={Asyncuser}/>
        <Route path='/involved' component={AsyPicDetailsDemo}/>
        {/*<Route path='/note' component={AsyncNewNote} />*/}
        {/*<Route path='/Found' component={AsyncNotFound} />*/}
        {/*<Redirect></Redirect>*/}
        <Redirect to={{
            pathname: '/login',
            state: {from: 1122}
        }}/>
    </Switch>
;
