import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Button,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import five from "../Images/fo.png";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text 
      fontSize="lg" 
      fontWeight="700" 
      mb={4} 
      color="white"
      textTransform="uppercase"
      letterSpacing="wide"
    >
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("whiteAlpha.200", "whiteAlpha.200")}
      rounded="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease"
      _hover={{
        bg: "whiteAlpha.400",
        transform: "translateY(-2px)",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const FooterLink = ({ children, ...props }) => {
  return (
    <Link
      color="gray.200"
      fontSize="sm"
      _hover={{
        color: "white",
        transform: "translateX(5px)",
      }}
      transition="all 0.3s ease"
      display="inline-block"
      {...props}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#3232af", "gray.900")}
      color={useColorModeValue("#ffffff", "gray.200")}
      position="relative"
      mt={20}
    >
      <Box>
        <Image src={five} alt="" width="100%" objectFit="cover" />
      </Box>
      
      <Container maxW="7xl" py={16}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          spacing={{ base: 8, md: 10 }}
        >
          <VStack align="flex-start" spacing={4}>
            <ListHeader>RESOURCES</ListHeader>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Mobile App Download</FooterLink>
            <FooterLink href="#">Partnerships</FooterLink>
            <FooterLink href="#">News Center</FooterLink>
            <FooterLink href="#">Put Pethub On Your Site</FooterLink>
            <FooterLink href="#">For Developers</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <ListHeader>ADOPT OR GET INVOLVED</ListHeader>
            <FooterLink href="#">All Adopt or Get Involved</FooterLink>
            <FooterLink href="#">Adopting Pets</FooterLink>
            <FooterLink href="#">Animal Shelters & Rescues</FooterLink>
            <FooterLink href="#">Other Types of Pets</FooterLink>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <ListHeader>ABOUT DOGS & PUPPIES</ListHeader>
            <FooterLink href="#">All About Dogs & Puppies</FooterLink>
            <FooterLink href="#">Dog Adoption</FooterLink>
            <FooterLink href="#">Dog Breeds</FooterLink>
            <FooterLink href="#">Dog Health & Wellness</FooterLink>
            <FooterLink href="#">Dog Training</FooterLink>
          </VStack>

          <VStack align="flex-start" spacing={4}>
            <ListHeader>ABOUT CATS & KITTENS</ListHeader>
            <FooterLink href="#">All About Cats & Kittens</FooterLink>
            <FooterLink href="#">Cat Adoption</FooterLink>
            <FooterLink href="#">Cat Breeds</FooterLink>
            <FooterLink href="#">Cat Health & Wellness</FooterLink>
            <FooterLink href="#">Cat Training</FooterLink>
          </VStack>

          <VStack 
            align="stretch" 
            spacing={6}
            bg="whiteAlpha.100"
            p={6}
            borderRadius="xl"
          >
            <Text color="white" fontSize="md" fontWeight="500">
              Get the latest on pet adoption and pet care, sign up for the Pethub newsletter.
            </Text>
            <Input
              placeholder="Enter your email"
              bg="white"
              color="gray.800"
              _placeholder={{ color: 'gray.500' }}
              borderRadius="full"
              height="50px"
              fontSize="md"
            />
            <Button
              colorScheme="purple"
              size="lg"
              borderRadius="full"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              Submit
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor="whiteAlpha.200"
      >
        <Container
          maxW="7xl"
          py={6}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
            ©2023 Pethub.com All trademarks are owned by Société des Produits
            Nestlé S.A., or used with permission.
          </Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Facebook" href="#">
              <FaFacebook />
            </SocialButton>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
            <SocialButton label="LinkedIn" href="#">
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

