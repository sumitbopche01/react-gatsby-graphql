import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiances for you</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsors</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsors</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsors</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw-1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
  margin-top: 40px;
  margin-bottom: 40px;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (msx-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`
