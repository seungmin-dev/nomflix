import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

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