import React from "react";
import { Box, Image, Flex, Badge, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <Link to={`/pets/${data._id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height={"400px"}
        boxShadow={"lg"}
        bg={"white"}
      >
        <Image src={data.image} alt="Puppy image" h={"75%"} w={"100%"} />

        <Box
          h={"25%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text pt={"15px"} color={"#3f38a2"} fontWeight={"semibold"}>
            {data.name}
          </Text>

          <Text fontSize={"sm"} pt={"3px"}>
            {data.age} • {data.breed}
          </Text>

          <Text fontSize={"sm"} pt={"2px"}>
            7 miles away
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
