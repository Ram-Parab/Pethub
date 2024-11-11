import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Image,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../image/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkUserAuth = () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      
      if (storedUser && token) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserData(parsedUser);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    };

    checkUserAuth();
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    
    fetch("http://localhost:8080/logout", {
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg={isScrolled ? "white" : "rgba(50, 50, 175, 0.9)"}
      transition="all 0.3s ease"
      boxShadow={isScrolled ? "sm" : "none"}
      backdropFilter={isScrolled ? "none" : "blur(8px)"}
      fontFamily="'Poppins', sans-serif"
    >
      <Flex
        h="80px"
        alignItems="center"
        justifyContent="space-between"
        maxW="1400px"
        mx="auto"
        px={6}
      >
        <Link to="/">
          <Image src={logo} h="50px" />
        </Link>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <Text 
              fontSize="16px"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ color: isScrolled ? "purple.500" : "purple.200" }}
              transition="all 0.3s ease"
            >
              Home
            </Text>
          </Link>
          <Link to="/pets">
            <Text 
              fontSize="16px"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ color: isScrolled ? "purple.500" : "purple.200" }}
              transition="all 0.3s ease"
            >
              Adopt Pet
            </Text>
          </Link>
          <Link to="/services">
            <Text 
              fontSize="16px"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ color: isScrolled ? "purple.500" : "purple.200" }}
              transition="all 0.3s ease"
            >
              Services
            </Text>
          </Link>

          {userData ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color={isScrolled ? "gray.700" : "white"}
                fontSize="16px"
                fontWeight="500"
                _hover={{ bg: isScrolled ? "purple.50" : "whiteAlpha.200" }}
              >
                Welcome, {userData.name}
              </MenuButton>
              <MenuList>
                <MenuItem 
                  onClick={handleLogout}
                  fontSize="16px"
                  fontWeight="500"
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <HStack spacing={4}>
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  color={isScrolled ? "gray.700" : "white"}
                  fontSize="16px"
                  fontWeight="500"
                  _hover={{ 
                    bg: isScrolled ? "purple.50" : "whiteAlpha.200",
                    transform: "translateY(-1px)"
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  bg={isScrolled ? "purple.600" : "white"}
                  color={isScrolled ? "white" : "purple.600"}
                  fontSize="16px"
                  fontWeight="500"
                  _hover={{
                    bg: isScrolled ? "purple.700" : "purple.50",
                    transform: "translateY(-1px)"
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </HStack>
          )}
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={isScrolled ? "gray.800" : "white"}
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent fontFamily="'Poppins', sans-serif">
            <DrawerCloseButton />
            <DrawerHeader fontSize="18px" fontWeight="600">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Link to="/" onClick={onClose}>
                  <Text fontSize="16px" fontWeight="500">Home</Text>
                </Link>
                <Link to="/pets" onClick={onClose}>
                  <Text fontSize="16px" fontWeight="500">Adopt Pet</Text>
                </Link>
                <Link to="/services" onClick={onClose}>
                  <Text fontSize="16px" fontWeight="500">Services</Text>
                </Link>
                {userData ? (
                  <>
                    <Text fontSize="16px" fontWeight="500" color="gray.500">
                      Welcome, {userData.name}
                    </Text>
                    <Button 
                      colorScheme="purple" 
                      onClick={handleLogout}
                      fontSize="16px"
                      fontWeight="500"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button 
                        w="full" 
                        variant="outline"
                        fontSize="16px"
                        fontWeight="500"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={onClose}>
                      <Button 
                        w="full" 
                        colorScheme="purple"
                        fontSize="16px"
                        fontWeight="500"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;