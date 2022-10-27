import styled from 'styled-components'

/*---> Component <---*/
export const CartTotal = ({ total }) => {
  return (
    <CartTotalWrapper>
      <Title>CART TOTAL</Title>
      <RowWrapper>
        <SubTitle>SUBTOTAL</SubTitle>
        <Data>${total}</Data>
      </RowWrapper>
      <Divider />
      <RowWrapper>
        <SubTitle>SHIPPING</SubTitle>
        <Data>
          <div>Enter your address to view shipping options</div>
          <span>Calculate shipping</span>
        </Data>
      </RowWrapper>
      <Divider />
      <RowWrapper>
        <SubTitle>TOTAL</SubTitle>
        <Data>${total}</Data>
      </RowWrapper>
      <RowWrapper>
        <CheckoutButton>PROCEED TO CHECKOUT</CheckoutButton>
      </RowWrapper>
    </CartTotalWrapper>
  )
}

/*---> Styles <---*/
const CartTotalWrapper = styled.div`
  width: 50%;
  margin-top: 50px;

  @media (max-width: 1550px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const Title = styled.p`
  font-family: 'OpenSansbold';
  font-size: 32px;
  line-height: 43px;
  margin-bottom: 40px;
`

const RowWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
`

const SubTitle = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 14px;
  line-height: 19px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 35%;
  }
`

const Data = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 14px;
  line-height: 19px;
  color: #959595;
  width: 50%;

  span {
    color: black;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 65%;
  }
`

const Divider = styled.div`
  border: 1px solid #d8d8d8;
`

const CheckoutButton = styled.div`
  width: 270px;
  height: 50px;
  color: white;
  background: #0c0eb6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
