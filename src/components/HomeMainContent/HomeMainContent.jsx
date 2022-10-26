import styled from 'styled-components'
import { Proudcts } from '../Products/Products'
import { Sidebar } from '../Sidebar/Sidebar'

/*---> Component <---*/
export const HomeMainContent = () => {
  return (
    <MainWrapper>
      <Proudcts />
      <Sidebar />
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 100px 7%;
  display: flex;

  @media (max-width: 1280px) {
    padding: 100px 30px;
  }

  @media (max-width: 400px) {
    padding: 100px 20px;
  }
`
