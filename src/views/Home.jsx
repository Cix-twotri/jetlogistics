import React, { useState } from "react";
import { motion } from "framer-motion";
import SlideImage1 from "../assets/Images/truck2.png";
import SlideImage2 from "../assets/Images/plan.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Best from "../assets/Images/best.png";
import Logistics from "../assets/Images/Logistics.png";
import Provider from "../assets/Images/Provider.png";
import RoadTransport from "../assets/Images/RoadTransport.png";
import Express from "../assets/Images/Express.png";
import Delivery from "../assets/Images/Delivery.png";
import {
  Arrow,
  BottomSlider,
  Button,
  Button2,
  ButtonContainer,
  ButtonText,
  DescriptionText,
  HomeContainer,
  ImagesContainer,
  Main,
  MainSlider,
  Slide,
  SliderContainer,
  TitelImageContainer1,
  TitelImageContainer2,
  TitelImageOne,
  TitelImageTwo,
  TitleDes,
  TopSlider,
} from "../Styles/Home/Home.styles";
import About from "./About";
import Services from "./Services";

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

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <HomeContainer>
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
      <section>
        <Main>
          <About />
        </Main>
      </section>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
