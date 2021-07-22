import React from "react";
import styled from "styled-components/macro";
import HistoryOne from "../images/img24.jpg";
import HistoryTwo from "../images/img19.jpg";
import HistoryThree from "../images/img23.jpg";
import HistoryFour from "../images/img25.jpg";
import HistoryFive from "../images/img5.jpg";
import HistorySix from "../images/img26.jpg";
import HistorySeven from "../images/img17.jpg";
import HistoryEight from "../images/img28.jpg";
import HistoryNine from "../images/img34.jpg";
import HistoryTen from "../images/img35.jpg";
import HistoryEleven from "../images/img30.jpg";
import HistoryTwelve from "../images/img32.jpg";
import { Button } from "./Button";
// import VisibilitySensor from "react-visibility-sensor";

// export default function GridGallery({ images }) {
//   const [imagesShownArray, setImagesShownArray] = useState(
//     Array(images.length).fill(false)
//   );

//   const imageVisibleChange = (index, isVisible) => {
//     if (isVisible) {
//       setImagesShownArray((currentImagesShownArray) => {
//         currentImagesShownArray[index] = true;
//         return [...currentImagesShownArray];
//       });
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 gap-1">
//       {images &&
//         images.map((imageUrl, index) => (
//           <VisibilitySensor
//             key={index}
//             partialVisibility={true}
//             offset={{ bottom: 80 }}
//             onChange={(isVisible) => imageVisibleChange(index, isVisible)}
//           >
//             <GridGalleryCard images={imageUrl} show={imagesShownArray[index]} />
//           </VisibilitySensor>
//         ))}
//     </div>
//   );
// }

// function GridGalleryCard({ imageUrl, show }) {
//   return (
//     <div
//       className={`relative transition ease-in duration-300 transform ${
//         show ? "" : "translate-y-16 opacity-0"
//       }`}
//     >
//       <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//         <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
//           Hello World
//         </div>
//       </div>
//       <img src={imageUrl} alt="" />
//     </div>
//   );
// }

// const WrapperFlex = styled.div`
//   padding: 3.5rem 0rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;

/* display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center; */

// `;

// const Container = styled.div`
//   overflow: hidden;
//   box-shadow: 0px 2px 8px 0px var(--clr-gray-light);
//   background-color: white;
//   text-align: center;
//   border-radius: 1rem;
//   position: relative;
//   width: 280px;
//   margin-bottom: 1rem;
//   margin-left: 1rem;
// `;
// const BannerImg = styled.div`
//   position: absolute;
//   height: 10rem;
//   width: 100%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

/* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* padding: 2rem 1rem; */}
`;

const InfoRow = styled.div`
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  ${"" /* padding: 1rem 0rem; */}
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
  ${"" /* min-height: 550px; */}
  height: 100%;

  h1 {
    display: flex;
    justify-content: center;
    padding: 6rem 0 0 0;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    ${"" /* padding-right: 5rem; */}
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
  ${"" /* text-align: center; */}
  ${"" /* border-radius: 1rem; */}
  position: relative;
  width: 370px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  ${"" /* max-width: 600px; */}
  height: 370px;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  ${
    "" /* margin-bottom: 0.5rem;
  margin-top: 5rem; */
  }
  @media screen and (max-width: 320px) {
    padding-right: 5rem;
  }
`;

const GridGallery = () => {
  return (
    <Section>
      <Container>
        {/* <Heading> */}
        {/* <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Todo lo que necesita para el hogar
          </h1> */}
        {/* </Heading> */}
        <InfoRow>
          <InfoWrap>
            {/* <Image src={HomeOne} alt="home" /> */}
            <h1>
              <strong>Hair Gallery</strong>
            </h1>
            {/* <p>
              Fundado por Jose y su esposa, La Nayarit Furniture fue creada con
              el enfoque de poder servir más de cerca las necesidades de
              nuestros residentes de Lincoln Heights y sus alrededores.
            </p>
            <br />

            <p>
              Para nosotros, los mas importante es siempre ofrecer muebles de la
              mas alta calidad a un precio que sea accesible para nuestra
              comunidad. Contamos con accesibles planes de financiamiento a su
              servicio, para poder asegurar que todo cliente que entre por
              nuestra puerta, tenga la opción de escoger y llevar a casa el
              articulo deseado.
            </p>
            <br />

            <p>
              Jose Sanchez llego de Mexico como la mayoría de personas, buscando
              una mejor opción para el y su familia. Al poco tiempo de haber
              llegado, se dio cuenta que nuestra comunidad latina, enfrenta
              muchos obstáculos en el camino hacia el sueño americano. Después
              de trabajar en el “Field” y la construcción por un corto periodo,
              tuvo la oportunidad de trabajar en una mueblería, primero como
              empacador y eventualmente como vendedor. Fue así como se dio
              cuenta que la mayoría de negocios en la industria, solo se
              enfocaban a ver a los clientes con signos de peso y no interesarse
              genuinamente por las persona, y después de ahorrar durante algunos
              años, en el 2001, el y su esposa abrieron las puertas de su propio
              negocio, con el enfoque en ayudar al cliente ofreciendo un
              excelente servicio y siempre poniendo las necesidades de el
              cliente primero.
            </p> */}
          </InfoWrap>
          <ImageContainer>
            <ImageWrap>
              <Image src={HistoryOne} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryTwo} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryThree} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryFour} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryFive} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistorySix} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistorySeven} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryEight} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryNine} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryTen} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryEleven} alt="history" />
            </ImageWrap>
            <ImageWrap>
              <Image src={HistoryTwelve} alt="history" />
            </ImageWrap>
          </ImageContainer>
        </InfoRow>
      </Container>
    </Section>
  );
};

// const Section = styled.section`
//   background: #000d1a;
//   padding: 3.5rem 0rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Container = styled.div`
//   background: #fff;
//   padding: 3rem 2rem;
//   position: relative;
// `;

// const Wrap = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;
// const ColumnLeft = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0px -15px;
//   justify-content: flex-start;
//   padding: 1rem;
//   margin-bottom: 90px;
// `;

// const Content = styled.div`
//   flex: 0 0 50%;
//   line-height: 1.8;

//   @media screen and (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-top: 250px;
//   }

//   h1 {
//     margin-bottom: 2rem;
//     font-size: 2 rem;
//     display: flex;

//     justify-content: center;
//   }

//   ul {
//     margin-bottom: 1rem;
//     line-height: 1.5;
//     font-weight: 400px;
//     padding: 0rem 12rem;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }
//   h2 {
//     display: flex;
//     justify-content: center;
//   }
//   div {
//     display: flex;
//     justify-content: center;
//     padding: 2rem;
//   }
// `;
// const ColumnRight = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 0;
//   max-width: 850px;
//   height: 100%;
//   width: 45%;
//   padding-left: 1rem;
//   margin-bottom: 90px;

//   @media screen and (max-width: 768px) {
//     height: 320px;
//     top: -65px;
//     width: 80%;
//     margin: 0 auto;
//     left: 0;
//   }
// `;
// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// const GridGallery = () => {
//   return (
//     <Section>
//       <Container>
//         <Wrap>
//           <ColumnLeft>
//             <Content>
//               <h1>Our Services</h1>
//               <ul>
//                 <li>Make Up</li>

//                 <li>Hair Cuts</li>
//                 <li>Hair Style</li>
//                 <li>Permanent</li>
//                 <li>Comb Over</li>
//                 <li>Permanent Straightening Wax</li>
//                 <li>Low Taper</li>
//                 <li>High Taper</li>
//                 <li>Under Cut</li>
//                 <li>Mid Fade Pompadour</li>
//                 <div>
//                   <Button to="/contact-us">Call Now</Button>
//                 </div>
//               </ul>
//             </Content>
//           </ColumnLeft>
//           <ColumnRight>
//             <Image src={ImageOne} />
//           </ColumnRight>
//         </Wrap>
//       </Container>
//     </Section>
//   );
// };

export default GridGallery;
