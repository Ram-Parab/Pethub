import { Box, Button, Heading, Stack, Text, Input } from "@chakra-ui/react";
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
         <Box>
            <Heading color={"#6504b5"} p={"5% 20%"} mt="50px">
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={8}
               bg={"#EDE7F6"}
               padding={8}
               borderRadius="xl"
               boxShadow="lg"
               _hover={{ transform: "translateY(-5px)" }}
               transition="transform 0.3s ease"
            >
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        /* Optional: Position the image within the container */
                        //   position: "absolute",
                        //   top: 0;
                        //   left: 0;
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  {/* <Text fontWeight={600}>Boo</Text> */}
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Boo
                  </Heading>
                  {/* <h2>Boo</h2> */}
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64094873/1/?bust=1683454882&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Rallo
                  </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59534213/1/?bust=1683800901&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Bravo
                  </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Tullo
                  </Heading>
               </Box>
            </Stack>
         </Box>

         <Box >
            <Heading
               textAlign="center"
               fontFamily="arial helvetica "
               //  line-height: 1.2;
               //  font-size: 30px;
               //  font-weight: 400;
               color="#4d4751"
            //  margin-bottom: 40px;
            >
               Planning to Adopt a Pet?
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={"40px"}
               justifyContent={"center"}
               alignItems={"center"}
            >
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Checklist for New Adopters
                  </Heading>
                  <Text>Help make the transition, as smooth as possible.</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
               </Box>
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     COVID-19 Resources
                  </Heading>
                  <Text>
                     Get the latest on adoption processes, learn how local
                     shelters and rescue groups are adapting and find out what
                     you can do to help dogs and cats in need right now.
                  </Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  
               </Box>
               <Box w={300}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Pet Adoption FAQs
                  </Heading>
                  <Text>Get answers to questions you haven't thought of.</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  
               </Box>
            </Stack>
         </Box>
         <Box margin={["50px 20px", "150px 100px"]}>
            <Heading color={"#6504b5"} mb="30px">
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={8}
               bg={"#EDE7F6"}
               padding={8}
               borderRadius="xl"
               boxShadow="lg"
               _hover={{ transform: "translateY(-5px)" }}
               transition="transform 0.3s ease"
            >
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        /* Optional: Position the image within the container */
                        //   position: "absolute",
                        //   top: 0;
                        //   left: 0;
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64228600/1/?bust=1683713812&width=450"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Rambo
                  </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064016/1/?bust=1683800914&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Boo
                  </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48017216/1/?bust=1591006865&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Boo
                  </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316"
                     alt=""
                  />
                  <Heading p={"20px 0px"} fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
                     Boo
                  </Heading>
               </Box>
            </Stack>
         </Box>
         <Box p={10}>
            <div className="article">
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
                  className="article-box"
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                     alt=""
                  />
                  <Heading p={5}>Dogs Adoption Article</Heading>
                  <Text p={5}>Learn about caring for your new dog</Text>
                  <Button
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 80px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                     className="learn-more"
                  >
                     Learn More
                  </Button>
                  {/* <Button m={5}>LEARN MORE</Button> */}
               </Box>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
                  className="article-box"
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                     alt=""
                  />
                  <Heading p={5}>Cat Adoption Article</Heading>
                  <Text p={5}>Helpful insights on what to expect</Text>
                  <Button
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 80px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                     className="learn-more"
                  >
                     Learn More
                  </Button>
               </Box>
            </div>
         </Box>
      </Box>
   );
};

export default Home;
