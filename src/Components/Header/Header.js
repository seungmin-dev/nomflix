import react from "react";
import styles from "./Header.module.css";
// css를 js처럼 모듈로 불러오는 방법
// 작은 프로젝트에서 쓰면 좋음
// 요소검색(?) 해보면 클래스가 익명으로 생성됨
// but 클래스명을 항상 맞춰줘야하는 불편함이 있음

export default () => (
    <header className={styles.navList}>
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