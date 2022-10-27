import styled from 'styled-components'

/*---> Component <---*/
export const Footer = () => {
  return (
    <FooterWrapper>
      <AboutWrapper>
        <Title>ABOUT</Title>
        <AboutContent>
          Bloowatch is specialized software for watersports schools (surfing,
          kitesurfing, sailing, and diving) and outdoor activity providers
          (skiing, climbing).
        </AboutContent>
      </AboutWrapper>
      <ContactWrapper>
        <Title>CONTACT</Title>
        <Content>
          <Line>156-677-124-442-2887</Line>
          <Line>wave@bloowatch.com</Line>
          <Line>Spain</Line>
        </Content>
      </ContactWrapper>
      <UsefulLinksWrapper>
        <Title>USEFUL LINKS</Title>
        <Content>
          <Link>About us</Link>
          <Link>History</Link>
          <Link>Contact us</Link>
        </Content>
      </UsefulLinksWrapper>
      <InstagramWrapper>
        <Title>INSTAGRAM</Title>
        <ImagesWrapper>
          <Image src='./images/insta1.png' alt='instagram photo' />
          <Image src='./images/insta2.png' alt='instagram photo' />
          <Image src='./images/insta3.png' alt='instagram photo' />
          <Image src='./images/insta4.png' alt='instagram photo' />
          <Image src='./images/insta5.png' alt='instagram photo' />
        </ImagesWrapper>
      </InstagramWrapper>
    </FooterWrapper>
  )
}

/*---> Styles <---*/
const FooterWrapper = styled.div`
  background: black;
  padding: 50px 70px 200px 70px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    padding: 20px 20px 100px 20px;
  }
`

const AboutWrapper = styled.div`
  margin-right: 5%;
`

const ContactWrapper = styled.div`
  margin-right: 5%;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`

const UsefulLinksWrapper = styled.div`
  margin-right: 10%;

  @media (max-width: 1350px) {
    margin-right: 5%;
  }

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`

const InstagramWrapper = styled.div`
  @media (max-width: 1260px) {
    margin-top: 30px;
  }
`

const Title = styled.p`
  font-family: 'OpenSansbold';
  font-size: 14px;
`

const AboutContent = styled.p`
  width: 312px;
  margin-top: 45px;
  font-size: 13px;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`

const Content = styled.div`
  margin-top: 20px;
`

const Line = styled.div`
  margin-bottom: 10px;
`

const Link = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
`

const ImagesWrapper = styled.div`
  margin-top: 20px;
`

const Image = styled.img`
  margin-right: 10px;
`
