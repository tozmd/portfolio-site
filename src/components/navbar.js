import React from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


const pages = ['Portfolio', 'About', 'Resume'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar color="inherit" position="static" style={{ background: 'transparent', boxShadow: 'none'}} elevation={0} sx={{py: '1rem', px: '8vw'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* desktop logo view */}
                    <Typography
                        variant="h1"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex'} }}
                    >
                        <Link to="/" id="logo">Brian Vu</Link>
                    </Typography>


                    {/* nav bar for desktop view */}
                    <Box 
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'
                        }}
                    >
                        <ul id="nav-links">
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/photos">My Photos</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1_5epv40CwBYB07MGEc2bmPdZyyraCmOj/view?usp=sharing">Resume</a></li>
                        </ul>
                    </Box>

                    {/* side menu bar for mobile view */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            align="right"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;