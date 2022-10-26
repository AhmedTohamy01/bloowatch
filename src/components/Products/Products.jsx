import styled from 'styled-components'
import { ProductCard } from '../ProductCard/ProductCard'
import products from '../../data/products.json'

/*---> Component <---*/
export const Proudcts = () => {
  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          category={product.category}
          price={product.price}
          discountPrice={product.discountPrice}
          hasSale={product.hasSale}
          hasDiscount={product.hasDiscount}
          imageURL={product.image}
        />
      ))}
    </ProductsWrapper>
  )
}

/*---> Styles <---*/
const ProductsWrapper = styled.div`
  /* border: 1px solid yellow; */
  /* height: 1000px; */
  padding: 50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 75%;
  margin-right: 10px;

  @media (max-width: 1050px) {
    width: 100%;
  }
`
