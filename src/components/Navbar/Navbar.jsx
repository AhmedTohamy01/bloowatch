import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import styled from 'styled-components'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

/*---> Component <---*/
export const Navbar = () => {
  const { cartItems } = useContext(MainContext)

  return (
    <NavbarWrapper>
      <Link to='/'>
        <LogoWrapper>
          <Logo alt='BlooWatch logo' src='./images/logo.png' />
        </LogoWrapper>
      </Link>
      <LinksWrapper>
        <NavLink>SHOP</NavLink>
        <NavLink>BLOG</NavLink>
        <NavLink>SEARCH</NavLink>
        <NavLink>
          <Link to='/cart'>
            <CartIcon />
            CART
          </Link>
          {cartItems.length > 0 && (
            <Link to='/cart'>
              <CartItems>{cartItems.length}</CartItems>
            </Link>
          )}
        </NavLink>
      </LinksWrapper>
    </NavbarWrapper>
  )
}

/*---> Styles <---*/
const NavbarWrapper = styled.div`
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
  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
`

const Logo = styled.img``

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NavLink = styled.p`
  margin-left: 100px;
  font-family: 'OpenSansSemibold';
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a:link,
  a:visited {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 990px) {
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 30px;
  }

  @media (max-width: 580px) {
    font-size: 14px;
    margin-right: 20px;
  }
`

const CartIcon = styled(ShoppingCart)`
  color: gray;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

const CartItems = styled.p`
  background: red;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-left: 5px;
`
