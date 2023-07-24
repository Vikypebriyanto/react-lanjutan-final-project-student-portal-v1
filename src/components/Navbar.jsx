import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link, Center, Heading, Grid } from "@chakra-ui/react";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Center flexDirection="column">
                    <h1 data-testid="home-page">
                        <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center">
                            <Link as={ReachLink} to="/" data-testid="student-btn">
                                Student Portal
                            </Link>
                        </Heading>
                    </h1>
                </Center>
                <Grid templateColumns="max-content 1fr" gap={2} justifyItems="start">
                    <Link as={ReachLink} to="/student" data-testid="student-page">
                        <button>All Student</button>
                    </Link>
                    <Link as={ReachLink} to="/add" data-testid="add-page">
                        <button>Add Student</button>
                    </Link>
                </Grid>
            </nav>
        </div>
    );
};

export default NavBar;
