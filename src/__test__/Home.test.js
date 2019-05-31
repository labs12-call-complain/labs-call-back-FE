import React from "react";
import test from "react-test-renderer";

import Home from "../components/Home/home"


describe("<Home />", () => {
  it("matches snapshot", () => {
    const tree = test.create(<Home />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});