import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styled from 'styled-components'
import { ChevronUp, ChevronDown, X } from 'lucide-react'
import { CartTotal } from '../CartTotal/CartTotal'

/*---> Component <---*/
export const CartMainContent = () => {
  const { cartItems, setCartItems } = useContext(MainContext)

  const getTotal = () => {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      const itemTotal = cartItems[i].quantity * cartItems[i].item.price
      total += itemTotal
    }
    return total
  }

  if (cartItems.length === 0)
    return <CartEmptyState>No items available in the cart!</CartEmptyState>

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
        {cartItems.map((cartItem, index) => (
          <ProductDetailsDesktop key={cartItem.id}>
            <IconField>
              <DeleteIcon
                onClick={() => {
                  cartItems.splice(index, 1)
                  const newCartItems = [...cartItems]
                  setCartItems(newCartItems)
                }}
              />
              <ProductImage src={cartItem.item.imageURL} alt='product image'/>
            </IconField>
            <ProductField>{cartItem.item.name}</ProductField>
            <PriceField>${cartItem.item.price}.00</PriceField>
            <QuantityField>
              <Quantity>{cartItem.quantity}</Quantity>
              <Conrtrols>
                <ArrowIconUp />
                <ControlsDivider />
                <ArrowIconDown />
              </Conrtrols>
            </QuantityField>
            <SubtotalField>
              ${cartItem.quantity * cartItem.item.price}.00
            </SubtotalField>
          </ProductDetailsDesktop>
        ))}

        {cartItems.map((cartItem, index) => (
          <ProductDetailsMobile key={cartItem.id}>
            <MobileIconField>
              <DeleteIcon
                onClick={() => {
                  cartItems.splice(index, 1)
                  const newCartItems = [...cartItems]
                  setCartItems(newCartItems)
                }}
              />
              <ProductImage src={cartItem.item.imageURL} />
            </MobileIconField>
            <MobileProductField>
              <div>Product:</div>
              <div>{cartItem.item.name}</div>
            </MobileProductField>
            <MobilePriceField>
              <div>Price:</div>
              <div>${cartItem.item.price}.00</div>
            </MobilePriceField>
            <MobileQuantityField>
              <MobileQuantity>
                <div>Quantity:</div>
                <div>{cartItem.quantity}</div>
              </MobileQuantity>
              <Conrtrols>
                <ArrowIconUp />
                <ControlsDivider />
                <ArrowIconDown />
              </Conrtrols>
            </MobileQuantityField>
            <MobileSubtotalField>
              <div>Subtotal:</div>
              <div>${cartItem.quantity * cartItem.item.price}.00</div>
            </MobileSubtotalField>
          </ProductDetailsMobile>
        ))}

        <Divider />
        <ButtonsWrapper>
          <CartButton>APPLY COUPON</CartButton>
          <CartButton>UPDATE CART</CartButton>
        </ButtonsWrapper>
      </ProductsWrapper>
      <CartTotalWrapper>
        <CartTotal total={getTotal()} />
      </CartTotalWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  padding: 10%;
`

const ProductsWrapper = styled.div``

const CartTotalWrapper = styled.div``

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`

const ProductDetailsDesktop = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`

const ProductField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 30%;
`

const PriceField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 15%;
`

const QuantityField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  width: 20%;
  display: flex;
  align-items: center;
`

const SubtotalField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
`

const Quantity = styled.p`
  font-family: 'OpenSansbold';
  font-size: 14px;
  line-height: 19px;
  margin-right: 15px;
  min-width: 20px;
`

const Conrtrols = styled.div`
  display: flex;
  flex-direction: column;
`

const ArrowIconUp = styled(ChevronUp)`
  cursor: pointer;
`

const ArrowIconDown = styled(ChevronDown)`
  cursor: pointer;
`
const ControlsDivider = styled.div`
  border: 1px solid black;
  width: 22px;
`

const ButtonsWrapper = styled.div`
  padding: 50px 14%;
  display: flex;

  @media (max-width: 1024px) {
    padding: 30px 0px;
    justify-content: start;
  }
`

const CartButton = styled.div`
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
  width: 35px;
  height: auto;
`

const ProductDetailsMobile = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: initial;
  }
`

const MobileIconField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-between;
`

const MobileProductField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const MobilePriceField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`

const MobileQuantityField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`

const MobileQuantity = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-right: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const MobileSubtotalField = styled.p`
  font-family: 'OpenSansbold';
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`

const DeleteIcon = styled(X)`
  cursor: pointer;
`

const CartEmptyState = styled.p`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: #959595;
  font-family: 'OpenSansSemibold';
  padding: 20px;
  text-align: center;
`
