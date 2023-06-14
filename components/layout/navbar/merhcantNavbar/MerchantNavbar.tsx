import {
  Text,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import LogoWrapper from "../components/LogoWrapper";
import NavLinkWrapper from "../components/NavLinkWrapper";
import NavbarWrapper from "../components/NavbarWrapper";
import Link from "next/link";
import React, { useRef, useState } from "react";
import CustomDrawer from "@/components/common/Drawer/Drawer";
import WrapperHamburger from "../components/WrapperHumberger";
import HamburgerIcon from "../components/HambergerIcon";

const MerchantNavbar = () => {
  const { isOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavbarWrapper>
        <Link href="/dashboard">
          <LogoWrapper>
            <Heading className="!!lg:text-[2.3rem] text-[2rem] ">Left</Heading>
            <Text fontSize="2xl">Lovers</Text>
          </LogoWrapper>
        </Link>
        <WrapperHamburger open={open} onClick={toggleHamburger}>
          <HamburgerIcon />
        </WrapperHamburger>
        <NavLinkWrapper open={open}>
          <Link href="/" onClick={toggleHamburger}>
            <Text fontSize="lg" color="#7F8A96">
              Order
            </Text>
          </Link>
        </NavLinkWrapper>
      </NavbarWrapper>
      <CustomDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};

export default MerchantNavbar;
