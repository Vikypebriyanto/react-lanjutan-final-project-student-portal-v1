// TODO: answer here
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react'

const AddStudent = () => {
    // TODO: answer here
    const [fullname, setFullname] = useState('');
    const [profilePicture, setProfilePicture] = useState("");
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let faculty = '';
        if (programStudy === 'Ekonomi' || programStudy === 'Manajemen' || programStudy === 'Akuntansi') {
            faculty = 'Fakultas Ekonomi';
        } else if (programStudy === 'Administrasi Publik' || programStudy === 'Administrasi Bisnis' || programStudy === 'Hubungan Internasional') {
            faculty = 'Fakultas Ilmu Sosial dan Politik';
        } else if (programStudy === 'Teknik Sipil' || programStudy === 'Arsitektur') {
            faculty = 'Fakultas Teknik';
        } else if (programStudy === 'Matematika' || programStudy === 'Fisika' || programStudy === 'Informatika') {
            faculty = 'Fakultas Teknologi Informasi dan Sains';
        }

        const newStudent = {
            fullname,
            profilePicture,
            address,
            phoneNumber,
            birthDate: birthdate,
            gender,
            faculty,
            programStudy,
        };

        fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
            .then(() => {
                navigate('/student');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // CSS Styles
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0',
    };

    const studentPortalStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const adminStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const adminTextStyle = {
        marginRight: '10px',
        fontSize: '18px',
    };

    const adminImageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    };

    return (
        <>
            {/* TODO: answer here */}
            <Navbar />
            <Box>
                <div style={containerStyle}>
                    <Heading as="h3" size="md">
                        Add Student
                    </Heading>
                    <div className="student-portal" style={studentPortalStyle}>
                    </div>
                    <div className="admin" style={adminStyle}>
                        <div className="admin-text" style={adminTextStyle}>
                            Admin
                        </div>
                        <img
                            src="https://www.jurnalpase.com/wp-content/uploads/2019/03/admin_jurnalpase.png"
                            alt="Admin Profile"
                            style={adminImageStyle}
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                        <label htmlFor="fullname" style={{ fontWeight: 'bold' }}>Fullname:</label>
                        <Input variant='filled'
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="profilePicture" style={{ fontWeight: 'bold' }}>Profile Picture:</label>
                        <Input variant='filled'
                            type="text"
                            id="profilePicture"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="profilePicture"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" style={{ fontWeight: 'bold' }}>Address:</label>
                        <Input variant='filled'
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="address"
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" style={{ fontWeight: 'bold' }}>Phone Number:</label>
                        <Input variant='filled'
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="phoneNumber"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthdate" style={{ fontWeight: 'bold' }}>Birth Date:</label>
                        <Input variant='filled'
                            type="text"
                            id="birthdate"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="date"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" style={{ fontWeight: 'bold' }}>Gender:</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="gender"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="programStudy" style={{ fontWeight: 'bold' }}>Program Study:</label>
                        <select
                            value={programStudy}
                            onChange={(e) => setProgramStudy(e.target.value)}
                            required
                            style={{
                                padding: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '3px',
                                width: '99%',
                            }}
                            data-testid="prody"
                        >
                            <option value="">Select Program Study</option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </select>

                    </div>

                    <Button type="submit" colorScheme='red' data-testid="add-btn">Submit</Button>
                </form>
            </Box>
            <style>
                {`
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
        `}
            </style>
        </>
    );
};

export default AddStudent;
