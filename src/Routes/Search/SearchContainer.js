import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : "",
        loading: false,
        error : null
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if( searchTerm != "" ) {
            this.searchByTerm();
        }
    };

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.state({loading : true});
        try {
            const { data : {results : movieResults}} = await moviesApi.search(searchTerm);
            const { data : {results : showResults}} = await tvApi.search(searchTerm);
            this.state({movieResults, showResults});
        } catch {
            this.state({ error : "Can't find result."})
        } finally {
            this.state({ loading : false });
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter movieResults={movieResults} 
            tvResults={tvResults}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            handleSubmit={this.handleSubmit} />
        );
    }
}