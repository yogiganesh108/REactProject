import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import ProductListingPage from './ProductListingPage';
import CartPage from './CartPage';
import LandingPage from './LandingPage';
import Header from './header';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductListingPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
