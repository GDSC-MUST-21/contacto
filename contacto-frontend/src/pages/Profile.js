import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    languagesKnown: '',
    description: '',
    linkedIn: '',
    gitHub: '',
    twitter: '',
    skills: '',
    education: ''
}

export default function Profile() {

    const [data, setData] = useState(initialData);

    let handleInputChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }

    let submitForm = function (event) {
        console.log(data);
        axios.post("http://localhost:5000/submit", data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Grid container p={5}>
            <Grid item xs={12} p={4}>
                <Typography variant="h5">Profile Settings</Typography>
                <Grid container sx={{ textAlign: 'left' }}>
                    <Grid container p={4}>
                        <Grid item xs mx={2}>
                            <Typography variant="body1">First Name</Typography>
                            <TextField fullWidth
                                id="standard-basic"
                                name='firstName'
                                value={data.firstName}
                                onChange={handleInputChange} 
                                size="small"
                                placeholder="first name"
                            />
                        </Grid>
                        <Grid item xs mx={2}>
                            <Typography variant="body1">Last Name</Typography>
                            <TextField fullWidth
                                id="standard-basic"
                                name='lastName'
                                value={data.lastName}
                                onChange={handleInputChange}
                                size="small"
                                placeholder="last name"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} px={4} mx={2}>
                        <Typography variant="body1">Add a photo</Typography>
                        <Input accept="file/*" id="contained-button-file" multiple type="file" placeholder="Add a photo" />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Email ID</Typography>
                        <TextField fullWidth
                            id="standard-basic"
                            name='email'
                            value={data.email}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="Enter email ID"
                        />
                    </Grid>
                    <Grid container px={4}>
                        <Grid item xs mx={2}>
                            <Typography variant="body1">Country</Typography>
                            <TextField fullWidth
                                id="standard-basic"
                                name='country'
                                value={data.country}
                                onChange={handleInputChange}
                                size="small"
                                placeholder="country"
                            />
                        </Grid>
                        <Grid item xs mx={2}>
                            <Typography variant="body1">State/Region</Typography>
                            <TextField fullWidth
                                id="standard-basic"
                                name='state'
                                value={data.state}
                                onChange={handleInputChange}
                                size="small"
                                placeholder="state"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Description</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='description'
                            value={data.description}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="description"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2}>
                        <Typography variant="body1">What Languages You Know</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='languagesKnown'
                            value={data.languagesKnown}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="languages you know"
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" px={4} mx={2}>Linked Accounts:</Typography>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">LinkedIn</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='linkedIn'
                            value={data.linkedIn}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="linkedIn account"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2}>
                        <Typography variant="body1">GitHub</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='gitHub'
                            value={data.gitHub}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="github account"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Twitter</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='twitter'
                            value={data.twitter}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="twitter account"
                        />
                    </Grid>

                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Skills</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='skills'
                            value={data.skills}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="add your skills here"
                        />
                    </Grid>

                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Education</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='education'
                            value={data.education}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="your highest education"
                        />
                    </Grid>

                </Grid>

                <Button variant="contained" onClick={submitForm}>Save Profile</Button>
            </Grid>

        </Grid>
    )
}