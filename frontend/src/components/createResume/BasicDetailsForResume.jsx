import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';

const BasicDetailsForResume = () => {
    const navigate = useNavigate();

    const [basicDetails, setBasicDetails] = useState({
        name: '',
        surname: '',
        city: '',
        country: '',
        pincode: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasicDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(basicDetails);
        navigate('/education-details')
    };
    

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '300px',
                margin: 'auto',
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                label="Name"
                name="name"
                value={basicDetails.name}
                onChange={handleChange}
            />
            <TextField
                label="Surname"
                name="surname"
                value={basicDetails.surname}
                onChange={handleChange}
            />
            <TextField
                label="City"
                name="city"
                value={basicDetails.city}
                onChange={handleChange}
            />
            <TextField
                label="Country"
                name="country"
                value={basicDetails.country}
                onChange={handleChange}
            />
            <TextField
                label="Pincode"
                name="pincode"
                value={basicDetails.pincode}
                onChange={handleChange}
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                value={basicDetails.phoneNumber}
                onChange={handleChange}
            />
            <TextField
                label="Email"
                name="email"
                value={basicDetails.email}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    );
};

export default BasicDetailsForResume;
