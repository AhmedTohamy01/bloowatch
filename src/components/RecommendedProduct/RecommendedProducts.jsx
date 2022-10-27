import styled from 'styled-components'
import { ProductCard } from '../ProductCard/ProductCard'

/*---> Component <---*/
export const RecommendedProducts = () => {
  return (
    <MainWrapper>
      <CardWrapper>
        <ProductCard
          name={'LIGTTWAVE BOARD'}
          imageURL={'/images/product1.png'}
          category={'Equipment, Board'}
          price={150}
          hasSale={false}
          hasDiscount={false}
        />
      </CardWrapper>
      <CardWrapper>
        <ProductCard
          name={'SCUBA DIVING WETSUIT'}
          imageURL={'/images/product2.png'}
          category={'Equipment, Board'}
          price={160}
          hasSale={false}
          hasDiscount={false}
        />
      </CardWrapper>
      <CardWrapper>
        <ProductCard
          name={'Woman’s Wetsuit Pro'}
          imageURL={'/images/product3.png'}
          category={'Equipment, Scubadiving'}
          price={150}
          hasSale={false}
          hasDiscount={false}
        />
      </CardWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
`

const CardWrapper = styled.div`
  margin-bottom: 30px;
`
