import styled from 'styled-components'
import { ShoppingCart } from 'lucide-react'

/*---> Component <---*/
export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Logo alt='BlooWatch logo' src='./images/logo.png' />
      </LogoWrapper>
      <LinksWrapper>
        <Link>SHOP</Link>
        <Link>BLOG</Link>
        <Link>SEARCH</Link>
        <Link>
          <CartIcon />
          CART
        </Link>
      </LinksWrapper>
    </NavbarWrapper>
  )
}

/*---> Styles <---*/
const NavbarWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 80px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`

const LogoWrapper = styled.div`
  /* border: 1px solid green; */

  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
`

const Logo = styled.img`
  /* border: 1px solid yellow; */
`

const LinksWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
`

const Link = styled.div`
  /* border: 1px solid yellow; */
  margin-left: 100px;
  font-family: 'OpenSansSemibold';
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 990px) {
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 30px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const CartIcon = styled(ShoppingCart)`
  /* border: 1px solid yellow; */
  color: gray;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`
