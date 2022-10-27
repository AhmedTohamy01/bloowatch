import { useState, useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styled from 'styled-components'
import { ChevronUp, ChevronDown } from 'lucide-react'

/*---> Component <---*/
export const ProductMainContent = () => {
  const { activeProduct, cartItems, setCartItems } = useContext(MainContext)
  const [mainPhoto, setMainPhoto] = useState(activeProduct.imageURL)
  const [quantity, setQuantity] = useState(1)

  if (!activeProduct.images)
    return <>Loading ...(I know this issue, We can handle this but it need time, return back to home page)</>

  return (
    <MainWrapper>
      <ProductImagesWrapper>
        <SideImagesWrapper>
          {activeProduct.images.map((image, index) => (
            <SideImageWrapper onClick={() => setMainPhoto(image)} key={index}>
              <SideImage src={image} alt='product image' />
            </SideImageWrapper>
          ))}
        </SideImagesWrapper>
        <MainImageWrapper>
          <MainImage src={mainPhoto} alt='product image' />
        </MainImageWrapper>
      </ProductImagesWrapper>
      <ProductInfoWrapper>
        <Name>{activeProduct.name}</Name>
        <PriceWrapper>
          <Price>{activeProduct.price}</Price>
          {activeProduct.hasDiscount && (
            <Discount>{activeProduct.discountPrice}</Discount>
          )}
        </PriceWrapper>
        <Desciption>{activeProduct.description}</Desciption>
        <ProductQuantityWrapper>
          <Quantity>{quantity}</Quantity>
          <Conrtrols>
            <ArrowIconUp onClick={() => setQuantity(quantity + 1)} />
            <Divider />
            <ArrowIconDown
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
            />
          </Conrtrols>
          <CartButton
            onClick={() =>
              setCartItems([...cartItems, { quantity, item: activeProduct }])
            }
          >
            ADD TO CART
          </CartButton>
        </ProductQuantityWrapper>
        <OtherInfo>
          <span>SKU:</span> {activeProduct.sku}
        </OtherInfo>
        <OtherInfo>
          <span>CATEGORIES:</span> {activeProduct.category}
        </OtherInfo>
        <OtherInfo>
          <span>TAGS:</span> {activeProduct.tag}
        </OtherInfo>
      </ProductInfoWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  padding: 100px 12%;
  display: flex;

  @media (max-width: 1500px) {
    padding: 100px 5%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ProductImagesWrapper = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`

const ProductInfoWrapper = styled.div`
  width: 50%;
  padding: 20px 60px;

  @media (max-width: 1200px) {
    width: 40%;
    padding: 20px 40px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px;
    margin-top: 40px;
  }
`

const MainImageWrapper = styled.div`
  width: 530px;
  height: 605px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainImage = styled.img``

const SideImagesWrapper = styled.div`
  margin-right: 40px;
`

const SideImageWrapper = styled.div`
  width: 110px;
  height: 140px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`

const SideImage = styled.img`
  width: 53px;
  height: 115px;
`

const Name = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const Price = styled.p`
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

const Discount = styled.p`
  font-size: 16px;
  line-height: 22px;
  width: 91px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: line-through;
`

const Desciption = styled.p`
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 30px;
  width: 450px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 450px;
  }
`

const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`

const Quantity = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 14px;
  line-height: 19px;
  margin-right: 25px;
  min-width: 20px;
`

const Conrtrols = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`

const ArrowIconUp = styled(ChevronUp)`
  cursor: pointer;
`

const ArrowIconDown = styled(ChevronDown)`
  cursor: pointer;
`
const Divider = styled.div`
  border: 1px solid black;
  width: 22px;
`

const CartButton = styled.div`
  border: 1px solid black;
  width: 176px;
  height: 46px;
  font-family: 'OpenSansSemibold';
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const OtherInfo = styled.p`
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 20px;

  span {
    font-weight: bold;
  }
`
