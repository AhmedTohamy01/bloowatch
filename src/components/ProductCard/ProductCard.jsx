import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/*---> Component <---*/
export const ProductCard = ({
  name,
  imageURL,
  category,
  price,
  hasSale,
  hasDiscount,
  discountPrice,
  description,
  sku,
  tag,
  images,
  id,
}) => {
  const { setActiveProduct } = useContext(MainContext)

  const handleProductClick = () => {
    setActiveProduct({
      name,
      imageURL,
      category,
      price,
      hasSale,
      hasDiscount,
      discountPrice,
      description,
      sku,
      tag,
      images,
      id,
    })
  }

  return (
    <CardWrapper>
      {hasSale && <SaleStamp>Sale</SaleStamp>}
      <Link to='/product' onClick={handleProductClick}>
        <ImageWrapper>
          <ProductImage src={imageURL} />
        </ImageWrapper>
      </Link>
      <ProductName>{name}</ProductName>
      <Category>{category}</Category>
      <PriceWrapper>
        <Price>${price}.00</Price>
        {hasDiscount && <Discount>{discountPrice}</Discount>}
      </PriceWrapper>
    </CardWrapper>
  )
}

/*---> Styles <---*/
const CardWrapper = styled.div`
  width: 322px;
  margin: auto;
  padding: 70px 0px 0px 0px;
  margin: 3% 2%;

  @media (max-width: 400px) {
    margin: 3% 0px;
  }
`

const ImageWrapper = styled.div`
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
  width: 165px;
  height: 435px;
`

const SaleStamp = styled.div`
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
  font-family: 'OpenSansSemibold';
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Category = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #0c0eb7;
  text-align: center;
  margin-bottom: 20px;
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Price = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: white;
  background: #0c0eb7;
  width: 91px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Discount = styled.div`
  font-size: 16px;
  line-height: 22px;
  width: 91px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: line-through;
`
