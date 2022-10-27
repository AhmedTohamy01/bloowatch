import styled from 'styled-components'

/*---> Component <---*/
export const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>
      <TabsWrapper>
        <Tab>DESCRIPTION</Tab>
        <Tab>INFORMATION</Tab>
        <Tab>REVIEWS</Tab>
      </TabsWrapper>
      <ProductDetailsContent>
        Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue
        quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris
        signi fer umque ex. Et mel meis nostrum, te appa reat tacimates
        tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim
        voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria
        mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer
        decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim,
        et vis labore in corrupte ad agam ridens.
      </ProductDetailsContent>
    </ProductDetailsWrapper>
  )
}

/*---> Styles <---*/
const ProductDetailsWrapper = styled.div`
  margin-top: 30px;
  padding: 30px 12%;

  @media (max-width: 1200px) {
    padding: 0px 5%;
  }
`

const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const Tab = styled.p`
  font-family: 'OpenSansbold';
  font-size: 14px;
  line-height: 19px;
  margin-right: 5%;
  cursor: pointer;
`

const ProductDetailsContent = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: #858585;
`
