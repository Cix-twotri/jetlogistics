import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors";

export const Main = styled.div`
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

export const Top = styled.div`
  background-color: ${Colors.darkBlue};

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

export const ResponsiveGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  grid-gap: 20px;
  padding: 20px;
  background-color: ${Colors.darkBlue};

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

export const GridItem = styled.div`
  padding: 20px;
  text-align: center;

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
``;
export const TestAlone = styled.h4`
  font-size: 23px;
  font-weight: 600;
  color: ${Colors.lightyello};
  text-align: center;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const BottomFooter = styled.div`
  background-color: ${Colors.lightyello};
  padding-top: 30px;
  height: 120px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    height: 0px;
    padding-top: 0px;
  }
`;

export const OurDivisions = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${Colors.lightyello};
  text-align: center;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const OtherTexts = styled.span`
  margin-top: 15px;
  font-size: 20px;
  color: ${Colors.lightyello};
  text-align: center;
  cursor: pointer;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const BottomMain = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.lightyello};
  height: 150px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 2px 50px;
    width: 100%;
    height: 50px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const FooterLeft = styled.div`
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

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.darkBlue};

  width: 300px;
  height: auto;

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

export const FooterEmail = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${Colors.darkBlue};

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

export const FooterRight = styled.div`
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

export const FooterLeftIcons = styled.div`
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
