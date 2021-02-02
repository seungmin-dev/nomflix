import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
// HashRouter, BrowserRouter
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

// 한번에 한개의 Component만 return 할 수 있기 때문에
// 여기서는 Fragment를 사용
export default () => (
    <Router> 
        <Switch>
            <Route path="/" exact component={Home} />
            {/* exact -> path가 정확히 일치해야함.
            하단의 popular엔 exact 없음 */}
            <Route path="/tv" exact component={TV} />
            {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
            {/* 위의 path로 갔을 때 TV, Popular가 동시에 출력된다
            ==> 두 개의 라우터가 동시에 렌더됨을 알 수 있음 */}
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
            {/* 페이지를 이동했을 때 정의된 path가 아니라면 "/"로 redirect한다 */}
            {/* 하지만 위의 코드를 실행하면 제대로 실행되지않는데,
            라우터 두 개를 동시에 렌더링하기 때문
            tv/popular는 앞의 "/tv/" 주소가 같기 때문에 가능
            이럴 땐 Switch를 써야한다. */}
        </Switch>
    </Router>
    // Composition : 두 개 이상의 Router를 동시에 렌더링하는 방식
);