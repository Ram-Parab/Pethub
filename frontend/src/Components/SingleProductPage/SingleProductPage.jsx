import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Badge, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaBirthdayCake, FaRuler, FaVenusMars } from "react-icons/fa";

const SingleProductPage = () => {
    const { id } = useParams();
    const data = useSelector((store) => store.petData.data);
    const singleProduct = data.find(ele => ele._id === id);

    return (
        <Box maxW="1200px" mx="auto" px={4} py={8} mt="100px">
            {singleProduct && (
                <Box 
                    display={{ base: "block", md: "flex" }}
                    gap={8}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="lg"
                >
                    {/* Image Section */}
                    <Box 
                        flex="1"
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                    >
                        <img 
                            src={singleProduct.image} 
                            alt={singleProduct.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "12px"
                            }}
                        />
                    </Box>

                    {/* Details Section */}
                    <VStack 
                        flex="1"
                        align="start"
                        spacing={6}
                        p={6}
                        bg="gray.50"
                        borderRadius="xl"
                    >
                        <Box>
                            <Badge 
                                colorScheme="purple" 
                                fontSize="md" 
                                px={3} 
                                py={1} 
                                borderRadius="full"
                                mb={3}
                            >
                                {singleProduct.age}
                            </Badge>
                            <Heading 
                                size="2xl" 
                                color="purple.700"
                                mb={2}
                            >
                                {singleProduct.name}
                            </Heading>
                        </Box>

                        <VStack align="start" spacing={4} w="100%">
                            <HStack spacing={4}>
                                <Icon as={FaMapMarkerAlt} color="purple.500" boxSize={5} />
                                <Text fontSize="lg" color="gray.600">
                                    7 miles away
                                </Text>
                            </HStack>

                            <HStack spacing={4}>
                                <Icon as={FaBirthdayCake} color="purple.500" boxSize={5} />
                                <Text fontSize="lg" color="gray.700">
                                    <Text as="span" fontWeight="bold">Breed: </Text>
                                    {singleProduct.breed}
                                </Text>
                            </HStack>

                            <HStack spacing={4}>
                                <Icon as={FaVenusMars} color="purple.500" boxSize={5} />
                                <Text fontSize="lg" color="gray.700">
                                    <Text as="span" fontWeight="bold">Gender: </Text>
                                    {singleProduct.gender}
                                </Text>
                            </HStack>

                            <HStack spacing={4}>
                                <Icon as={FaRuler} color="purple.500" boxSize={5} />
                                <Text fontSize="lg" color="gray.700">
                                    <Text as="span" fontWeight="bold">Size: </Text>
                                    {singleProduct.size}
                                </Text>
                            </HStack>
                        </VStack>

                        <Box w="100%" pt={4}>
                            <Button
                                colorScheme="purple"
                                size="lg"
                                w="100%"
                                borderRadius="full"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                                transition="all 0.3s"
                            >
                                Adopt {singleProduct.name}
                            </Button>
                        </Box>

                        <Box 
                            bg="purple.50" 
                            p={4} 
                            borderRadius="lg" 
                            w="100%"
                        >
                            <Text fontSize="md" color="purple.700">
                                Meet {singleProduct.name}, a loving {singleProduct.breed} looking for a forever home. 
                                {singleProduct.name} is {singleProduct.age} and would make a perfect companion for 
                                the right family.
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            )}
        </Box>
    );
};

export default SingleProductPage;