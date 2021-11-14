import { Link } from 'react-router-dom';
import './Pages.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';




export default function SearchClubs() {

    return (
        
        <div>
            
            <Grid container spacing={2}>
            <Grid >
                <Card sx={{ maxWidth: 3485 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            clubName
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            clubInfo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
            </Grid>

            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            clubName
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            clubInfo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
            </Grid>

            <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            clubName
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            clubInfo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
            </Grid>

            
            </Grid>

        </div>




    )

}
