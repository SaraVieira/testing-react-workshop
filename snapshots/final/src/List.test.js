/**
 * @jest-environment node
 */

import React from "react";
import { shallow, render } from "enzyme";

import Movies from "./List";
import movies from "./movies";

import './setupTests';

const newMovie = {
    name: "Sharknado 4 - The Forth Awakens",
    poster: "https://store.hmv.com/HMVStore/media/product/343049/01-343049.jpg"
};


describe("<Movies />", () => {
    it("shallow", () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper).toMatchSnapshot();
    });
    it("render", () => {
        const wrapper = render(<Movies />);
        expect(wrapper).toMatchSnapshot();
    });
    it("change state and check it", () => {
        const newMovies = movies.concat(newMovie);
        const wrapper = shallow(<Movies />);
        wrapper.setState({ movies: newMovies });
        expect(wrapper.state().movies).toEqual(newMovies);
        expect(wrapper.find(".movie")).toHaveLength(7);
        expect(wrapper).toMatchSnapshot();
    });

    it("remove movie", () => {
        const wrapper = shallow(<Movies />);
        const firstMovie = wrapper
            .find(".movie")
            .first()

        expect(wrapper.find(".movie")).toHaveLength(6);
        firstMovie.simulate("click");
        expect(wrapper.find(".movie")).toHaveLength(5);
        expect(wrapper.state().movies).toEqual(movies.slice(1));
        expect(wrapper).toMatchSnapshot();
    });
});
