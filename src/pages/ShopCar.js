import React from 'react';
import { Link } from 'react-router-dom';

class ShopCar extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShopCar;
