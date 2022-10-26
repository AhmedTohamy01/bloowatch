import { Navbar } from '../../components/Navbar/Navbar'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { HomeMainContent } from '../../components/HomeMainContent/HomeMainContent'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageTitle title='SURFING' />
      <HomeMainContent />
    </>
  )
}
