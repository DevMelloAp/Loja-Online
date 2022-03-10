import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import ShopCar from './pages/ShopCar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shopcar" component={ ShopCar } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
