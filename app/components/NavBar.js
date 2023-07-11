import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from '@mui/material';

export default function NavBar() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/dashboard" underline="none" variant="h6" sx={{ flexGrow: 1, color: 'white' }} >
                        RU Halal
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit">
                            <Link href="/dashboard" underline="none" sx={{ flexGrow: 1, color: 'white' }} >
                                Random
                            </Link>
                        </Button>   
                        <Button color="inherit">
                            <Link href="/dashboard/restaurants" underline="none" sx={{ flexGrow: 1, color: 'white' }} >
                                List
                            </Link>
                        </Button>   
                        <Button color="inherit">
                            <Link href="/dashboard" underline="none" sx={{ flexGrow: 1, color: 'white' }} >
                                About
                            </Link>
                        </Button>   
                    </Box>
                    <Button color="inherit">
                        <Link href="/admin" underline="none" sx={{ flexGrow: 1, color: 'white' }} >
                            Login
                        </Link>
                    </Button>                
                </Toolbar>
            </AppBar>
        </Box>

        </>
    );
}
