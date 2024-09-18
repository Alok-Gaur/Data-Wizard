import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserEducation } from '../../store/resume/resumeSlice';

const EducationDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [education, setEducation] = useState({
        schoolName: '',
        schoolLocation: '',
        degree: '',
        fieldOfStudy: '',
        graduationDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/skills')
        dispatch(addUserEducation(education))
    };

    return (<>
        <Typography>Education</Typography>
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
                label="schoolName"
                name="schoolName"
                value={education.name}
                onChange={handleChange}
            />
            <TextField
                label="schoolLocation"
                name="schoolLocation"
                value={education.surname}
                onChange={handleChange}
            />
            <TextField
                label="degree"
                name="degree"
                value={education.city}
                onChange={handleChange}
            />
            <TextField
                label="fieldOfStudy"
                name="fieldOfStudy"
                value={education.country}
                onChange={handleChange}
            />
            <TextField
                label="graduationDate"
                name="graduationDate"
                value={education.pincode}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    </>
    );
}

export default EducationDetails
