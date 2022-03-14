import React from 'react';
import PropTypes from 'prop-types';

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
        <img src={ product.thumbnail } alt="" />
        {showQuantity && (
          <div>
            <input type="button" data-testid="product-decrease-quantity" value="-" />
            <p data-testid="shopping-cart-product-quantity">
              {this.getQuantity(products, product.id)}
            </p>
            <input type="button" data-testid="product-increase-quantity" value="+" />
          </div>
          )}
        <button
          type="button"
          data-testid={ buttonId }
          onClick={ () => onClick(product) }
        >
          {buttonText}
        </button>
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
