import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    margin-top: 20px;
    padding : 0px 10px;
    
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => loading ? <Loader /> : 
    <Container>
        {/* 아래 코드는 condition이 아닌 component! */}
        {/* {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing" />} */}
        {/* {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">movies</Section>} */}
        {/* 위의 코드에서 movied가 children */}
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movie">
                {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular Movie">
                {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
            </Section>
        )}
    </Container>;

HomePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    popular : PropTypes.array,
    upcoming : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default HomePresenter;