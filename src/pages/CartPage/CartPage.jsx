import { Navbar } from '../../components/Navbar/Navbar'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { CartMainContent } from '../../components/CartMainContent/CartMainContent'
import { Footer } from '../../components/Footer/Footer'

export const CartPage = () => {
  return (
    <>
      <Navbar />
      <PageTitle title='CART' />
      <CartMainContent />
      <Footer />
    </>
  )
}
