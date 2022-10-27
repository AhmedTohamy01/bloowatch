import styled from 'styled-components'

/*---> Component <---*/
export const PageTitle = ({ title }) => {
  return <Wrapper>{title}</Wrapper>
}

/*---> Styles <---*/
const Wrapper = styled.p`
  background: #0c0eb7;
  padding: 80px 200px;
  font-size: 34px;
  line-height: 47px;
  color: white;

  @media (max-width: 1280px) {
    padding: 80px 120px;
  }

  @media (max-width: 1024px) {
    padding: 40px 100px;
  }

  @media (max-width: 720px) {
    padding: 40px;
  }
`
