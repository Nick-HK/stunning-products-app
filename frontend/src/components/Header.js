import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <Box sx={{flexGrow: 1}}>
            {/* App Bar */}
            <AppBar position="static">
                <Toolbar>
                    {/* Menu Icon */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => {
                            setDrawerOpen(true)
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    {/* App Title */}
                    <Typography variant="h6" href="/" component="a"
                                sx={{flexGrow: 1, color: 'inherit', textDecoration: 'none'}}>
                        Product Listings App
                    </Typography>
                </Toolbar>
            </AppBar>

            {/*Drawer For Navigation*/}
            <Drawer anchor={'left'} open={drawerOpen} onClose={() => {
                setDrawerOpen(false)
            }}>
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={() => {
                        setDrawerOpen(false)
                    }}
                >
                    {/* Navigation List */}
                    <List>
                        <ListItem disablePadding onClick={() => {
                            navigate('/')
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Home'}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding onClick={() => {
                            navigate('/product/add')
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Add Product'}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}