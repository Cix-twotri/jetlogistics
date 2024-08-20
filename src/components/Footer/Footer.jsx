import React from "react";
import {
  BottomFooter,
  BottomMain,
  FooterIcons,
  FooterLeft,
  GridItem,
  Main,
  OtherTexts,
  OurDivisions,
  ResponsiveGridContainer,
  TestAlone,
  TextContainer,
  Top,
  FooterEmail,
  FooterRight,
  FooterLeftIcons,
} from "../../Styles/FooterStyles/Footer.styles";
import { Link } from "react-router-dom";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";
import { PiSkypeLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <Main>
      <Top>
        <ResponsiveGridContainer>
          <GridItem>
            <TestAlone>
              Jet Logistics Services is a global supplier of transport and
              logistics solutions.
            </TestAlone>
          </GridItem>
          <GridItem>
            <TextContainer>
              <OurDivisions>Our Divisions</OurDivisions>
              <OtherTexts>What We Do</OtherTexts>
              <OtherTexts>Request a Feight</OtherTexts>
              <OtherTexts>Track & Trace</OtherTexts>
              <OtherTexts>About Us</OtherTexts>
            </TextContainer>
          </GridItem>
          <GridItem>
            <TextContainer>
              <OurDivisions>Our Services</OurDivisions>
              <OtherTexts>Road Freight</OtherTexts>
              <OtherTexts>Drone Freight</OtherTexts>
              <OtherTexts>Ocean Freight</OtherTexts>
              <OtherTexts>Rail Freight</OtherTexts>
              <OtherTexts>Air Freight</OtherTexts>
            </TextContainer>
          </GridItem>
          <GridItem>
            <TextContainer>
              <OurDivisions>Industry Sectors</OurDivisions>
              <OtherTexts>Contact Us</OtherTexts>
            </TextContainer>
          </GridItem>
        </ResponsiveGridContainer>
      </Top>

      <BottomFooter>
        <BottomMain>
          <FooterLeft>
            <FooterIcons>
              <FooterEmail>
                ©2023 JET LOGISTICS . All Rights Reserved
              </FooterEmail>
            </FooterIcons>
          </FooterLeft>

          <FooterRight>
            <FooterLeftIcons>
              <TbBrandFacebookFilled size={20} />
            </FooterLeftIcons>
            <FooterLeftIcons>
              <FaLinkedinIn size={20} />
            </FooterLeftIcons>
            <FooterLeftIcons>
              <TbBrandTwitterFilled size={20} />
            </FooterLeftIcons>
            <FooterLeftIcons>
              <ImYoutube size={20} />
            </FooterLeftIcons>
            <FooterLeftIcons>
              <PiSkypeLogoFill size={20} />
            </FooterLeftIcons>
          </FooterRight>
        </BottomMain>
      </BottomFooter>
    </Main>
  );
};

export default Footer;
