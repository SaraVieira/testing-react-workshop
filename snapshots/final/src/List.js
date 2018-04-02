import React, { Component, Fragment } from "react";
import movies from "./movies";

export default class extends Component {
    constructor() {
        super();
        this.state = {
            movies
        };

        this.removeMovie = this.removeMovie.bind(this);
    }

    removeMovie(name) {
        this.setState(state => ({
            movies: state.movies.filter(movie => movie.name !== name)
        }));
    }

    render() {
        const { movies } = this.state;
        return (
            <Fragment>
                {movies
                    ? movies.map(movie => (
                        <a
                            onClick={() => this.removeMovie(movie.name)}
                            className="fl w-50 w-25-l link overflow-hidden movie"
                            key={movie.name}
                        >
                            <div
                                role="img"
                                aria-label={movie.name}
                                className="grow aspect-ratio--4x6 "
                                style={{
                                    background: `url(${movie.poster}) no-repeat center center`,
                                    backgroundSize: "cover"
                                }}
                            />
                        </a>
                    ))
                    : null}
            </Fragment>
        );
    }
}
