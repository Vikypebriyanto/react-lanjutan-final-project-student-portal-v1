import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Select } from '@chakra-ui/react'

import { Box, Button, Heading } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [facultyFilter, setFacultyFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:3001/student');
            const data = await response.json();
            setStudents(data);
            setFilteredStudents(data);
        } catch (error) {
            console.log('Error fetching students:', error);
        }
    };

    const handleFilterChange = (event) => {
        const selectedFaculty = event.target.value;
        setFacultyFilter(selectedFaculty);

        if (selectedFaculty === "All") {
            setFilteredStudents(students);
        } else {
            const filtere = students.filter(
                (student) => student.faculty === selectedFaculty
            );
            setFilteredStudents(filtere);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, { method: 'DELETE' });
            const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);
            setFilteredStudents(updatedStudents);
        } catch (error) {
            console.log('Error deleting student:', error);
        }
    };


    return (
        <>
            <Navbar />
            <Box>
                <div className="container">
                    <Heading as="h3" size="lg">
                        All Students
                    </Heading>
                    {students.length === 0 ? (
                        <p className="loading-message">Loading ...</p>
                    ) : (
                        <div>
                            <label htmlFor="faculty-filter">Filter by Faculty:</label>
                            <Select
                                // bg='red'
                                borderColor='tomato'
                                color='black'

                                id="faculty-filter"
                                value={facultyFilter}
                                onChange={handleFilterChange}
                                data-testid="filter"
                            >
                                <option value="All">All</option>
                                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                                <option value="Fakultas Ilmu Sosial dan Politik">
                                    Fakultas Ilmu Sosial dan Politik
                                </option>
                                <option value="Fakultas Teknik">Fakultas Teknik</option>
                                <option value="Fakultas Teknologi Informasi dan Sains">
                                    Fakultas Teknologi Informasi dan Sains
                                </option>
                            </Select>
                            <TableContainer>
                                <Table id="table-student" variant='striped' >
                                    <Thead>
                                        <Tr>
                                            <Th>No</Th>
                                            <Th>Full Name</Th>
                                            <Th>Faculty</Th>
                                            <Th>Program Study</Th>
                                            <Th>Option</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {filteredStudents.map((student, index) => (
                                            <Tr key={student.id} className="student-data-row">
                                                <Td>{index + 1}</Td>
                                                <Td>
                                                    <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                                </Td>
                                                <Td>{student.faculty}</Td>
                                                <Td>{student.programStudy}</Td>
                                                <Td>
                                                    <Button colorScheme='red' data-testid={`delete-${student.id}`}
                                                        onClick={() => handleDelete(student.id)}
                                                    >Delete</Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </div>
                    )}
                    <Box className="footer">
                        {/* Your footer content */}
                    </Box>
                </div >
            </Box >

            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }

                h1 {
                    margin-top: 20px;
                }

                .container {
                    margin: 20px;
                }

                #table-student {
                    width: 100%;
                    border-collapse: collapse;
                }

                #table-student th,
                #table-student td {
                    padding: 8px;
                    border: 1px solid #ccc;
                }

                #table-student th {
                    background-color: #f2f2f2;
                    text-align: left;
                }

                .student-data-row:hover {
                    background-color: #f9f9f9;
                }

                label {
                    margin-right: 10px;
                    width: '99%',
                }

                select {
                    padding: 5px;
                }

                button {
                    padding: 5px 10px;
                    background-color: #dc3545;
                    color: white;
                    border: none;
                    cursor: pointer;
                    width: '99%',
                }

                button:hover {
                    background-color: #c82333;
                }

                .loading-message {
                    margin-top: 20px;
                    font-style: italic;
                }
            `}</style>
        </>
    );
};

export default Student;
