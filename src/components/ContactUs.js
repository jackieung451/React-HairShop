import React from "react";
import styled from "styled-components";
import ImageOne from "../images/img22.jpg";

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem 0rem 0rem;
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

  @media screen and (min-width: 1024px) {
    iframe {
      min-width: 200px;
      max-width: 1000px;
      padding-right: 4rem;
    }

  @media screen and (max-width: 768px) {
    iframe {
      min-width: 200px;
      max-width: 1020px;
    }
  }
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
    font-size: 2 rem;
    display: flex;
    justify-content: flex-start;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;

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
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 60px;
    padding-bottom: 40px;
  }
`;

const ContactUs = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>Make an Appointment</h1>
              <p>Noel's Hair Salon</p>
              <p>2928 N Broadway</p>
              <p>Los Angeles, CA 90031</p>
              <p>Phone: 323-640-0720</p>
            </Content>
            <br />
            <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52882.89438490749!2d-118.23462349586569!3d34.064876692631266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7a1cd7c44cd%3A0x1665fafbd23bd4ff!2sNoel&#39;s%20Hair%20Salon!5e0!3m2!1sen!2sus!4v1626927950271!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageOne} alt="hairstyle" />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default ContactUs;
