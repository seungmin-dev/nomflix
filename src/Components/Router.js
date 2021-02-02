import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

// 한번에 한개의 Component만 return 할 수 있기 때문에
// 여기서는 Fragment를 사용
export default () => (
    <Router> 
        <>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
        </>
    </Router>
);