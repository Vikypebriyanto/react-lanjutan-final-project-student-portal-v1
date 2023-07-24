import React from "react";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/");
    };

    return (
        <Center height="90vh">
            <Box p={4} textAlign="center">
                <Heading as="h1" size="xl" fontWeight="bold">
                    404 | Page Not Found
                </Heading>
                <p>The requested page could not be found.</p>
                <Button colorScheme="blue" onClick={handleBackHome}>
                    Take Me Back
                </Button>
            </Box>
        </Center>
    );
};

export default NotFound;