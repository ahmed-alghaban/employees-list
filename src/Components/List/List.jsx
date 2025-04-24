import React, { useState } from 'react'
import { Button, Box, Container, Grid } from '@mui/material';

import data from '../../Helpers/data'
import ListItem from './ListItem'

const List = () => {
    const [page, setPage] = useState(0);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentItems = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const handleNext = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <Container maxWidth="sm" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            paddingTop: 2,
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.04)",
            borderRadius: "12px",
        }}>
            <Grid container spacing={2} justifyContent="center">
                {currentItems.map((item, index) => (
                    <Grid item key={index} xs={12}>
                        <ListItem item={item} />
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handlePrev} disabled={page === 0} sx={{ marginRight: 2 }}>
                    Previous
                </Button>
                <Button onClick={handleNext} disabled={page === totalPages - 1}>
                    Next
                </Button>
            </Box>
        </Container>
    );
}

export default List