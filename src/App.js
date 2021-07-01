import 'antd/dist/antd.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;