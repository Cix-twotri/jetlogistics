import React from "react";
import {
  AboutText,
  AboutUsImage,
  CompanyOverview2,
  CompanyOverview1,
  CompanyOverviewContainer,
  HeaderAboutContainer,
  MainAbout,
  SinceFrom200,
  SinceTextLineContainer,
  SubMainAbout,
  LineOntext,
  OtherTextContainer,
  OtherText,
  ManImage,
  SignatureImg,
  ManImageSignatureContainer,
  SmartLogisticsImg,
  SmartLogisticsImgContainer,
  TrackYourParcel,
} from "../Styles/AboutUs/AboutUs.style";
import ShipImage from "../assets/Images/ship2.jpg";
import ManImg from "../assets/Images/man.jpg";
import Signature from "../assets/Images/signature.png";
import SmartLogistics from "../assets/Images/smartLogistics.png";

const About = () => {
  return (
    <>
      <MainAbout>
        <SubMainAbout>
          <AboutUsImage src={ShipImage} alt="ShipImage" />
          <CompanyOverviewContainer>
            <CompanyOverview1>Company</CompanyOverview1>
            <CompanyOverview2>Overview</CompanyOverview2>
          </CompanyOverviewContainer>

          <HeaderAboutContainer>
            <AboutText>About</AboutText>
            <SinceTextLineContainer>
              <LineOntext></LineOntext>
              <SinceFrom200>Since From 2000</SinceFrom200>
            </SinceTextLineContainer>
          </HeaderAboutContainer>

          <OtherTextContainer>
            <OtherText>
              We’ve combined a new kind of doctor’s experience that blends the
              highest level of health care with exceptional service. People can
              enroll in membership by paying only an annual membership fee of
              just $129. Upon request, HealSoul Health Services staff will
              provide instructions for individuals whose medical conditions need
              special attention & additional certificates. A customizable
              calendar that can be placed anywhere on your websites to boost
              your revenue.
            </OtherText>
            <ManImageSignatureContainer>
              <ManImage src={ManImg} alt="ManImg" />
              <SignatureImg src={Signature} alt="ShipImage" />
            </ManImageSignatureContainer>
          </OtherTextContainer>
        </SubMainAbout>
      </MainAbout>

      <section>
        <SmartLogisticsImgContainer>
          <SmartLogisticsImg src={SmartLogistics} alt="ShipImage" />
          <TrackYourParcel>Track Your Parcel</TrackYourParcel>
        </SmartLogisticsImgContainer>
      </section>
    </>
  );
};

export default About;
