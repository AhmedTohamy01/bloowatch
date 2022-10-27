import styled from 'styled-components'
import { Link } from 'react-router-dom'

/*---> Component <---*/
export const ProductCard = ({
  name,
  category,
  price,
  discountPrice,
  hasSale,
  hasDiscount,
  imageURL,
}) => {
  return (
    <CardWrapper>
      {hasSale && <SaleStamp>Sale</SaleStamp>}
      <Link to='/product'>
        <ImageWrapper>
          <ProductImage src={imageURL} />
        </ImageWrapper>
      </Link>
      <ProductName>{name}</ProductName>
      <Category>{category}</Category>
      <PriceWrapper>
        <Price>{price}</Price>
        {hasDiscount && <Discount>{discountPrice}</Discount>}
      </PriceWrapper>
    </CardWrapper>
  )
}

/*---> Styles <---*/
const CardWrapper = styled.div`
  /* border: 1px solid red; */
  width: 322px;
  /* min-height: 575px; */
  margin: auto;
  padding: 70px 0px 0px 0px;
  /* margin-bottom: 30px; */
  margin: 3% 2%;

  @media (max-width: 400px) {
    margin: 3% 0px;
  }
`

const ImageWrapper = styled.div`
  /* border: 1px solid yellow; */
  background-color: #fafafa;
  width: 322px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  z-index: 1;
`

const ProductImage = styled.img`
  /* border: 1px solid green; */
  width: 165px;
  height: 435px;
`

const SaleStamp = styled.div`
  /* border: 1px solid green; */
  width: 70px;
  height: 70px;
  background-color: #0c0eb7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: -35px;
  position: absolute;
  margin-left: 15px;
  font-family: 'OpenSansSemibold';
  font-size: 18px;
  line-height: 24px;
`

const ProductName = styled.div`
  /* border: 1px solid green; */
  font-family: 'OpenSansSemibold';
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Category = styled.div`
  /* border: 1px solid green; */
  font-size: 14px;
  line-height: 19px;
  color: #0c0eb7;
  text-align: center;
  margin-bottom: 20px;
`

const PriceWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Price = styled.div`
  /* border: 1px solid green; */
  font-size: 16px;
  line-height: 22px;
  color: white;
  background: #0c0eb7;
  /* margin: auto; */
  width: 91px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Discount = styled.div`
  /* border: 1px solid green; */
  font-size: 16px;
  line-height: 22px;
  /* margin: auto; */
  width: 91px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: line-through;
`
