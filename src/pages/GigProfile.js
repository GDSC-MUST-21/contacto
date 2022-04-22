import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import Dropdown from "../components/Dropdown";

export default function GigProfile() {
    return (
        <Grid container p={5}>
            <Grid item xs={12} p={4}>
                <Typography variant="h5">CREATE A GIG</Typography>
                <Grid container p={4} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Name of Developer</Typography>
                        <TextField fullWidth
                            id="standard-basic"
                            name='email'
                            // value={data.email}
                            // onChange={handleInputChange}
                            size="small"
                            placeholder="Name"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Add gig photo:</Typography>
                        <Input accept="file/*" id="contained-button-file" multiple type="file" placeholder="Add a photo" />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Expertise</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='description'
                            // value={data.description}
                            // onChange={handleInputChange}
                            size="small"
                            placeholder="Explain your expertise in one line"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Select a category:</Typography>
                        <Dropdown />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Rate</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='languagesKnown'
                            // value={data.languagesKnown}
                            // onChange={handleInputChange}
                            size="small"
                            placeholder="Enter rate in INR"
                        />
                    </Grid>
                </Grid>

                <Button variant="contained">Save</Button>
            </Grid>

        </Grid>

    )
}