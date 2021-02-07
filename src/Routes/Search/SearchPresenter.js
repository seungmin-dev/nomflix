import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
    padding: 0 20px;
    margin-top: 20px;
`;
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;
const Input = styled.input`
    all : unset;
    width: 100%; 
    font-size: 22px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #888;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, handleSubmit, loading, error, updateTerm }) => <Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (<Loader />) : (
        <>
        {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
                {movieResults.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
                {tvResults.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
            </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
        )}
        </>
    )}
</Container>;

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    searchTerm : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    error : PropTypes.string,
    updateTerm : PropTypes.func.isRequired
};

export default SearchPresenter;