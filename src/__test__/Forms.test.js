import React from "react";
import test from "react-test-renderer";

import Form1 from "../components/Forms/Form1"
import Form2 from "../components/Forms/Form2"
import Form3 from "../components/Forms/Form3"
import Form4 from "../components/Forms/Form4"


describe("<Form1 />", () => {
  it("matches snapshot", () => {
    const tree = test.create(<Form1 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<Form2 />", () => {
  it("matches snapshot", () => {
    const tree = test.create(<Form2 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<Form3 />", () => {
  it("matches snapshot", () => {
    const tree = test.create(<Form3 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<Form4 />", () => {
  it("matches snapshot", () => {
    const tree = test.create(<Form4 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});