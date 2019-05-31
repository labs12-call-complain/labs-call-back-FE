import React from "react";
import test from "react-test-renderer";
import EditProfile from "../components/Users/EditProfile"
import { withAuthentication } from "../components/Session/session";

describe("<EditProfile />", () => {
  it("matches snapshot", () => {

    const tree = test.create(withAuthentication(<EditProfile />));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
