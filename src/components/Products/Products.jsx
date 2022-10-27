import styled from 'styled-components'
import { ProductCard } from '../ProductCard/ProductCard'
import products from '../../data/products.json'

/*---> Component <---*/
export const Proudcts = () => {
  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          imageURL={product.imageURL}
          category={product.category}
          price={product.price}
          hasSale={product.hasSale}
          hasDiscount={product.hasDiscount}
          discountPrice={product.discountPrice}
          description={product.description}
          sku={product.sku}
          tag={product.tag}
          images={product.images}
          id={product.id}
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
