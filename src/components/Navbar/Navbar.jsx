import React from "react";
import {
  Bottom,
  Email,
  TextHFour,
  BottomMain,
  IconEmail,
  Icons,
  Left,
  LeftIcons,
  Logo,
  Main,
  Right,
  Top,
  GotAQote,
  TextContainer,
  DrawerContainer,
  IconNavDrawerContainer,
  SmallLogo,
} from "../../Styles/Navbar/Navbar.styles";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";
import { PiSkypeLogoFill } from "react-icons/pi";
import LogoImg from "../../assets/Images/rocket.png";
import NavDrawer from "../Drawer/NavDrawer";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <Main>
      <Top>
        <Left>
          <Icons>
            <BsFillPhoneFill size={18} />
          </Icons>

          <IconEmail>
            <Icons>
              <MdMail size={18} />
            </Icons>
            <Email>jetlogistics@gmail.com</Email>
          </IconEmail>

          <Icons>
            <FaLocationArrow size={18} />
          </Icons>
        </Left>

        <Right>
          <LeftIcons>
            <TbBrandFacebookFilled size={20} />
          </LeftIcons>
          <LeftIcons>
            <FaLinkedinIn size={20} />
          </LeftIcons>
          <LeftIcons>
            <TbBrandTwitterFilled size={20} />
          </LeftIcons>
          <LeftIcons>
            <ImYoutube size={20} />
          </LeftIcons>
          <LeftIcons>
            <PiSkypeLogoFill size={20} />
          </LeftIcons>
        </Right>
      </Top>

      <Bottom>
        <BottomMain>
          <Logo src={LogoImg} alt="Logo" />
          <TextContainer>
            <TextHFour>Home</TextHFour>
            <TextHFour>About</TextHFour>
            <TextHFour>Track Your Percel</TextHFour>
            <TextHFour>Services</TextHFour>
            <TextHFour>Contact</TextHFour>
          </TextContainer>
          <GotAQote>Got Quote</GotAQote>
        </BottomMain>
      </Bottom>

      <DrawerContainer>
        <SmallLogo src={LogoImg} alt="Logo" />
        <IconNavDrawerContainer>
          <TiShoppingCart size={30}/>
          <NavDrawer />
        </IconNavDrawerContainer>
      </DrawerContainer>
    </Main>
  );
};

export default Navbar;
