import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{position: "fixed", bottom: 0, minHeight: '5vh', textAlign: 'center'}}
        >
            {/* Main copyright text */}
            <Typography>
                © 2023 Copyright, Nick Ng
            </Typography>
        </Grid>
    );
}