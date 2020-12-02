import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import './index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cocktail/:id' component={SingleCocktail} />
      </Switch>
    </Router>
  );
};

export default App;
