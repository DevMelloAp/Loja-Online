import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
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
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
