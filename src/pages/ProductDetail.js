import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, id, thumbnail, price } = state;
    return (
      <>
        <section data-testid="product">
          <h1 data-testid="product-detail-name">{ title }</h1>
          <p>{ id }</p>
          <img src={ thumbnail } alt="" />
          <p>{ price }</p>
        </section>
        <Link to="/shopcar">
          <button type="button">Carrinho de compras</button>
        </Link>
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
export default ProductDetail;
