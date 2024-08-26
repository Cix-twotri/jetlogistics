import React from "react";
import { TiPrinter } from "react-icons/ti";
import { Divider, Stepper, Stack, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  DeliveredText,
  DeliveryAndOthersContent,
  DeliveyAddressText,
  ElectronicProvide,
  JetlogisticText,
  MoreDeliveryDetailsContainer,
  MoreDeliveryDetailsElectronicProvide,
  MoreDeliveryDetailsSubContainer,
  MoreShipmentDetails,
  Numbers,
  PieceidId,
  PieceIDWaybill,
  PrintContent,
  PrintText,
  ThisShipmentisHandledby,
  TrackCodeText,
  TrackingCodeThisShipmentContainer,
  TrackResultContent,
  TrackResultMain,
  Wallbill,
  WallbillNumber,
} from "../../Styles/ResultStyles/Result.styles";

const TrackResult = ({ trackingNumber, status, createdAt, deliveryAddress }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <TrackResultMain>
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: {trackingNumber}</TrackCodeText>
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
            Thursday, {new Date(createdAt).toLocaleString()} Local time, Service
            Area: {deliveryAddress}
          </DeliveyAddressText>

          <Stack>
            <Stepper size="sm" index={0} gap="0">
              {/* Add stepper logic */}
            </Stepper>
            <Text>
              Step 1: <b>Select Rooms</b>
            </Text>
            <Text>
              Current Step: <b>First</b>
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
                <Numbers>{trackingNumber}</Numbers>
              </WallbillNumber>
            </MoreDeliveryDetailsContainer>
          </AccordionContent>
        </AccordionContainer>
      </TrackResultContent>
    </TrackResultMain>
  );
};

export default TrackResult;
