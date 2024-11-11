import React, { useEffect, useState } from "react";
import {
    Box,
    VStack,
    Text,
    Checkbox,
    Divider,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialGender = searchParams.get('gender');
    const initialBreed = searchParams.get("breed");
    const initialAge = searchParams.get("age");
    const initialSize = searchParams.get("size");

    const [gender, setGender] = useState(initialGender ? initialGender.split(',') : []);
    const [breed, setBreed] = useState(initialBreed ? initialBreed.split(',') : []);
    const [age, setAge] = useState(initialAge ? initialAge.split(',') : []);
    const [size, setSize] = useState(initialSize ? initialSize.split(',') : []);

    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    useEffect(() => {
        let params = {};
        if (gender.length > 0) params.gender = gender.join(',');
        if (breed.length > 0) params.breed = breed.join(',');
        if (age.length > 0) params.age = age.join(',');
        if (size.length > 0) params.size = size.join(',');
        setSearchParams(params);
    }, [gender, breed, age, size, setSearchParams]);

    const handleBreed = (value) => {
        setBreed(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleAge = (value) => {
        setAge(prev => 
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleSize = (value) => {
        setSize(prev => 
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleGender = (value) => {
        setGender(prev => 
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const clearFilters = () => {
        setBreed([]);
        setAge([]);
        setSize([]);
        setGender([]);
    };

    const breeds = ["Husky", "Hound Mix", "Pit Bull", "Terrier Mix", "Foxhound"];
    const ages = ["Puppy", "Young", "Adult"];
    const sizes = ["Small", "Medium", "Large"];
    const genders = ["Male", "Female"];

    return (
        <Box 
            bg={bgColor} 
            p={6}
            borderRight="1px"
            borderColor={borderColor}
            height="100%"
        >
            <VStack spacing={6} align="stretch" pb={6}>
                <Box>
                    <Text 
                        fontSize="lg" 
                        fontWeight="bold" 
                        mb={4}
                        color="purple.700"
                    >
                        BREED
                    </Text>
                    <VStack spacing={3} align="start">
                        {breeds.map((breedOption) => (
                            <Checkbox 
                                key={breedOption}
                                value={breedOption}
                                isChecked={breed.includes(breedOption)}
                                onChange={() => handleBreed(breedOption)}
                                colorScheme="purple"
                                size="lg"
                            >
                                {breedOption}
                            </Checkbox>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                <Box>
                    <Text 
                        fontSize="lg" 
                        fontWeight="bold" 
                        mb={4}
                        color="purple.700"
                    >
                        AGE
                    </Text>
                    <VStack spacing={3} align="start">
                        {ages.map((ageOption) => (
                            <Checkbox 
                                key={ageOption}
                                value={ageOption}
                                isChecked={age.includes(ageOption)}
                                onChange={() => handleAge(ageOption)}
                                colorScheme="purple"
                                size="lg"
                            >
                                {ageOption}
                            </Checkbox>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                <Box>
                    <Text 
                        fontSize="lg" 
                        fontWeight="bold" 
                        mb={4}
                        color="purple.700"
                    >
                        SIZE
                    </Text>
                    <VStack spacing={3} align="start">
                        {sizes.map((sizeOption) => (
                            <Checkbox 
                                key={sizeOption}
                                value={sizeOption.toLowerCase()}
                                isChecked={size.includes(sizeOption.toLowerCase())}
                                onChange={() => handleSize(sizeOption.toLowerCase())}
                                colorScheme="purple"
                                size="lg"
                            >
                                {sizeOption}
                            </Checkbox>
                        ))}
                    </VStack>
                </Box>

                <Divider />

                <Box>
                    <Text 
                        fontSize="lg" 
                        fontWeight="bold" 
                        mb={4}
                        color="purple.700"
                    >
                        GENDER
                    </Text>
                    <VStack spacing={3} align="start">
                        {genders.map((genderOption) => (
                            <Checkbox 
                                key={genderOption}
                                value={genderOption.toLowerCase()}
                                isChecked={gender.includes(genderOption.toLowerCase())}
                                onChange={() => handleGender(genderOption.toLowerCase())}
                                colorScheme="purple"
                                size="lg"
                            >
                                {genderOption}
                            </Checkbox>
                        ))}
                    </VStack>
                </Box>

                <Button
                    mt={4}
                    mb={6}
                    colorScheme="purple"
                    size="lg"
                    borderRadius="full"
                    onClick={clearFilters}
                >
                    Clear Filters
                </Button>
            </VStack>
        </Box>
    );
}
