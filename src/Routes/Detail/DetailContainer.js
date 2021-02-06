import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        result : null,
        error : null,
        loading : true
    };

    render() {
        const { error, loading } = this.state;
        return (
            <DetailPresenter error={error} loading={loading} />
        );
    };
}