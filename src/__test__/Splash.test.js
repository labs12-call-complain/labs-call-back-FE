import React from "react";
import test from "react-test-renderer";

import LandingPage from "../components/Landing/landing";
import { withAuthentication } from "../components/Session/session";


describe("<Landing />", () => {
  it("matches snapshot", () => {
    const tree = test.create(withAuthentication(<LandingPage />));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

