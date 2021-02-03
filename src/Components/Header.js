import react from "react";
// npm install styled-components
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
`;

const List = styled.ul`
    display : flex;
    &:hover{
        background-color: blue;
    }
`;

const Item = styled.li``;

const Slink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <Link to="/">Movies</Link>
            </Item>
            <Item>
                <Link to="/tv">TV</Link>
            </Item>
            <Item>
                <Link to="/search">Search</Link>
            </Item>
        </List>
    </Header>
);