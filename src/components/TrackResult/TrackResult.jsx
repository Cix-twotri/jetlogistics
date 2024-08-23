import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors"; // Adjust the import if necessary
import { TiPrinter } from "react-icons/ti";
import {
  Divider,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Stack,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const TrackResult = () => {
  const { activeStep } = useSteps({ index: 0, count: steps.length });
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TrackResultMain>
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistics</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />

      <DeliveryAndOthersContent>
        <TrackingCodeThisShipmentContainer>
          <DeliveredText>Delivery</DeliveredText>
          <DeliveyAddressText>
            Thursday, 22 August 2024 at 14:37 Local time, Service Area: Alvine
            Lane - New York City
          </DeliveyAddressText>

          <Stack>
            <Stepper size="sm" index={activeStep} gap="0">
              {steps.map((step, index) => (
                <Step key={index} gap="0">
                  <StepIndicator>
                    <StepStatus complete={<StepIcon />} />
                  </StepIndicator>
                  <StepSeparator _horizontal={{ ml: "0" }} />
                </Step>
              ))}
            </Stepper>
            <Text>
              Step {activeStep + 1}: <b>{steps[activeStep].description}</b>
            </Text>
            <Text>
              Current Step: <b>{steps[activeStep].title}</b>
            </Text>
          </Stack>
        </TrackingCodeThisShipmentContainer>
      </DeliveryAndOthersContent>
      <Divider />

      <TrackResultContent>
        <AccordionContainer>
          <AccordionHeader onClick={toggleAccordion}>
            <MoreShipmentDetails>More Shipment Details</MoreShipmentDetails>
            <FaChevronDown />
          </AccordionHeader>
          <AccordionContent isOpen={isOpen}>
            <MoreDeliveryDetailsContainer>
              <MoreDeliveryDetailsElectronicProvide>
                <MoreDeliveryDetailsSubContainer>
                  To protect your privacy, more delivery details are available
                  after validation
                </MoreDeliveryDetailsSubContainer>
                <ElectronicProvide>
                  Electronic Proof of Delivery
                </ElectronicProvide>
              </MoreDeliveryDetailsElectronicProvide>

              <PieceIDWaybill>
                <PieceidId>1 Piece ID</PieceidId>
                <ElectronicProvide>JD014600011666631969</ElectronicProvide>
              </PieceIDWaybill>

              <WallbillNumber>
                <Wallbill> Waybill Number </Wallbill>
                <Numbers>905858888</Numbers>
              </WallbillNumber>
            </MoreDeliveryDetailsContainer>
          </AccordionContent>
        </AccordionContainer>
      </TrackResultContent>
      <Divider />

      <TrackResultContent>
        <AccordionContainer>
          <AccordionHeader onClick={toggleAccordion}>
            <MoreShipmentDetails>All Shipment Updates</MoreShipmentDetails>
            <FaChevronDown />
          </AccordionHeader>
          <AccordionContent isOpen={isOpen}>
            <MoreDeliveryDetailsContainer>
              <MoreDeliveryDetailsElectronicProvide>
                <MoreDeliveryDetailsSubContainer>
                  To protect your privacy, more delivery details are available
                  after validation
                </MoreDeliveryDetailsSubContainer>
                <ElectronicProvide>
                  Electronic Proof of Delivery
                </ElectronicProvide>
              </MoreDeliveryDetailsElectronicProvide>

              <PieceIDWaybill>
                <PieceidId>1 Piece ID</PieceidId>
                <ElectronicProvide>JD014600011666631969</ElectronicProvide>
              </PieceIDWaybill>

              <WallbillNumber>
                <Wallbill> Waybill Number </Wallbill>
                <Numbers>905858888</Numbers>
              </WallbillNumber>
            </MoreDeliveryDetailsContainer>
          </AccordionContent>
        </AccordionContainer>
      </TrackResultContent>
      <Divider />
    </TrackResultMain>
  );
};

// Define or import your styled components here

export default TrackResult;

const TrackResultMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70rem;
  width: 100%;
  height: auto;
  border: 1px solid ${Colors.darkBlue};
  border-radius: 4px;
`;

const TrackResultContent = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
`;

const DeliveryAndOthersContent = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  background-color: #d8d8d8;
`;

const TrackingCodeThisShipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackCodeText = styled.span`
  font-size: 15px;
  color: ${Colors.darkBlue};
`;

const ThisShipmentisHandledby = styled.span`
  font-size: 15px;
  color: ${Colors.darkBlue};
`;

const JetlogisticText = styled.span`
  font-size: 15px;
  font-weight: 600;
  padding-left: 10px;
  color: ${Colors.darkBlue};
`;

const PrintContent = styled.button`
  display: flex;
  width: 170px;
  height: 60px;
  align-items: center;
  gap: 10px;
  padding-left: 60px;
  border-radius: 5px;
  background-color: ${Colors.darkBlue};
`;

const PrintText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.lightyello};
`;

const DeliveredText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #becf00;
  padding-bottom: 20px;
`;

const DeliveyAddressText = styled.h2`
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${Colors.darkBlue};
`;

// Accordion Components
const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
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
`;

const AccordionContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const MoreShipmentDetails = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const MoreDeliveryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreDeliveryDetailsElectronicProvide = styled.div`
  display: flex;
  background-color: #dadada;
`;

const PieceIDWaybill = styled.div`
  display: flex;
  margin-top: 20px;
`;

const WallbillNumber = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: #dadada;
`;

const MoreDeliveryDetailsSubContainer = styled.div`
  display: flex;
  width: 30%;
  height: auto;
  background-color: #dadada;
`;

const PieceidId = styled.div`
  display: flex;
  width: 30%;
  height: auto;
`;

const Wallbill = styled.div`
  display: flex;
  width: 30%;
  height: auto;
`;

const ElectronicProvide = styled.div`
  padding-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: red;
`;

const Numbers = styled.div`
  padding-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: red;
`;
