import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import HairOne from "../images/img48.jpg";
import HairTwo from "../images/img51.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;

  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  margin-bottom: 40px;

  h1 {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-right: 4rem;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  min-width: 550px;
  height: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-left: 4.5rem;
  }

  @media screen and (max-width: 540px) {
    padding-right: 7.5rem;
  }

  @media screen and (max-width: 414px) {
    padding-right: 10.5rem;
    padding-left: 0rem;
  }

  @media screen and (max-width: 375px) {
    padding-right: 13rem;
    padding-left: 0rem;
  }

  @media screen and (max-width: 360px) {
    padding-right: 14rem;
    padding-left: 0rem;
  }
  @media screen and (max-width: 320px) {
    padding-right: 16.25rem;
    padding-left: 0rem;
  }
  @media screen and (max-width: 280px) {
    padding-right: 18.75rem;
    padding-left: 0rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
width: 140px;
transition: 0.3s

&:hover {
  transform: translateY(-2px)
};`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 10px;
`;

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>Special</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={HairOne} alt="color and highlights" />
            <h2>
              Color & Highlights <br />
              <span>FREE</span> Treatment
            </h2>
            <InfoLink to="/about-us">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image src={HairTwo} alt="specials on makeup and hairstyles" />
            <h2>
              Ask For Our Specials On <br />
              Makeup & Hairstyle For Any Events
            </h2>
            <InfoLink to="/about-us">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
      <h3>Valid only with the flyer!</h3>
    </Section>
  );
};

export default Listings;
