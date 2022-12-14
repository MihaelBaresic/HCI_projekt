import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import {useShoppingCart} from './ShoppingCartContext';

const drawerWidth = '80%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    marginRight: 0,
    
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
      
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),  
    backgroundColor: `rgb(0,0,0,0.8)`,
   
  ...(open && {
    width: `100%`,
    
    marginRight: `0`,
    backgroundColor: `rgb(0,0,0,0.8)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    justifyContent: 'center',
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
export default function Home() {
  const { cart } = useShoppingCart();
  const numItemsInCart = Object.keys(cart).length;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return ( 
    <>
    <div  className={`${styles.container} ${styles.header_height}`}>
 
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ paddingLeft: '36px', paddingRight: '36px', height: '120px', justifyContent: 'center'}}>
        <Toolbar sx={{ justifyContent: 'space-between',}}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 0}} component="div">
          <span className={styles.span_font_size}>Spi<span className={styles.span_color}>za</span></span>
          </Typography>

          <div id="myDIV">
           <div className={`${styles.div_flex} ${styles.navBar_desktop_holder}`} >
            <div className={`${styles.full_width} ${styles.navBar_desktop}`}><Link href="/home" legacyBehavior><a className={`${styles.underline_animation}`}>Home</a></Link></div>
            <div className={`${styles.full_width} ${styles.navBar_desktop}`}><Link href="/shop" legacyBehavior><a className={`${styles.underline_animation}`}>Shop</a></Link></div>
            <div className={`${styles.full_width} ${styles.navBar_desktop}`}><Link href="/blog" legacyBehavior><a className={`${styles.underline_animation}`}>Blog</a></Link></div>
            <div className={`${styles.full_width} ${styles.navBar_desktop}`}><Link href="/contact" legacyBehavior><a className={`${styles.underline_animation}`}>Contact</a></Link></div>
           </div>
          </div>
      

          <div className={styles.navBar_desktop_holder}>
          <div className={styles.navBar_desktop}>
            <Link href="/login">
            <img className={styles.login_icon} src="/loginW.svg" height='100%' width='100%'/>
           </Link>
          </div>
          <div className={styles.navBar_desktop}>
          <Link href="/cart">
           <img className={styles.chart_icon} src="/chartW.svg" height='100%' width='100%'/>
           {numItemsInCart > 0 && <span className={styles.num_items}>{numItemsInCart}</span>}
           </Link>
          </div>
          </div> 
          
          <IconButton
            className={styles.hamburger_icon_responsive}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
            {numItemsInCart > 0 && <span className={styles.num_items}>{numItemsInCart}</span>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,        
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
           
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Shop', 'Blog', 'Contact', 'Login', 'Cart'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link href={`/${text.toLowerCase()}`}> 
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <img className={styles.login_icon} src="/chart.svg" height='100%' width='100%'/>  : <img className={styles.login_icon} src="/login.svg" height='100%' width='100%'/> }
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
              </Link>
              {text === "Cart" && numItemsInCart > 0 && <span className={styles.num_items}>{numItemsInCart}</span>}
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
    </Box>
    </div>
    </>
  )
}