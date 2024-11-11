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
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Clear invalid data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
    navigate("/");
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
    >
      <Flex
        h="80px"
        alignItems="center"
        justifyContent="space-between"
        maxW="1400px"
        mx="auto"
        px={6}
      >
        {/* Logo */}
        <Link to="/">
          <Image 
            src={logo} 
            h="50px" 
          />
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <Text
              fontSize="md"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ 
                color: isScrolled ? "purple.500" : "purple.200",
                transform: "translateY(-1px)"
              }}
              transition="all 0.3s ease"
            >
              Home
            </Text>
          </Link>
          <Link to="/pets">
            <Text
              fontSize="md"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ 
                color: isScrolled ? "purple.500" : "purple.200",
                transform: "translateY(-1px)"
              }}
              transition="all 0.3s ease"
            >
              Adopt Pet
            </Text>
          </Link>
          <Link to="/services">
            <Text
              fontSize="md"
              fontWeight="500"
              color={isScrolled ? "gray.700" : "white"}
              _hover={{ 
                color: isScrolled ? "purple.500" : "purple.200",
                transform: "translateY(-1px)"
              }}
              transition="all 0.3s ease"
            >
              Services
            </Text>
          </Link>

          {/* User Menu */}
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                color={isScrolled ? "gray.700" : "white"}
                _hover={{ 
                  bg: isScrolled ? "purple.50" : "whiteAlpha.200"
                }}
              >
                {user}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <HStack spacing={4}>
              <Link to="/login">
                <Button
                  variant="ghost"
                  color={isScrolled ? "gray.700" : "white"}
                  _hover={{ 
                    bg: isScrolled ? "purple.50" : "whiteAlpha.200",
                    transform: "translateY(-1px)"
                  }}
                  transition="all 0.3s ease"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  bg={isScrolled ? "purple.600" : "white"}
                  color={isScrolled ? "white" : "purple.600"}
                  _hover={{
                    bg: isScrolled ? "purple.700" : "purple.50",
                    transform: "translateY(-1px)"
                  }}
                  transition="all 0.3s ease"
                >
                  Sign Up
                </Button>
              </Link>
            </HStack>
          )}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={isScrolled ? "gray.800" : "white"}
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          _hover={{
            bg: isScrolled ? "purple.50" : "whiteAlpha.200"
          }}
        />

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Link to="/" onClick={onClose}>
                  <Text py={2}>Home</Text>
                </Link>
                <Link to="/pets" onClick={onClose}>
                  <Text py={2}>Adopt Pet</Text>
                </Link>
                <Link to="/services" onClick={onClose}>
                  <Text py={2}>Services</Text>
                </Link>
                {user ? (
                  <>
                    <Text py={2} color="gray.500">
                      {user}
                    </Text>
                    <Button colorScheme="purple" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button w="full" variant="outline" colorScheme="purple">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={onClose}>
                      <Button w="full" colorScheme="purple">
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