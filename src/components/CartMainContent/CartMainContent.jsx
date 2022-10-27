import styled from 'styled-components'
import { ChevronUp, ChevronDown, X } from 'lucide-react'
import { CartTotal } from '../CartTotal/CartTotal'

/*---> Component <---*/
export const CartMainContent = () => {
  return (
    <MainWrapper>
      <ProductsWrapper>
        <HeaderWrapper>
          <IconField></IconField>
          <ProductField>PRODUCT</ProductField>
          <PriceField>PRICE</PriceField>
          <QuantityField>QUANTITY</QuantityField>
          <SubtotalField>SUBTOTAL</SubtotalField>
        </HeaderWrapper>
        <Divider />
        <ProductDetailsDesktop>
          <IconField>
            <X />
            <ProductImage src='./images/product1.png' />
          </IconField>
          <ProductField>KAYAK WITH PADDLES</ProductField>
          <PriceField>$130.00</PriceField>
          <QuantityField>
            <Quantity>1</Quantity>
            <Conrtrols>
              <ArrowIconUp
              // onClick={() => setQuantity(quantity + 1)}
              />
              <ControlsDivider />
              <ArrowIconDown
              // onClick={() =>
              //   quantity > 1 ? setQuantity(quantity - 1) : null
              // }
              />
            </Conrtrols>
          </QuantityField>
          <SubtotalField>$130.00</SubtotalField>
        </ProductDetailsDesktop>
        <ProductDetailsMobile>
          <MobileIconField>
            <X />
            <ProductImage src='./images/product1.png' />
          </MobileIconField>
          <MobileProductField>
            <div>Product:</div>
            <div>KAYAK WITH PADDLES</div>
          </MobileProductField>
          <MobilePriceField>
            <div>Price:</div>
            <div>$130.00</div>
          </MobilePriceField>
          <MobileQuantityField>
            <MobileQuantity>
              <div>Quantity:</div>
              <div>1</div>
            </MobileQuantity>
            <Conrtrols>
              <ArrowIconUp
              // onClick={() => setQuantity(quantity + 1)}
              />
              <ControlsDivider />
              <ArrowIconDown
              // onClick={() =>
              //   quantity > 1 ? setQuantity(quantity - 1) : null
              // }
              />
            </Conrtrols>
          </MobileQuantityField>
          <MobileSubtotalField>
            <div>Subtotal:</div>
            <div>$130.00</div>
          </MobileSubtotalField>
        </ProductDetailsMobile>
        <Divider />
        <ButtonsWrapper>
          <CartButton>APPLY COUPON</CartButton>
          <CartButton>UPDATE CART</CartButton>
        </ButtonsWrapper>
      </ProductsWrapper>
      <CartTotalWrapper>
        <CartTotal />
      </CartTotalWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  /* height: 1000px; */
  padding: 10%;
`

const ProductsWrapper = styled.div`
  /* border: 1px solid red; */
`

const CartTotalWrapper = styled.div`
  /* border: 1px solid red; */
`

const HeaderWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`

const ProductDetailsDesktop = styled.div`
  /* border: 1px solid red; */
  height: 150px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Divider = styled.div`
  border: 1px solid #d8d8d8;
`

const IconField = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`

const ProductField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 30%;
`

const PriceField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 15%;
`

const QuantityField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 20%;
  display: flex;
  align-items: center;
`

const SubtotalField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
`

const Quantity = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 14px;
  line-height: 19px;
  margin-right: 15px;
  min-width: 20px;
`

const Conrtrols = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  /* margin-right: 25px; */
`

const ArrowIconUp = styled(ChevronUp)`
  /* border: 1px solid red; */
  cursor: pointer;
`

const ArrowIconDown = styled(ChevronDown)`
  /* border: 1px solid red; */
  cursor: pointer;
`
const ControlsDivider = styled.div`
  border: 1px solid black;
  width: 22px;
`

const ButtonsWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 50px 14%;
  display: flex;

  @media (max-width: 1024px) {
    padding: 30px 0px;
    justify-content: start;
  }
`

const CartButton = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 50px;
  background: #0c0eb6;
  color: white;
  font-family: 'OpenSansSemibold';
  font-size: 12px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`

const ProductImage = styled.img`
  /* border: 1px solid red; */
  width: 35px;
  height: 104px;
`

const ProductDetailsMobile = styled.div`
  /* border: 1px solid red; */
  display: none;

  @media (max-width: 1024px) {
    display: initial;
  }
`

const MobileIconField = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  /* width: 50%; */
  justify-content: space-between;
`

const MobileProductField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const MobilePriceField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
`

const MobileQuantityField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
`

const MobileQuantity = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-right: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const MobileSubtotalField = styled.div`
  /* border: 1px solid red; */
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
`
