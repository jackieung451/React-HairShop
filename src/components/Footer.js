import React from "react";
import styled from "styled-components/macro";
import LogoOne from "../images/PaulMitch.jpg";
import LogoTwo from "../images/Redken.jpg";
import LogoThree from "../images/Italy.jpg";
import LogoFour from "../images/JohnnyBLogo.jpg";
import LogoFive from "../images/AmCrew.jpg";
import LogoSix from "../images/joiartco.jpg";

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  padding-top: 0;
  margin-top: 0;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 8rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding-top: 10px;

  h6 {
    font-size: clamp(2rem, 8vw, 3rem);
    display: flex;
    justify-content: center;
    text-align: center;
  }

  p {
    display: flex;
    justify-content: center;
    line-height: 3;
    text-align: center;
  }
`;

const FooterInfo = styled.div`
  padding: 1rem 0rem 2rem 0rem;
  line-height: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const Image = styled.img`
  justify-content: center;
  padding: 0rem 0rem;
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h6>OPEN: Monday 1:00pm - 7:00pm</h6>
            <h6>Tuesday to Saturday 10:00am - 7:00pm</h6>
            <h6>
              <h6>Sunday 11:00am - 5:00pm</h6>
            </h6>
            <p>2928 N Broadway Los Angeles, CA 90031</p>
            <p>Call Now 323.640.0720</p>
          </Quote>
        </FooterTop>
        <FooterInfo>
          <Image src={LogoOne} alt="logo" />
          <Image src={LogoTwo} alt="logo" />
          <Image src={LogoThree} alt="logo" />
          <Image src={LogoFour} alt="logo" />
          <Image src={LogoFive} alt="logo" />
          <Image src={LogoSix} alt="logo" />
        </FooterInfo>
      </Container>
    </Section>
  );
};

export default Footer;
