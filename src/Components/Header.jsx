import React, { useState } from 'react';
import { Box, Divider, Drawer, List, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// icons
import { SiShopware } from 'react-icons/si'
import IconButton from '@mui/material/IconButton';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { MdOutlineAssignmentInd } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { BiLogOut } from 'react-icons/bi'
import { VscSignIn } from 'react-icons/vsc'
import { links } from '../data/dummy'
// styles
import styles from '../Styles/Navbar.module.css'
import styled from '@emotion/styled';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 10px',

}));
const DrawerHeader2 = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '25px 10px',
    
}));

const drawerWidth = 240;

const drawerWidth2 = 300;



const Header = () => {
    
    const [toggle, setToggle] = useState();
    const [open, setOpen] = useState();

    const handler = () => {
        setToggle(!toggle)
    }
    const OpenHandler = () => {
        setToggle(!open)
    }

    return (
        <div>
            <div className={styles.drawerOne}>
                <Box >
                    <GiHamburgerMenu
                        color="#399ed8"
                        className={styles.burgerIcon}
                        style={{ fontSize: '33px' }}
                        onClick={OpenHandler}

                    />
                </Box>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },

                    }}
                    variant="persistent"
                    anchor="left"
                    open={toggle}
                >
                    <DrawerHeader>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <SiShopware fontSize={"25px"} />
                            <Link style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }} to='/'>
                                <Typography variant='h5'>Shoppy</Typography>
                            </Link>
                        </div>
                        <IconButton onClick={handler} sx={{ color: 'black' }}>
                            {window.direction === 'rtl' ? <BsChevronLeft /> : <BsChevronRight style={{ fontSize: "30px" }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {
                            links.map(item => {
                                return (
                                    <div key={item.title}>
                                        <p className={styles.ItemMenu}>
                                            {item.title}
                                        </p>
                                        {
                                            item.links.map(link => (
                                                <div key={link.name}>
                                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${link.name}`}>
                                                        <p className={styles.ItemChildMenu}>
                                                            {link.icon}
                                                            {link.name}
                                                        </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>

                                )
                            })
                        }
                    </List>
                </Drawer>
            </div>
            <div className={styles.drawerTwo}>
                <Drawer
                    sx={{
                        width: drawerWidth2,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth2,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <DrawerHeader2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <SiShopware fontSize={"25px"} />
                            <Link style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }} to='/'>
                                <Typography variant='h5'>Shoppy</Typography>
                            </Link>
                        </div>

                    </DrawerHeader2>
                    <Divider />
                    <List>
                        {
                            links.map(item => {
                                return (
                                    <div key={item.title}>
                                        <p className={styles.ItemMenu} >
                                            {item.title}
                                        </p>
                                        {
                                            item.links.map(link => (
                                                <div key={link.name}>
                                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${link.name}`}>
                                                        <p className={styles.ItemChildMenu}>
                                                            {link.icon}
                                                            {link.name}
                                                        </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>

                                )
                            })
                        }
                    </List>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;