import React, { useState } from "react";
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
  Result,
} from "../Styles/TrackYourPacel/TrackYourPacel.styles";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import TrackResult from "../components/TrackResult/TrackResult";

// Initialize Supabase
const supabaseUrl = "https://icafoblpjhigbojjlzuc.supabase.co"; // Replace with your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljYWZvYmxwamhpZ2JvampsenVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNzQ5MjQsImV4cCI6MjAzNzk1MDkyNH0.-5eK-u_k_3BbGYQwpWjU9w2LECi6WSp3iUaQWlT_aEM"; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

const TrackYourPacel = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState(""); // Declare result state

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log("Tracking number entered:", trackingNumber);
  
    try {
      // Query the Supabase database for the tracking number
      const { data, error } = await supabase
        .from("parcels")
        .select("*") // Ensure this selects all fields including created_at and delivery_address
        .eq("tracking_number", trackingNumber)
        .single();
  
      console.log("Supabase response:", { data, error });
  
      if (error) {
        console.error("Error:", error);
        setResult("Tracking Number not found.");
      } else if (data) {
        setResult(
          <TrackResult 
            trackingNumber={trackingNumber} 
            status={data.status} 
            createdAt={data.created_at} 
            deliveryAddress={data.delivery_address} // Pass delivery_address as a prop
          />
        );
      } else {
        setResult("Tracking Number not found.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setResult("An unexpected error occurred.");
    }
  };
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
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <Button type="submit">Track Result</Button>
          </Form>
          {result && (
            <Result
              error={
                typeof result === "string" &&
                result === "Tracking Number not found."
              }
            >
              {result}
            </Result>
          )}
        </Container>

        <Footer />
      </MainTrackParcel>
    </>
  );
};

export default TrackYourPacel;
