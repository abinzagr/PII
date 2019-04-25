import React from "react";
import Navigation, { createRootNavigator } from "./Navigation/Navigation";
import { Provider, connect } from "react-redux";
import Store from "./Store/configureStore";

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator();
    console.log(this.props);
    console.disableYellowBox = true;
    return (
      <Provider store={Store}>
        <Layout />
      </Provider>
    );
  }
}
