import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

// import Blog from "./Blog/containers/Blog/Blog";
import Aux from "./hoc/Aux/Aux";
class App extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>

          {/* <Blog /> */}
        </div>
      </Aux>
    );
  }
}

export default App;
