import styled from 'styled-components'

/*---> Component <---*/
export const PageTitle = ({ title }) => {
  return <Wrapper>{title}</Wrapper>
}

/*---> Styles <---*/
const Wrapper = styled.div`
  border: 1px solid blue;
  background: #0c0eb7;
  padding: 80px 200px;
  font-size: 34px;
  line-height: 47px;
  color: white;

  @media (max-width: 720px) {
    padding: 40px;
  }
`
