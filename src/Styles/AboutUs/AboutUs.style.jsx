import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors"; // Adjust the import if necessary

export const MainAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 86vh;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`;

export const SubMainAbout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 100px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 20px;
  }
`;

export const AboutUsImage = styled.img`
  width: 40%;
  height: 700px;
  border-radius: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 200%;
    height: 200px;
    border-radius: 10px;
  }
`;

export const HeaderAboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
  }
`;

export const AboutText = styled.h1`
  position: relative;
  font-family: "Londrina Outline", sans-serif;
  font-size: 15rem;
  font-weight: 600;
  bottom: 150px;
  left: 100px;
  opacity: 0.1;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: relative;
    font-family: "Londrina Outline", sans-serif;
    font-size: 8rem;
    font-weight: 600px;
    bottom: 40px;
    left: 30px;
    opacity: 0.1;
  }
`;

export const SinceTextLineContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  bottom: 320px;
  left: 100px;
  gap: 5px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    bottom: 138px;
    left: 30px;
    gap: 5px;
  }
`;

export const LineOntext = styled.div`
  width: 70px;
  height: 5px;
  background-color: #520000;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 40px;
    height: 2px;
  }
`;

export const SinceFrom200 = styled.p`
  font-size: 20px;
  font-weight: 500;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CompanyOverviewContainer = styled.div`
  position: absolute;
  display: flex;
  left: 57rem;
  padding-top: 90px;
  gap: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: absolute;
    display: flex;
    left: 13px;
    padding-top: 280px;
    gap: 20px;
  }
`;

export const CompanyOverview1 = styled.h3`
  font-size: 70px;
  font-weight: 700;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const CompanyOverview2 = styled.h3`
  font-size: 70px;
  font-weight: 700;
  color: ${Colors.lightyello};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const OtherTextContainer = styled.div`
  position: absolute;
  background-color: ${Colors.primary};
  color: ${Colors.lightyello};
  margin-top: 200px;
  padding: 30px;
  width: 40%;
  height: 500px;
  right: 280px;
  border-radius: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: absolute;
    background-color: ${Colors.primary};
    color: ${Colors.lightyello};
    margin-top: 330px;
    padding: 30px;
    width: 100%;
    height: 700px;
    right: 0px;
    border-radius: 10px;
  }
`;

export const OtherText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.lightyello};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ManImage = styled.img`
  width: 100px;
  hieght: 100px;
  background-color: ${Colors.lightyello};
  border-radius: 50px;
  margin-top: 100px;

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

export const SignatureImg = styled.img`
  width: 300px;
  hieght: 100px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 200px;
    hieght: 100px;
  }
`;

export const ManImageSignatureContainer = styled.div`
  display: flex;
  justify-content: space-between;

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

export const SmartLogisticsImg = styled.img`
  width: 100%;
  hieght: 100px;

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

export const SmartLogisticsImgContainer = styled.div`
  position: relative;
  width: 100%;
  hieght: 300px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
    position: relative;
    top: 380px;
    hieght: 100vh;
    width: 100%;
  }
`;

export const TrackYourParcel = styled.button`
  position: absolute;
  width: 350px;
  height: 100px;
  background-color: ${Colors.darkPurple};
  color: #ec9805;
  border-radius;10px;
  left: 16%;
  bottom: 25rem;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
   transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${Colors.lightyello}; // Change to your desired hover color
    color: ${Colors.darkPurple};
  }

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
  }

  /* Small screens */
  @media (max-width: 600px) {
  position: absolute;
  width: 100px;
  height: 60px;
  font-size: 12px;
  left: 20%;
  bottom: 1rem;
  }
`;
