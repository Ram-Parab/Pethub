import React from "react";
import { Box, Image, Text, Badge, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <Link to={`/pets/${data._id}`}>
      <Box
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        height="400px"
        transition="all 0.3s ease"
        position="relative"
        bg="white"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "xl",
        }}
      >
        <Image 
          src={data.image} 
          alt={data.name}
          h="70%" 
          w="100%"
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
        
        <VStack 
          p={4} 
          spacing={2} 
          align="start"
          position="relative"
        >
          <Badge 
            colorScheme="purple" 
            position="absolute"
            top="-32px"
            right="12px"
            fontSize="sm"
            px={3}
            py={1}
            borderRadius="full"
            bg="white"
            color="purple.600"
          >
            {data.age}
          </Badge>
          
          <Text 
            fontSize="xl" 
            fontWeight="bold" 
            color="purple.700"
            mt={2}
          >
            {data.name}
          </Text>
          
          <Text fontSize="sm" color="gray.600">
            {data.breed}
          </Text>
          
          <Text 
            fontSize="sm" 
            color="gray.500"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <span role="img" aria-label="location">📍</span>
            7 miles away
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
