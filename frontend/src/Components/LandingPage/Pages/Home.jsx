import { Box, Button, Heading, Stack, Text, Input, Image } from "@chakra-ui/react";
import "./Home.css"
import React from "react";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import { Link } from "react-router-dom";
const Home = () => {
   return (
      <Box width="100%" className="home-container">
         <Box className="home-banner">
            {/* <img
            src="https://www.petfinder.com/sites/default/files/styles/hero_image_925_410/public/images/content/925%20hero%20image_0.jpg?itok=wmYYZbrt"
            alt=""
         /> */}
            <h1
               className="banner-heading"
            >
               Find your new best friend. Browse pets from our network of over
               11,500 shelters and rescues.
            </h1>
            <div
               className="boxes"
            >
               <Box boxSize={150} p={1} className="box" >
                  <Link to={"/pets"} >
                     <img src={one} alt="1" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                  </Link>
               </Box>
               <Box boxSize={150} p={1} className="box" >
                  <Link to={"/pets"}>
                     <img src={two} alt="2" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                  </Link>
               </Box>
               <Box boxSize={160} p={1} className="box" >
                  <img src={three} alt="3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
               </Box>
               <Box boxSize={160} p={1} className="box" >
                  <img src={four} alt="4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
               </Box>
            </div>

         </Box>
         <Box mt="-30px" bg="#3232af">
            .
         </Box>
        

         <Box className="planning-section" py={16}>
            <Heading
               textAlign="center"
               fontSize="3xl"
               fontWeight="700"
               color="#4d4751"
               mb={12}
            >
               Planning to Adopt a Pet?
            </Heading>
            <Stack
               direction={{ base: "column", lg: "row" }}
               spacing={8}
               maxW="1200px"
               mx="auto"
               px={4}
            >
               <Box 
                  className="info-card"
                  flex={1}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="lg"
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-8px)" }}
                  display="flex"
                  flexDirection="column"
                  height="400px"
               >
                  <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                     <Heading
                        color="#004c81"
                        fontSize="xl"
                        fontWeight="600"
                        mb={4}
                     >
                        Checklist for New Adopters
                     </Heading>
                     <Text color="gray.600" mb={6}>
                        Help make the transition, as smooth as possible.
                     </Text>
                  </Box>
                  <Button
                     bg="white"
                     color="#004c81"
                     border="2px solid #20ccf8"
                     borderRadius="full"
                     px={8}
                     py={6}
                     _hover={{
                        bg: "#20ccf8",
                        color: "white",
                        transform: "translateY(-2px)"
                     }}
                     transition="all 0.3s"
                     mt="auto"
                  >
                     Learn More
                  </Button>
               </Box>

               <Box 
                  className="info-card"
                  flex={1}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="lg"
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-8px)" }}
                  display="flex"
                  flexDirection="column"
                  height="400px"
               >
                  <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                     <Heading
                        color="#004c81"
                        fontSize="xl"
                        fontWeight="600"
                        mb={4}
                     >
                        COVID-19 Resources
                     </Heading>
                     <Text color="gray.600" mb={6}>
                        Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help pets in need right now.
                     </Text>
                  </Box>
                  <Button
                     bg="white"
                     color="#004c81"
                     border="2px solid #20ccf8"
                     borderRadius="full"
                     px={8}
                     py={6}
                     _hover={{
                        bg: "#20ccf8",
                        color: "white",
                        transform: "translateY(-2px)"
                     }}
                     transition="all 0.3s"
                     mt="auto"
                  >
                     Learn More
                  </Button>
               </Box>

               <Box 
                  className="info-card"
                  flex={1}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="lg"
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-8px)" }}
                  display="flex"
                  flexDirection="column"
                  height="400px"
               >
                  <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                     <Heading
                        color="#004c81"
                        fontSize="xl"
                        fontWeight="600"
                        mb={4}
                     >
                        Pet Adoption FAQs
                     </Heading>
                     <Text color="gray.600" mb={6}>
                        Get answers to questions you haven't thought of.
                     </Text>
                  </Box>
                  <Button
                     bg="white"
                     color="#004c81"
                     border="2px solid #20ccf8"
                     borderRadius="full"
                     px={8}
                     py={6}
                     _hover={{
                        bg: "#20ccf8",
                        color: "white",
                        transform: "translateY(-2px)"
                     }}
                     transition="all 0.3s"
                     mt="auto"
                  >
                     Learn More
                  </Button>
               </Box>
            </Stack>
         </Box>

         <Box className="pets-section" py={16} px={4}>
            <Heading 
               color="#6504b5" 
               textAlign="center"
               fontSize="3xl"
               fontWeight="700"
               mb={12}
            >
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               spacing={8}
               maxW="1200px"
               mx="auto"
            >
               {[
                  { name: "Rambo", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228600/1/?bust=1683713812&width=450" },
                  { name: "Boo", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064016/1/?bust=1683800914&width=316" },
                  { name: "Luna", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48017216/1/?bust=1591006865&width=316" },
                  { name: "Max", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316" }
               ].map((pet, index) => (
                  <Box
                     key={index}
                     className="pet-card"
                     flex={1}
                     bg="white"
                     borderRadius="xl"
                     overflow="hidden"
                     boxShadow="lg"
                     transition="all 0.3s"
                     _hover={{ transform: "translateY(-8px)" }}
                  >
                     <Box position="relative" overflow="hidden">
                        <Image
                           src={pet.image}
                           alt={pet.name}
                           w="100%"
                           h="300px"
                           objectFit="cover"
                           transition="transform 0.3s"
                           _hover={{ transform: "scale(1.05)" }}
                        />
                     </Box>
                     <Box p={6} textAlign="center">
                        <Heading
                           fontSize="2xl"
                           color="purple.700"
                           fontWeight="600"
                        >
                           {pet.name}
                        </Heading>
                     </Box>
                  </Box>
               ))}
            </Stack>
         </Box>

         <Box p={10}>
            <div className="article">
               <Box className="article-box">
                  <img
                    src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                    alt=""
                  />
                  <div className="content-wrapper">
                    <Heading mb={3}>Dogs Adoption Article</Heading>
                    <Text mb={4}>Learn about caring for your new dog</Text>
                  </div>
                  <div className="button-wrapper">
                    <Button
                      bg={"white"}
                      border={"2px solid #20ccf8"}
                      p={"10px 80px"}
                      color="#004c81"
                      borderRadius={"12rem"}
                      className="learn-more"
                      w="100%"
                    >
                      Learn More
                    </Button>
                  </div>
               </Box>

               <Box className="article-box">
                  <img
                    src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                    alt=""
                  />
                  <div className="content-wrapper">
                    <Heading mb={3}>Cat Adoption Article</Heading>
                    <Text mb={4}>Helpful insights on what to expect</Text>
                  </div>
                  <div className="button-wrapper">
                    <Button
                      bg={"white"}
                      border={"2px solid #20ccf8"}
                      p={"10px 80px"}
                      color="#004c81"
                      borderRadius={"12rem"}
                      className="learn-more"
                      w="100%"
                    >
                      Learn More
                    </Button>
                  </div>
               </Box>
            </div>
         </Box>
      </Box>
   );
};

export default Home;
