import React from "react";
import {render, fireEvent, cleanup} from '@testing-library/react';

import Form1 from "../components/Forms/Form1"
import Form2 from "../components/Forms/Form2"

describe("<Form1 />", () => {
  it("matches snapshot", () => {
    const tree = render.create(<Form1 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<Form2 />", () => {
  it("matches snapshot", () => {
    const tree = render.create(<Form2 />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
