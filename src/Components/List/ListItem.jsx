import React from 'react'

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box
} from '@mui/material';


const ListItem = ({ item }) => {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: 600,
            borderRadius: 2,
            boxShadow: 3,
            padding: 2
        }}>

            <Box
                sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: 2
                }}
            >
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>

            <CardContent sx={{ padding: 0 }}>
                <Typography gutterBottom variant="h6" component="div" align="left">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                    Age: {item.age}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                    Email: {item.email}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ListItem