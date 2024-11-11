import React, { useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
// import { GiHamburgerMenu } from 'react-icons/gi';
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  useToast,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FaHeartCirclePlus, FaUserAlt } from "react-icons/fa";
import logo from "../image/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  // const toast = useToast();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle logout function
  // let handleLogout = () => {
  //   toast({
  //     title: 'Logged Out',
  //     status: 'error',
  //     duration: 2000,
  //     isClosable: true,
  //   });
  //   AuthLogoutFunc();
  //   localStorage.clear();
  // };

  return (
    <div className="nav-main">
      <div className="nav-left">
        <Link to="/">
          <img width="180px" src={logo} alt="" />
        </Link>
        <h3
          className="about-pets hidden"
          onClick={toggleNav}
          style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bolder' }}
        >
          <span>ALL ABOUT PETS</span>
          {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}
        </h3>
        <h3 style={{ margin: '0 10px' }} className="hidden">
          <Link to="/services">OUR SERVICES</Link>
        </h3>
      </div>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', width: '25%' }}>
        <h3>
          <AiFillHeart style={{ fontSize: '28px' }} />
        </h3>
        <div
          style={{
            borderLeft: '1px solid gray',
            height: '50px',
            margin: '0 8px',
          }}
        ></div>
        <Link to="/signup">
          <h3>Signup</h3>
        </Link>
        <Link to="/login">
          <h3 style={{ marginLeft: '15px' }}>Login</h3>
        </Link>
      </div>

      {isNavOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            width: '100%',
            backgroundColor: '#3232af',
            color: '#fff',
            transition: 'height 0.5s',
            border: '1px solid red',
          }}
        >
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              display: 'flex',
              justifyContent: 'space-evenly',
              height: '60px',
              alignItems: 'center',
            }}
          >
            <li>
              <Menu>
                <MenuButton as={Text} isLazy={true} color="#fff">
                  ADOPT OR GET INVOLVED
                </MenuButton>
                <MenuList color="#fff" bgColor="#3232af">
                  <Link to="/AboutPetfinder">
                    <MenuItem bgColor="#3232af">About petfinder</MenuItem>
                  </Link>
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Adopting Pets</MenuItem>
                  </Link>
                  <MenuItem bgColor="#3232af">
                    Animals Shelter & Rescues
                  </MenuItem>
                  <MenuItem bgColor="#3232af">Petfinder Foundation</MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton as={Text} isLazy={true} color="#fff">
                  DOGS & PUPPIES
                </MenuButton>
                <MenuList color="#fff" bgColor="#3232af">
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Dog Adoption</MenuItem>
                  </Link>
                  <MenuItem bgColor="#3232af">Dog Breeds</MenuItem>
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Feeding your Dog</MenuItem>
                  </Link>
                  {/* Add more dog-related menu items */}
                </MenuList>
              </Menu>
            </li>
          </ul>
        </div>
      )}
      <div className="hamburger">
        <GiHamburgerMenu ref={btnRef} size={"40px"} onClick={onOpen} />
        <>
          {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay
            />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Link to="/signup">
                  <h3>Signup</h3>
                </Link>
                <Link to="/login">
                  <h3 style={{ marginLeft: '15px' }}>Login</h3>
                </Link>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </div>
      <div className="nav-footer">
        <h3
          className="about-pets"
          onClick={toggleNav}
          style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bolder' }}
        >
          <span>ALL ABOUT PETS</span>
          {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}
        </h3>
        <h3 style={{ margin: '0 10px' }}>
          <Link to="/services">OUR SERVICES</Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;