import React from "react";
import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors"; // Adjust the import if necessary
import { TiPrinter } from "react-icons/ti";
import { Divider } from "@chakra-ui/react";

const TrackResult = () => {
  return (
    <TrackResultMain>
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />

      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
      <TrackResultContent>
        <TrackingCodeThisShipmentContainer>
          <TrackCodeText>Tracking Code: 778849949</TrackCodeText>
          <ThisShipmentisHandledby>
            This shipment is handled by:
            <JetlogisticText>Jet Logistice</JetlogisticText>
          </ThisShipmentisHandledby>
        </TrackingCodeThisShipmentContainer>

        <PrintContent>
          <PrintText>Print</PrintText>
          <TiPrinter size={30} color="white" />
        </PrintContent>
      </TrackResultContent>
      <Divider />
    </TrackResultMain>
  );
};

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

const TrackingCodeThisShipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackCodeText = styled.span`
  font-size: 18px;
  color: ${Colors.darkBlue};
`;

const ThisShipmentisHandledby = styled.span`
  font-size: 18px;
  color: ${Colors.darkBlue};
`;

const JetlogisticText = styled.span`
  font-size: 18px;
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
