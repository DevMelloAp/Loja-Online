import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = ({
      categories: [],
    });

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

  render() {
    const { categories } = this.state;
    return (
      <>
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

        <div>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link
            data-testid="shopping-cart-button"
            to="/shopcar"
          >
            Carrinhos de Compras

          </Link>
        </div>
      </>
    );
  }
}

export default Home;
