import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUserProfile } from '../../store/resume/resumeSlice';
import axios from "axios"

const ProfileSummary = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const { handleSubmit, control } = useForm();
    const [submittedData, setSubmittedData] = useState('');     
    

    const postProfileSummary = async (updatedData) => {
        try {
            const response = await axios.post('http://localhost:8000/resume/create-resume/', updatedData);
            console.log("Profile summary posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting profile summary:", error);
        }
    };
    
    const submit = async (data) => {
        setSubmittedData(data.content);    
        dispatch(addUserProfile(data.content));
    
        postProfileSummary({
            ...userData,
            profileSummary: data.content  
        });
    
        console.log("Updated user data:", userData);
    };
    

    return (
        <>
            <div className='w-full'>
                <form onSubmit={handleSubmit(submit)}>
                    <label className='inline-block mb-1 pl-1'>Profile Summary</label>
                    <Controller
                        name="content"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <Editor
                                apiKey='8bwiy3dhzy1rrbe453cbg6ajcj0f47srdvi9a2as6byucwog'
                                initialValue=""
                                init={{
                                    initialValue: "",
                                    height: 500,
                                    menubar: true,
                                    plugins: [
                                        "advlist",
                                        "autolink",
                                        "lists",
                                        "link",
                                        "charmap",
                                        "preview",
                                        "anchor",
                                        "searchreplace",
                                        "visualblocks",
                                        "code",
                                        "fullscreen",
                                        "insertdatetime",
                                        "table",
                                        "code",
                                        "help",
                                        "wordcount",
                                        "anchor",
                                    ],
                                    toolbar:
                                        "undo redo | blocks | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                                }}
                                onEditorChange={onChange}
                            />
                        )}
                    />
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
                </form>

                
                {submittedData && (
                    <Box mt={2} p={2} border={1} borderColor="grey.300">
                        <h3>Submitted Profile Summary:</h3>
                        <div dangerouslySetInnerHTML={{ __html: submittedData }} />
                    </Box>
                )}
            </div>
        </>
    );
};

export default ProfileSummary;
