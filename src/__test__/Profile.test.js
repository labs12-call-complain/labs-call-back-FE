import React from "react";
import test from "react-test-renderer";
import UserProfile from "../components/Users/Profile"
import { withAuthentication } from "../components/Session/session";


describe("<Profile />", () => {
  it("matches snapshot", () => {
    const tree = test.create(withAuthentication(<UserProfile />));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
