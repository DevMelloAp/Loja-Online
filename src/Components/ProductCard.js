import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  getQuantity = (array, id) => {
    let count = 0;
    array.forEach((product) => {
      if (product.id === id) {
        count += 1;
      }
    });
    return count;
  }

  render() {
    const { product, onClick,
      buttonText, buttonId, itemId, products, showQuantity } = this.props;
    return (
      <section data-testid={ itemId }>
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
        {showQuantity && (
          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            {this.getQuantity(products, product.id)}
          </p>)}
        <button
          type="button"
          data-testid={ buttonId }
          onClick={ () => onClick(product) }
        >
          {buttonText}
        </button>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productDetail',
            state: product } }
        >
          <img
            src={ product.thumbnail }
            alt=""
          />
        </Link>

      </section>);
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
