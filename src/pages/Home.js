import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import { getProductsFromQuery, getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queryValue: '',
      showMessage: true,
      productList: [],
      categories: [],
    };

    this.categories = async () => {
      const categoriesList = await getCategories();
      this.setState({
        categories: categoriesList,
      });
    };
  }

  componentDidMount() {
    this.categories();
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
    const { queryValue, showMessage, productList, categories } = this.state;
    return (
      <div>
        <div>
          { categories.map((categorie) => (
            <div key={ categorie.name }>
              <input
                data-testid="category"
                type="radio"
                id="categorie"
              />
              <label htmlFor="categorie">{categorie.name}</label>
            </div>
          ))}
        </div>
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
        <Link data-testid="shopping-cart-button" to="/shopcar">Carrinhos de Compras</Link>
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
