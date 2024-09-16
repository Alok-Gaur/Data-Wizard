import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { addUserDetails } from '../../store/resume/resumeSlice';

const BasicDetailsForResume = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.basicDetails);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addUserDetails(basicDetails))
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
