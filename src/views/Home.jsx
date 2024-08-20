import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SlideImage1 from "../assets/Images/truck2.png";
import SlideImage2 from "../assets/Images/plan.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Colors } from "../components/Colors/Colors";

import Best from "../assets/Images/best.png";
import Logistics from "../assets/Images/Logistics.png";
import Services from "../assets/Images/services.png";
import Provider from "../assets/Images/Provider.png";

import RoadTransport from "../assets/Images/RoadTransport.png";
import Express from "../assets/Images/Express.png";
import Delivery from "../assets/Images/Delivery.png";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const MainSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const TopSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const TitelImageContainer1 = styled.div`
  width: 100%;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const TitelImageContainer2 = styled.div`
  width: 100%; /* Full width of the container */
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 30px;

    /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  gap: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {\
  gap: 12px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    gap: 10px;
  }

`;

const TitelImageOne = styled.img`
  width: 400px; /* Adjust width for better alignment */
  height: auto; /* Maintain aspect ratio */

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 300px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 200px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 200px;
  }
`;

const TitelImageTwo = styled.img`
  width: 200px; /* Adjust width to fit within the container */
  height: auto; /* Maintain aspect ratio */

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 170px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 100px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 80px;
  }
`;

const ServiceProviderContainer = styled.div`
  display: flex;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const BottomSlider = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 75%;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: ${({ active }) => (active ? "0" : "100%")};
  transition: left 0.5s ease-in-out;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  cursor: pointer;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  border-radius: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
   font-size: 1rem;

  }

  /* Small screens */
  @media (max-width: 600px) {
 font-size: 1rem;
  }
`;

const TitleDes = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const TitleText = styled.h1`
  font-size: 60px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const DescriptionText = styled.p`
  font-size: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 10px;
  width: 230px;
  height: 80px;
  background-color: ${Colors.darkBlue};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.lightyello}; // Change to your desired hover color
    border: 1px solid ${Colors.primary};
  }

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 250px;
    height: 60px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 200px;
    height: 60px;
  }
`;

const Button2 = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 10px;
  width: 230px;
  height: 80px;
  border: 1px solid ${Colors.primary};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${Colors.primary}; // Change to your desired hover color
    color: #fff; // Change text color on hover if needed
  }

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 250px;
    height: 60px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 200px;
    height: 60px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 50px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding-right: 50px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding-right: 50px;
  }
`;

const ButtonText = styled.h2`
  font-size: 20px;
  font-weight: 600;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
   font-size: 13px;
  }
`;

// Custom component for slide content
const SlideContent = ({
  title,
  description,
  showTopSlider,
  showTopSlider2,
}) => (
  <motion.div
    initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
    style={{
      position: "absolute",
      bottom: "20%",
      left: "5%",
      color: "#fff",
      fontSize: "2rem",
    }}
  >
    <TitleDes>
      <MainSlider>
        {showTopSlider && (
          <TopSlider>
            <TitelImageContainer1>
              <ImagesContainer>
                <TitelImageOne src={RoadTransport} alt="RoadTransport" />
              </ImagesContainer>
            </TitelImageContainer1>

            <TitelImageContainer2>
              <ImagesContainer>
                <TitelImageTwo src={Express} alt="Express" />
                <TitelImageOne src={Delivery} alt="Provider" />
              </ImagesContainer>
            </TitelImageContainer2>
          </TopSlider>
        )}

        {showTopSlider2 && (
          <TopSlider>
            <TitelImageContainer1>
              <ImagesContainer>
                <TitelImageOne src={Best} alt="Best" />
              </ImagesContainer>
            </TitelImageContainer1>

            <TitelImageContainer2>
              <ImagesContainer>
                <TitelImageTwo src={Logistics} alt="Logistics" />
                <TitelImageOne src={Provider} alt="Provider" />
              </ImagesContainer>
            </TitelImageContainer2>
          </TopSlider>
        )}

        <BottomSlider>
          <DescriptionText>{description}</DescriptionText>
          <ButtonContainer>
            <Button>
              <ButtonText>Track Your Order</ButtonText>
            </Button>
            <Button2>
              <ButtonText>Learn More</ButtonText>
            </Button2>
          </ButtonContainer>
        </BottomSlider>
      </MainSlider>
    </TitleDes>
  </motion.div>
);

const slides = [
  {
    id: 1,
    image: SlideImage1,
    content: (
      <SlideContent
        description="We are committed in making our customers with exceptional service while offering our employees."
        title="First Slide"
        showTopSlider={true} // Show TopSlider only on the first slide
        showTopSlider2={false} // Hide TopSlider2 on the first slide
      />
    ),
  },
  {
    id: 2,
    image: SlideImage2,
    content: (
      <SlideContent
        description="Ensuring customer service satisfaction is our primary aim. It is our core objective to consistently meet and exceed customer expectations."
        title="Second Slide"
        showTopSlider={false} // Hide TopSlider on the second slide
        showTopSlider2={true} // Show TopSlider2 only on the second slide
      />
    ),
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Navbar />
      <SliderContainer>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            bgImage={slide.image}
            active={index === activeSlide}
          >
            {index === activeSlide && slide.content}
          </Slide>
        ))}
        <Arrow left onClick={prevSlide}>
          &#10094;
        </Arrow>
        <Arrow onClick={nextSlide}>&#10095;</Arrow>
      </SliderContainer>
      <Footer />
    </>
  );
};

export default Slider;
