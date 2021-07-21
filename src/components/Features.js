import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/img7.jpg";

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
  margin-bottom: 90px;
`;

const Content = styled.div`
  flex: 0 0 50%;
  line-height: 1.8;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2 rem;
    display: flex;

    justify-content: center;
  }

  ul {
    margin-bottom: 1rem;
    line-height: 1.5;
    font-weight: 400px;
    padding: 0rem 12rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;
  margin-bottom: 90px;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>Our Services</h1>
              <ul>
                <li>Make Up</li>
                <li>Hair Dye</li>
                <li>Hair Cuts</li>
                <li>Hair Style</li>
                <li>Permanent</li>
                <li>Comb Over</li>
                <li>Permanent Straightening Wax</li>
                <li>Low Taper</li>
                <li>High Taper</li>
                <li>Under Cut</li>
                <li>Mid Fade Pompadour</li>
                <div>
                  <Button to="/contact-us">Call Now</Button>
                </div>
              </ul>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
