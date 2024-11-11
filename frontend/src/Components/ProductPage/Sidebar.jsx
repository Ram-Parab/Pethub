// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Flex,
//     Stack,
//     Select,
//     Text,
// } from "@chakra-ui/react";
// import { useSearchParams } from "react-router-dom";

// export default function Sidebar() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const initialGender = searchParams.get('gender');
//     const initialBreed = searchParams.get("breed");
//     const initialAge = searchParams.get("age");
//     const initialSize = searchParams.get("size");

//     const [gender, setGender] = useState(initialGender || "");
//     const [breed, setBreed] = useState(initialBreed || "");
//     const [age, setAge] = useState(initialAge || "");
//     const [size, setSize] = useState(initialSize || "");

//     useEffect(() => {

//         let params = {}
//         gender && (params.gender=gender);
//         breed && (params.breed=breed);
//         age && (params.age=age);
//         size && (params.size=size)
//         setSearchParams(params)
//     }, [gender, breed, age, size])


//     const handleGender = (e) => {
//         const { value } = e.target;
//         let newGender = gender;
//         if (newGender !== value) {
//             newGender = value;
//         } 
//         setGender(newGender)
//     }

//     const handleBreed = (e) => {
//         const { value } = e.target;
//         let newBreed = breed;
//         if (newBreed !== value) {
//             newBreed = value;
//         }
//         setBreed(newBreed)

//     }

//     const handleAge = (e) => {
//         const { value } = e.target;
//         let newAge = age;
//         if (newAge !== value) {
//             newAge = value;
//         }
//         setAge(newAge)

//     }

//     const handleSize = (e) => {
//         const { value } = e.target;
//         let newSize = size;
//         if (newSize !== value) {
//             newSize = value;
//         }
//         setSize(newSize)

//     }

//     return (
//         <Box>
//             <Flex
//                 justifyContent={"end"}

//             >
//                 <Box w={"100%"}>
//                     <Stack  >
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>BREED</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleBreed} value={breed}>
//                             <option value="">Any</option>
//                             <option value="Husky">Husky</option>
//                             <option value="Hound Mix">Hound Mix</option>
//                             <option value="Pit Bull">Pit Bull</option>
//                             <option value="Terrier Mix">Terrier Mix</option>
//                             <option value="Foxhound">Foxhound</option>
//                             <option value="German Shepherd">German Shepherd</option>
//                             <option value="Chow Chow Mix">Chow Chow Mix</option>
//                             <option value="Pointer & Hound Mix'">Pointer & Hound Mix'</option>
//                             <option value="Hound & German Shepherd Dog Mix">Hound & German Shepherd Dog Mix</option>
//                         </Select>
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>AGE</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleAge} value={age}>
//                             <option value="">Any</option>
//                             <option value="Puppy">Puppy</option>
//                             <option value="Adult">Adult</option>
//                             <option value="Young">Young</option>
//                         </Select>
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>SIZE</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleSize} value={size}>
//                             <option value="">Any</option>
//                             <option value="small">Small</option>
//                             <option value="medium">Medium</option>
//                             <option value="large">Large</option>
//                         </Select>
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>GENDER</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleGender} value={gender}>
//                             <option value="">Any</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                         </Select>
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>GOOD WITH</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}>
//                             <option value="">Any</option>
//                             {/* Add more options here */}
//                         </Select>
//                         {/* <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>COAT LENGTH</Text> */}
//                         {/* <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}> */}
//                             {/* <option value="">Any</option> */}
//                             {/* Add more options here */}
//                         {/* </Select> */}
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>COLOR</Text>
//                         <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}>
//                             <option value="">Any</option>
//                             {/* Add more options here */}
//                         </Select>
//                     </Stack>

//                 </Box>
//             </Flex>
//         </Box>
//     );
// }


import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Stack,
    Checkbox, // Use Checkbox instead of Select
    Text,
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

    useEffect(() => {
        let params = {}
        if (gender.length > 0) params.gender = gender.join(',');
        if (breed.length > 0) params.breed = breed.join(',');
        if (age.length > 0) params.age = age.join(',');
        if (size.length > 0) params.size = size.join(',');
        setSearchParams(params)
    }, [gender, breed, age, size])

    const handleGender = (value) => {
        if (gender.includes(value)) {
            setGender(gender.filter((item) => item !== value));
        } else {
            setGender([...gender, value]);
        }
    }

    const handleBreed = (value) => {
        if (breed.includes(value)) {
            setBreed(breed.filter((item) => item !== value));
        } else {
            setBreed([...breed, value]);
        }
    }

    const handleAge = (value) => {
        if (age.includes(value)) {
            setAge(age.filter((item) => item !== value));
        } else {
            setAge([...age, value]);
        }
    }

    const handleSize = (value) => {
        if (size.includes(value)) {
            setSize(size.filter((item) => item !== value));
        } else {
            setSize([...size, value]);
        }
    }

    return (
        <Box>
            <Flex justifyContent={"end"}>
                <Box w={"100%"}>
                    <Stack>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>BREED</Text>
                        <Checkbox value="Husky" isChecked={breed.includes("Husky")} onChange={() => handleBreed("Husky")}>Husky</Checkbox>
                        <Checkbox value="Hound Mix" isChecked={breed.includes("Hound Mix")} onChange={() => handleBreed("Hound Mix")}>Hound Mix</Checkbox>
                        <Checkbox value="Pit Bull" isChecked={breed.includes("Pit Bull")} onChange={() => handleBreed("Pit Bull")}>Pit Bull</Checkbox>
                        <Checkbox value="Terrier Mix" isChecked={breed.includes("Terrier Mix")} onChange={() => handleBreed("Terrier Mix")}>Terrier Mix</Checkbox>
                        <Checkbox value="Foxhound" isChecked={breed.includes("Foxhound")} onChange={() => handleBreed("Foxhound")}>Foxhound</Checkbox>
                        {/* Add more breed checkboxes as needed */}
                        
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>AGE</Text>
                        <Checkbox value="Puppy" isChecked={age.includes("Puppy")} onChange={() => handleAge("Puppy")}>Puppy</Checkbox>
                        <Checkbox value="Adult" isChecked={age.includes("Adult")} onChange={() => handleAge("Adult")}>Adult</Checkbox>
                        <Checkbox value="Young" isChecked={age.includes("Young")} onChange={() => handleAge("Young")}>Young</Checkbox>
                        {/* Add more age checkboxes as needed */}
                        
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>SIZE</Text>
                        <Checkbox value="small" isChecked={size.includes("small")} onChange={() => handleSize("small")}>Small</Checkbox>
                        <Checkbox value="medium" isChecked={size.includes("medium")} onChange={() => handleSize("medium")}>Medium</Checkbox>
                        <Checkbox value="large" isChecked={size.includes("large")} onChange={() => handleSize("large")}>Large</Checkbox>
                        {/* Add more size checkboxes as needed */}
                        
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>GENDER</Text>
                        <Checkbox value="male" isChecked={gender.includes("male")} onChange={() => handleGender("male")}>Male</Checkbox>
                        <Checkbox value="female" isChecked={gender.includes("female")} onChange={() => handleGender("female")}>Female</Checkbox>
                        {/* Add more gender checkboxes as needed */}
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}
