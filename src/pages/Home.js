import React from 'react';
import ProductList from '../Components/ProductList';
import { getProductsFromQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queryValue: '',
      showMessage: true,
      productList: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      queryValue: target.value,
    });
  }

  handleClick = async () => {
    const { queryValue } = this.state;
    const productList = await getProductsFromQuery(queryValue);
    this.setState({
      productList,
      showMessage: false,
    }, () => console.log(productList));
  }

  render() {
    const { queryValue, showMessage, productList } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ queryValue }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {showMessage
          ? (
            <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>)
          : <ProductList productList={ productList } />}
      </div>
    );
  }
}

export default Home;
