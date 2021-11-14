import { Link } from 'react-router-dom';
import './Pages.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'



export default function UserPage() {
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Association for Computing Machinery 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We're the Association for Computing Machinery at UT Dallas.
We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    
    )
}
