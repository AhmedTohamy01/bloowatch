import styled from 'styled-components'
import { Star } from 'lucide-react'

/*---> Component <---*/
export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Section>
        <Title>SEARCH</Title>
        <SearchInput placeholder='Search for a product' />
      </Section>
      <Section>
        <Title>PRICE</Title>
        <PriceFilterWrapper></PriceFilterWrapper>
      </Section>
      <Section>
        <Title>CATEGORIES</Title>
        <Category>Boards</Category>
        <Category>Canoenig</Category>
        <Category>Equipment</Category>
        <Category>Paddling</Category>
        <Category>Rental</Category>
        <Category>Scubadiving</Category>
        <Category>Surfing</Category>
      </Section>
      <Section>
        <Title>RELATED PRODUCTS</Title>
        <ProductWrapper>
          <ImageWrapper>
            <Image src='./images/product1.png' alt='product image' />
          </ImageWrapper>
          <InfoWrapper>
            <ProductName>TUNDER BOARD</ProductName>
            <Review>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </Review>
          </InfoWrapper>
        </ProductWrapper>
        <ProductWrapper>
          <ImageWrapper>
            <Image src='./images/product1.png' />
          </ImageWrapper>
          <InfoWrapper>
            <ProductName>SHORT SURFBOARD FOAM</ProductName>
            <Review>
              <FilledStar />
              <FilledStar />
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
            </Review>
          </InfoWrapper>
        </ProductWrapper>
        <ProductWrapper>
          <ImageWrapper>
            <Image src='./images/product1.png' />
          </ImageWrapper>
          <InfoWrapper>
            <ProductName>MADMAX BOARD</ProductName>
            <Review>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </Review>
          </InfoWrapper>
        </ProductWrapper>
      </Section>
      <SideBarImage src='./images/sidebar.png' alt='product image'/>
    </SidebarWrapper>
  )
}

/*---> Styles <---*/
const SidebarWrapper = styled.div`
  width: 25%;
  margin-left: 10px;
  padding-top: 110px;

  @media (max-width: 1050px) {
    display: none;
  }
`

const Section = styled.div`
  margin-bottom: 50px;
`

const Title = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 15px;
`

const SearchInput = styled.input`
  width: 85%;
  background: #fafafa;
  padding: 22px 17px;
  outline: none;
  border: transparent;

  ::placeholder {
    font-size: 14px;
    line-height: 19px;
    color: #878787;
  }
`

const PriceFilterWrapper = styled.div`
  height: 100px;
`

const Category = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 18px;
  line-height: 38px;
  margin-bottom: 5px;
  color: #848484;
  cursor: pointer;

  :hover {
    color: black;
  }
`

const ProductWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const ImageWrapper = styled.div`
  min-width: 90px;
  height: 115px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

const Image = styled.img`
  width: 40px;
  height: 90px;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductName = styled.p`
  font-family: 'OpenSansSemibold';
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`

const Review = styled.div``

const EmptyStar = styled(Star)`
  color: #e67e22;
  width: 20px;
  height: 20px;
`

const FilledStar = styled(Star)`
  color: #e67e22;
  fill: #e67e22;
  width: 20px;
  height: 20px;
`

const SideBarImage = styled.img`
  width: 100%;
  margin-top: 40px;
`
