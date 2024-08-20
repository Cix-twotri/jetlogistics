import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors";

export const MainDrawer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px;
  margin: 0px;

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

export const NavTextContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const FooterContainer = styled.div`
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

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.darkBlue};
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

export const TextHFourDrawer = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${Colors.primaryDark};
  border-bottom: 1px solid black;
  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: ${Colors.highlight};
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: all 0.3s ease; /* Smooth transition effect */
    transform: scale(1.1);
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

export const OpeningHourEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const OpeningHoursMonday = styled.div`
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

export const OpeningHourEmail = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-top: 30px;

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
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;

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

export const Texth4 = styled.h4`
  font-size: 13px;
  font-weight: 600;

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

export const IconsDrawer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.darkBlue};
  width: 30px;
  height: 30px;
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

export const GetaquoteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.lightyello};
  width: 200px;
  height: 50px;
  margin-left: 30px;
  margin-bottom: 70px;
  border-radius: 10px;
  background-color: ${Colors.highlight};

  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for scale and color */

  &:hover {
    color: white; /* Change the color on hover */
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

export const GetaquoteTxt = styled.span`
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
