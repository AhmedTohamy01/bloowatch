import { Navbar } from '../../components/Navbar/Navbar'
import { ProductMainContent } from '../../components/ProductMainContent/ProductMainContent'
import { PageTitle } from '../../components/PageTitle/PageTitle'

export const ProductPage = () => {
  return (
    <>
      <Navbar />
      <PageTitle title='TUNDER SHORT BOARD' />
      <ProductMainContent />
    </>
  )
}
