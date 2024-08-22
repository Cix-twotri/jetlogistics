import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors"; // Adjust the import if necessary

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    height: 100vh; /* Ensure full-screen height on small screens */
  }
`;

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    height: auto; /* Ensure content height adapts to the screen */
  }
`;

export const MainSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    /* Ensure slider images and text are scaled for smaller screens */
    padding: 0 10px;
  }
`;

export const TopSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    /* No changes needed */
  }
`;

export const TitelImageContainer1 = styled.div`
  width: 100%;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    /* Ensure image fits the screen */
    padding: 0 10px;
  }
`;

export const TitelImageContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    margin-bottom: 5px; /* Adjust spacing for smaller screens */
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 30px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    gap: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    gap: 12px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    gap: 10px; /* Reduce gap for small screens */
    flex-direction: column; /* Stack images vertically */
    margin-bottom: 5px;
  }
`;

export const TitelImageOne = styled.img`
  width: 400px;
  height: auto;

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
    width: 200px; /* Adjusted size for small screens */
  }
`;

export const TitelImageTwo = styled.img`
  width: 200px;
  height: auto;

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
    width: 80px; /* Smaller size for better fit on small screens */
  }
`;

export const ServiceProviderContainer = styled.div`
  display: flex;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    flex-direction: column; /* Stack items vertically */
    align-items: center;
  }
`;

export const BottomSlider = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
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

export const Slide = styled.div`
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
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    background-position: top; /* Adjust background position */
  }
`;

export const Arrow = styled.div`
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
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1rem;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 1rem; /* Keep the font size for better visibility */
    padding: 0.25rem; /* Reduce padding for smaller screens */
  }
`;

export const TitleDes = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 1.1;
  color: ${Colors.dark};
  font-weight: 500;
  font-family: "Merriweather", serif;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 28px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 18px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 16px; /* Smaller font size for small screens */
  }
`;

export const Description = styled.p`
  font-size: 25px;
  line-height: 1.5;
  color: ${Colors.dark};
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 18px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 16px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 14px; /* Smaller font size for small screens */
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    gap: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    gap: 5px; /* Smaller gap for small screens */
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
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
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 0.25rem 0.5rem; /* Smaller padding for better fit */
    font-size: 0.7rem; /* Smaller font size for small screens */
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    background-position: top; /* Adjust background position */
  }
`;

export const TitleImage = styled.img`
  max-width: 100%;
  height: auto;

  /* No media queries needed for responsive image scaling */
`;

export const TitleText = styled.h2`
  font-size: 60px;
  font-weight: 700;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 28px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 18px; /* Adjust font size for better readability */
  }
`;

export const TitleImageContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    margin-bottom: 20px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    margin-bottom: 15px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    margin-bottom: 10px; /* Reduce spacing for small screens */
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    gap: 15px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    gap: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    gap: 5px; /* Smaller gap for small screens */
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    gap: 8px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    gap: 6px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    gap: 4px; /* Smaller gap for small screens */
  }
`;

export const DescriptionText = styled.p`
  font-size: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* Additional styles for large screens can go here */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* Additional styles for medium screens can go here */
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 18px; /* Adjust font size for small screens */
  }
`;

export const Button2 = styled.button`
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
    /* Additional styles for large screens can go here */
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 50px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* Additional styles for large screens can go here */
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

export const ButtonText = styled.h2`
  font-size: 20px;
  font-weight: 600;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* Additional styles for large screens can go here */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* Additional styles for medium screens can go here */
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Main = styled.div`
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
