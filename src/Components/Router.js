import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
// HashRouter, BrowserRouter
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Components/Detail";

export default () => (
    <Router> 
        <> {/*  Router는 한번에 하나의 child만 render할 수 있기 때문에 */}
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            {/* ':'가 있으면 그 뒤엔 무엇이든 올 수 있고, url이 바뀔 수 있다는 뜻 */}
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);