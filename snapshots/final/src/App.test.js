/**
 * @jest-environment node
 */
import React from "react";
import { shallow, render } from "enzyme";

import App from "./App";

describe("<App />", () => {
    it("shallow", () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
