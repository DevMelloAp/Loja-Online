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
      addedItens: [],
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

  addItem = (product) => {
    this.setState((prevState) => ({
      addedItens: [...prevState.addedItens, product],
    }));
  }

  handleChange = ({ target }) => {
    this.setState({
      queryValue: target.value,
    });
  }

  handleClick = async ({ target }) => {
    const { queryValue } = this.state;
    if (target.type === 'button') {
      const productList = await getProductsFromQuery(queryValue);
      this.setState({
        productList,
        showMessage: false,
      });
    } else if (target.type === 'radio') {
      const categoryName = target.id;
      const productList = await getProductsFromQuery(categoryName);
      this.setState({
        productList,
        showMessage: false,
      });
    }
  }

  render() {
    const { queryValue, showMessage, productList, categories, addedItens } = this.state;
    return (
      <div>
        <div>
          { categories.map((category) => (
            <div key={ category.name }>
              <input
                data-testid="category"
                type="radio"
                name="category"
                id={ category.name }
                onClick={ this.handleClick }
              />
              <label htmlFor="category">{category.name}</label>
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
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shopcar',
            state: addedItens } }
        >
          Carrinhos de Compras
        </Link>
        {showMessage
          ? (
            <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>)
          : (
            <ProductList
              productList={ productList }
              addItem={ this.addItem }
            />)}
      </div>
    );
  }
}

export default Home;
