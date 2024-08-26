import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors";

export const TrackResultMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70rem;
  width: 100%;
  height: auto;
  border: 1px solid ${Colors.darkBlue};
  border-radius: 4px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    max-width: 80rem;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    max-width: 60rem;
  }

  /* Small screens */
  @media (max-width: 600px) {
    max-width: 90%;
    padding: 10px;
  }
`;

export const TrackResultContent = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 15px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const DeliveryAndOthersContent = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  background-color: #d8d8d8;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 15px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const TrackingCodeThisShipmentContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 20px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TrackCodeText = styled.span`
  font-size: 15px;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 16px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ThisShipmentisHandledby = styled.span`
  font-size: 15px;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 16px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const JetlogisticText = styled.span`
  font-size: 15px;
  font-weight: 600;
  padding-left: 10px;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 16px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const PrintContent = styled.button`
  display: flex;
  width: 170px;
  height: 60px;
  align-items: center;
  gap: 10px;
  padding-left: 60px;
  border-radius: 5px;
  background-color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 180px;
    height: 65px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 160px;
    height: 55px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 140px;
    height: 50px;
    padding-left: 40px;
  }
`;

export const PrintText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.lightyello};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 20px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 16px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const DeliveredText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #becf00;
  padding-bottom: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 22px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 18px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const DeliveyAddressText = styled.h2`
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 17px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    max-width: 1300px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    max-width: 900px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: red;
  }

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 15px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const AccordionContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const AccordionContentText = styled.div`
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 15px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const TrackingIdText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 17px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 14px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MoreShipmentDetails = styled.span`
  font-size: 30px;
  font-weight: 700;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    font-size: 32px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 28px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const MoreDeliveryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    flex-direction: row;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: row;
  }

  /* Small screens */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const MoreDeliveryDetailsElectronicProvide = styled.div`
  display: flex;
  background-color: #dadada;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 20px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const PieceIDWaybill = styled.div`
  display: flex;
  margin-top: 20px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    margin-top: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    margin-top: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const WallbillNumber = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: #dadada;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding: 20px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const MoreDeliveryDetailsSubContainer = styled.div`
  display: flex;
  width: 30%;
  height: auto;
  background-color: #dadada;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 33%;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 30%;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PieceidId = styled.div`
  display: flex;
  width: 30%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 33%;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 30%;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Wallbill = styled.div`
  display: flex;
  width: 30%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    width: 33%;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 30%;
  }

  /* Small screens */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ElectronicProvide = styled.div`
  padding-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: red;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding-left: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding-left: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;

export const Numbers = styled.div`
  padding-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: red;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding-left: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding-left: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;

export const FooterContainer = styled.div`


  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    padding-left: 25px;
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    padding-left: 20px;
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;
