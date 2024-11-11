import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

function ServiceRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please login to view your service requests');
      setLoading(false);
      return;
    }

    fetch('http://localhost:8080/service', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRequests(data.data);
        } else {
          setError('Failed to fetch service requests');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" pt="100px">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" pt="100px">
      <Heading mb={6}>My Service Requests</Heading>
      {requests.length === 0 ? (
        <Text>No service requests found.</Text>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Pet Type</Th>
              <Th>Service Type</Th>
              <Th>Start Date</Th>
              <Th>End Date</Th>
              <Th>Duration (hours/day)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {requests.map((request) => (
              <Tr key={request._id}>
                <Td>{request.pet}</Td>
                <Td>
                  <Badge colorScheme="purple">{request.type_of_service}</Badge>
                </Td>
                <Td>{new Date(request.startDate).toLocaleDateString()}</Td>
                <Td>{new Date(request.endTime).toLocaleDateString()}</Td>
                <Td>{request.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
}

export default ServiceRequests; 