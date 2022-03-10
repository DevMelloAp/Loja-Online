import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        {productList.length === 0 ? <h2>Nenhum produto foi encontrado</h2>
          : productList.map((product) => (
            <ProductCard product={ product } key={ product.id } />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
