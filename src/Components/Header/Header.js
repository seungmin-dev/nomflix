import react from "react";
import "./Header.css";
// react에서 style을 적용시키는 방법
// 1. style 폴더를 만들어서 import
// 2. 각각의 컴포넌트 폴더를 만들고 그 안에서 style 파일을 import

export default () => (
    <header className="nav">
        <ul>
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
);