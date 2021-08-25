import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/img7.jpg";

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  height: 100vh;
  max-height: 1100px;
  overflow: hidden;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    height: 100vh;
  }

  @media screen and (max-width: 768px) {
    height: 160vh;
    max-width: 400px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 360px) {
    height: 190vh;
    max-width: 400px;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  background: #fff;
  padding: 5rem 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    max-height: 1100px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  max-width: 500px;

  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 1100px;
  }
  @media screen and (max-width: 768px) {
    max-width: 1025px;
    display: flex;
    flex-direction: column;
    padding-right: 0rem;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 3rem 2rem 0rem 2rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    max-height: 1100px;
    flex: 0 0 25%;
    padding-top: 0;
    padding-bottom: 8rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 27rem;
  }
  @media screen and (max-width: 414px) {
    padding-top: 16rem;
  }
`;

const Content = styled.div`
  flex: 0 0 50%;
  line-height: 1.8;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10rem;
    max-width: 120rem;
    min-width: 50rem;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    margin: 14rem;
    margin-left: 0;
    padding: 0rem 35rem 0rem 0rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2 rem;
    display: flex;
    justify-content: center;
    padding-left: 10rem;

    @media screen and (max-width: 768px) {
      padding-left: 0rem;
    }
  }

  ul {
    margin-bottom: 1rem;
    line-height: 2;
    font-weight: 400px;
    padding-left: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
      padding-left: 20rem;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 0rem;
      justify-content: center;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 0rem;
      justify-content: center;
      width: 570px;
      word-wrap: break-word;
    }
  }

  div {
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;

    @media screen and (min-width: 1024px) {
      padding-right: 10rem;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 0rem;
      justify-content: center;
      padding-right: 12rem;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 70rem;
    }
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  max-width: 850px;
  height: 100%;
  width: 45%;

  @media screen and (min-width: 1024px) {
    position: relative;
    flex: 0 0 75%;
    max-width: 140px;
    margin: 0rem auto;
    left: 0;
    display: flex;
    padding-left: 3rem;
    height: 45rem;
    max-width: 500rem;
    min-width: 35rem;
    padding-bottom: 15rem;
  }

  @media screen and (max-width: 768px) {
    height: 525px;
    top: -65px;
    width: 70%;
    margin: 3rem auto;
    left: 0;
    padding-top: 1rem;

    @media screen and (max-width: 414px) {
      height: 325px;
      margin-bottom: 0;
    }
    @media screen and (max-width: 280px) {
      height: 255px;
      margin-bottom: 0;
    }
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 70px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 414px) {
    padding-bottom: 0;
  }
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
                  <Button to="/contact">Call Now</Button>
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
