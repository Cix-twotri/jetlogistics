import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { RiSeparator } from "react-icons/ri";
import {
  BreadcrumbContainer,
  Button,
  Container,
  EnterConsignmentText,
  Form,
  Input,
  MainTrackParcel,
  TrackContainer,
  TrackText,
} from "../Styles/TrackYourPacel/TrackYourPacel.styles";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Title } from "../Styles/Home/Home.styles";
import TrackResult from "../components/TrackResult/TrackResult";

const TrackYourPacel = () => {
  return (
    <>
      <MainTrackParcel>
        <Navbar />
        
        <TrackContainer>
          <TrackText>Track</TrackText>
        </TrackContainer>

        <BreadcrumbContainer>
          <Breadcrumb
            spacing="8px"
            separator={<RiSeparator color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Track</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbContainer>

        <Container>
          <EnterConsignmentText>ENTER THE CONSIGNMENT NO.</EnterConsignmentText>
          <Form>
            <Input type="text" placeholder="Tracking Number" />
            <Button type="submit">Track Result</Button>
          </Form>

          <TrackResult/>
        </Container>

        <Footer />
      </MainTrackParcel>
    </>
  );
};

export default TrackYourPacel;
