import React from "react";
import styled from "styled-components/macro";
import GalleryPhotoOne from "../images/IMG_8344.JPG";
import GalleryPhotoTwo from "../images/IMG_8343.JPG";
import GalleryPhotoThree from "../images/IMG_8330.JPG";
import GalleryPhotoFour from "../images/IMG_8331.JPG";
import GalleryPhotoFive from "../images/IMG_8325.JPG";
import GalleryPhotoSix from "../images/IMG_8324.JPG";
import GalleryPhotoSeven from "../images/img17.jpg";
import GalleryPhotoEight from "../images/img28.jpg";
import GalleryPhotoNine from "../images/img34.jpg";
import GalleryPhotoTen from "../images/img35.jpg";
import GalleryPhotoEleven from "../images/img30.jpg";
import GalleryPhotoTwelve from "../images/img32.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const InfoRow = styled.div`
  justify-content: space-around;
  margin: 0 100px 0 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem 2rem 0rem;
  height: 100%;

  h1 {
    display: flex;
    justify-content: center;
    padding: 6rem 0 0 0;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }
  @media screen and (max-width: 320px) {
    padding-right: 5rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-content: center;
  padding: 0 0 2rem 0;
  flex-wrap: wrap;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px var(--clr-gray-light);
  background-color: white;
  position: relative;
  width: 370px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  height: 370px;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  @media screen and (max-width: 375px) {
    padding: 0 1rem;
  }
`;

const GridGallery = () => {
  return (
    <Section>
      <Container>
        <InfoRow>
          <InfoWrap>
            <h1>
              <strong>Hair Gallery</strong>
            </h1>
          </InfoWrap>
          <ImageContainer>
            <ImageWrap>
              <Image src={GalleryPhotoOne} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoTwo} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoThree} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoFour} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoFive} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoSix} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoSeven} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoEight} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoNine} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoTen} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoEleven} alt="GalleryPhoto" />
            </ImageWrap>
            <ImageWrap>
              <Image src={GalleryPhotoTwelve} alt="GalleryPhoto" />
            </ImageWrap>
          </ImageContainer>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default GridGallery;
