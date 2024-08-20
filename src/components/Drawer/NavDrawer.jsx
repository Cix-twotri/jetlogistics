import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure, // Import useDisclosure
} from "@chakra-ui/react";
import { CgMenuRight } from "react-icons/cg";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";
import { PiSkypeLogoFill } from "react-icons/pi";
import { Icons, LeftIcons } from "../../Styles/Navbar/Navbar.styles";
import {
  FooterContainer,
  IconEmail,
  MainDrawer,
  NavTextContainer,
  OpeningHourEmail,
  OpeningHourEmailContainer,
  OpeningHoursMonday,
  SocialIcons,
  Texth4,
  TextHFourDrawer,
  IconsDrawer,
  GetaquoteBtn,
  GetaquoteTxt,
} from "../../Styles/Drawer/NavDrawer.styles";
import { Colors } from "../../components/Colors/Colors"; // Import Colors
import styled from "styled-components";
import { LuClock7 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const CustomDrawerContent = styled(DrawerContent)`
  background-color: ${Colors.deepPurple};
`;

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button leftIcon={<CgMenuRight />} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <CustomDrawerContent style={{ backgroundColor: Colors.lightyello }}>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <MainDrawer>
              <NavTextContainer>
                <TextHFourDrawer>Home</TextHFourDrawer>
                <TextHFourDrawer>About</TextHFourDrawer>
                <TextHFourDrawer>Track Your Parcel</TextHFourDrawer>
                <TextHFourDrawer>Services</TextHFourDrawer>
                <TextHFourDrawer>Contact</TextHFourDrawer>
              </NavTextContainer>
              <OpeningHourEmailContainer>
                <OpeningHourEmail>
                  <IconsDrawer>
                    <LuClock7 size={25} />
                  </IconsDrawer>
                  <OpeningHoursMonday>
                    <Texth4>Opening Hours</Texth4>
                    <Texth4>Mon-Friday 8am-5</Texth4>
                  </OpeningHoursMonday>
                </OpeningHourEmail>

                <IconEmail>
                  <IconsDrawer>
                    <MdEmail size={25} />
                  </IconsDrawer>
                  <OpeningHoursMonday>
                    <Texth4>Opening Hours</Texth4>
                    <Texth4>Mon-Friday 8am-5</Texth4>
                  </OpeningHoursMonday>
                </IconEmail>
              </OpeningHourEmailContainer>

              <GetaquoteBtn>
                <GetaquoteTxt>Get A Quote</GetaquoteTxt>
              </GetaquoteBtn>

              <FooterContainer>
                <SocialIcons>
                  <TbBrandFacebookFilled size={15} />
                </SocialIcons>
                <SocialIcons>
                  <FaLinkedinIn size={15} />
                </SocialIcons>
                <SocialIcons>
                  <TbBrandTwitterFilled size={15} />
                </SocialIcons>
                <SocialIcons>
                  <ImYoutube size={15} />
                </SocialIcons>
                <SocialIcons>
                  <PiSkypeLogoFill size={15} />
                </SocialIcons>
              </FooterContainer>
            </MainDrawer>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </CustomDrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
