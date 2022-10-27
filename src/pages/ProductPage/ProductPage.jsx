import { Navbar } from '../../components/Navbar/Navbar'
import { ProductMainContent } from '../../components/ProductMainContent/ProductMainContent'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { Footer } from '../../components/Footer/Footer'

export const ProductPage = () => {
  return (
    <>
      <Navbar />
      <PageTitle title='TUNDER SHORT BOARD' />
      <ProductMainContent />
      <Footer />
    </>
  )
}
