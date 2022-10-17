import React, { useState } from 'react';
import { Box, Divider, Drawer, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// icons
import { SiShopware } from 'react-icons/si'
import { CiSettings } from 'react-icons/ci'
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
// styles
import styles from '../Styles/Navbar.module.css'
import styled from '@emotion/styled';

const Navbar = () => {

    const actions = [
        { icon: <SiShopware />, name: 'Copy' },
        { icon: <SiShopware />, name: 'Save' },
        { icon: <SiShopware />, name: 'Print' },
        { icon: <SiShopware />, name: 'Share' },
    ];
    const [toggle, setToggle] = useState();
    const [open, setOpen] = useState();

    const drawerWidth = 240;

    const drawerWidth2 = 300;


    const handler = () => {
        setToggle(!toggle)
    }
    const OpenHandler = () => {
        setToggle(!open)
    }

    return (
        <div className={styles.mainContainer}>
            <div>
                <Box sx={{ height: '98vh', transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<CiSettings fontSize={'35px'} />}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </SpeedDial>
                </Box>
            </div>
            <div className={styles.container}>
                <ul className={styles.listCont}>
                    <li className={styles.listItem}>Hello</li>
                    <li className={styles.listItem}>Mellow</li>
                    <li className={styles.listItem}>jellow</li>
                </ul>
            </div>
            <div className={styles.drawerOne}>
                <Box >
                    <GiHamburgerMenu
                        color="inherit"
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
                            <Typography variant='h5'>Shoppy</Typography>
                        </div>
                        <IconButton onClick={handler} sx={{ color: 'black' }}>
                            {window.direction === 'rtl' ? <BsChevronLeft /> : <BsChevronRight style={{ fontSize: "30px" }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Typography variant="h5" fontWeight={600} p={"5px 15px"} sx={{ p: 2 }}>
                        Menu
                    </Typography>
                    <Box>
                        <ul className={styles.menuList}>
                            <Link className={styles.hMenuLi} to="/">
                                <AiOutlineHome fontSize='22px' />
                                <li className={styles.itemMenu}>Home</li>
                            </Link>
                            <div >
                            </div>
                            <Link className={styles.hMenuLi} to="/aboutUs">
                                <FcAbout fontSize='22px' />
                                <li className={styles.itemMenu}>About Us</li>
                            </Link>
                        </ul>
                    </Box>

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
                    <DrawerHeader>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <SiShopware fontSize={"25px"} />
                            <Typography variant='h5'>Shoppy</Typography>
                        </div>
                        <IconButton onClick={handler} sx={{ color: 'black' }}>
                            {window.direction === 'rtl' ? <BsChevronLeft /> : <BsChevronRight style={{ fontSize: "30px" }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />


                </Drawer>
            </div>
        </div>
    );
};

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 10px',

}));

export default Navbar;