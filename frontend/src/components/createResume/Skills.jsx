import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';

const Skills = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('')
    const [skills, setSkills] = useState([]);

    const handleAddSkills = () => {
        if (input.trim() === '') {
            alert('Please enter a skill')
            return
        }
        setSkills(prevSkills => [...prevSkills, input])
        setInput('')
    };

    // console.log(skills)

    useEffect(() => {
        console.log(skills)
    }, [skills])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: 'auto' }}>
                <TextField
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" onClick={handleAddSkills}>
                    Add Skill
                </Button>
                <Box>
                    {skills.map((skill, index) => (
                        <Box key={index}>{skill}</Box>
                    ))}
                </Box>
            </Box>
            <Button onClick={()=>navigate('/profile-summary')}>Next</Button>
        </>
    );
}

export default Skills