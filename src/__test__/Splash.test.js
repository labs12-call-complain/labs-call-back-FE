import React from "react";

import {render, fireEvent, cleanup} from '@testing-library/react';
import LandingPage from "../components/Landing/landing";
import { withAuthentication } from "../components/Session/session";


describe("<Landing />", () => {
  it("matches snapshot", () => {
    const tree = render.create(withAuthentication(<LandingPage />));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

