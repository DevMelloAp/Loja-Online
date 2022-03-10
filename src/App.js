import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={ Home } />
      </div>
    </BrowserRouter>
  );
}

export default App;
