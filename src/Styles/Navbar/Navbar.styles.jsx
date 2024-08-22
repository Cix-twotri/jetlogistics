import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors";

export const Main = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000; /* Adjust the z-index as needed */
  background-color: #fff; /* Ensure the navbar has a background color */
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visibility */
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
    background-color: ${Colors.lightyello};
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 2px 50px;
    width: 100%;
    height: 50px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    display: none;
  }

  /* Small screens */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 25rem;
    height: 50px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 20px;

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

export const IconEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

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

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.darkBlue};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Colors.highlight};

  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: white; /* Change the color on hover */
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.4);
  }

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

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.lightyello};
  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: white; /* Change the color on hover */
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.4);
  }

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

export const Email = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.secondary};

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

export const Bottom = styled.div`
  display: flex;
  background-color: ${Colors.lightyello};
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 25rem;
    height: 50px;
    display: none;
  }

  /* Small screens */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const BottomMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 2px 50px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const TextHFour = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.primaryDark};
  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: ${Colors.highlight};
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.2);
  }

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

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: white; /* Change the color on hover */
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.4);
  }

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
export const SmallLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: white; /* Change the color on hover */
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.4);
  }

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

export const GotAQote = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: ${Colors.darkBlue};
  color: ${Colors.lightyello};

  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    background-color: ${Colors.darkPurple};
    color: ${Colors.highlight};
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.4);
  }

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

export const TextContainer = styled.div`
  display: flex;
  gap: 20px;

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

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${Colors.lightyello};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    display: none;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const IconNavDrawerContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

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

export const Structure = styled.div`
  display: flex;
  gap: 20px;

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

// display: flex;
// align-items: center;
// justify-content: space-between;
// align-items: flex-start;
// width: 90%;
// padding-left: 20px;
