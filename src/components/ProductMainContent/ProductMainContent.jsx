import styled from 'styled-components'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

/*---> Component <---*/
export const ProductMainContent = () => {
  const { activeProduct, cartItems, setCartItems } = useContext(MainContext)
  const [mainPhoto, setMainPhoto] = useState(activeProduct.imageURL)
  const [quantity, setQuantity] = useState(1)

  if (!activeProduct.images)
    return <>Loading ...(I know this, This can be handled later)</>

  return (
    <MainWrapper>
      <ProductImagesWrapper>
        <SideImagesWrapper>
          {activeProduct.images.map((image, index) => (
            <SideImageWrapper onClick={() => setMainPhoto(image)} key={index}>
              <SideImage src={image} />
            </SideImageWrapper>
          ))}
        </SideImagesWrapper>
        <MainImageWrapper>
          <MainImage src={mainPhoto} />
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
  /* border: 1px solid yellow; */
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
  /* border: 1px solid green; */
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  width: 530px;
  height: 605px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainImage = styled.img`
  /* border: 1px solid red; */
`

const SideImagesWrapper = styled.div`
  /* border: 1px solid red; */
  margin-right: 40px;
`

const SideImageWrapper = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  width: 53px;
  height: 115px;
`

const Name = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`

const PriceWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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

const Desciption = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`

const Quantity = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansSemibold';
  font-size: 14px;
  line-height: 19px;
  margin-right: 25px;
  min-width: 20px;
`

const Conrtrols = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`

const ArrowIconUp = styled(ChevronUp)`
  /* border: 1px solid red; */
  cursor: pointer;
`

const ArrowIconDown = styled(ChevronDown)`
  /* border: 1px solid red; */
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

const OtherInfo = styled.div`
  /* border: 1px solid black; */
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 20px;

  span {
    font-weight: bold;
  }
`

const ProductDetailsWrapper = styled.div`
  /* border: 1px solid red; */
  width: 530px;
  height: 605px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`
