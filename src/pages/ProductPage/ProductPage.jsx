import { Navbar } from '../../components/Navbar/Navbar'
import { ProductMainContent } from '../../components/ProductMainContent/ProductMainContent'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { Footer } from '../../components/Footer/Footer'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'
import { RecommendedProducts } from '../../components/RecommendedProduct/RecommendedProducts'

export const ProductPage = () => {
  return (
    <>
      <Navbar />
      <PageTitle title='TUNDER SHORT BOARD' />
      <ProductMainContent />
      <ProductDetails />
      <RecommendedProducts />
      <Footer />
    </>
  )
}
