import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 
import ContactForm from './ContactForm';
import NavMenu from './NavMenu';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Backdrop from '@material-ui/core/Backdrop';
import sizes from './sizes';


const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    height: '64px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    zIndex: 8,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    //flexGrow: 1,
    marginRight: "2rem",
    color: '#7A5FDD'
    ,
    fontSize: "1.2rem",
    textTransform: "uppercase",
    "& a": {
      textDecoration: "none", 
      color: 'unset'
    },
    "&:hover a": {
      color: '#FFD333'
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 10
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  iconsMenu: {
    position: 'absolute',
    right: '2rem', 
    display: 'flex',
    alignItems: 'center'
  },
  navLinks: {
    [sizes.down("md")]: {
      display: 'none'
    }
  }, 
  navLink: {
    marginRight: '1.5rem', 
    fontWeight: '400',
    fontSize: '.8rem',
    "& a": {
      textDecoration: "none", 
      color: 'unset'
    }, 
    "& a.activated": {
      color: '#7A5FDD'
    }, 
    "&:hover a": {
      color: '#FFD333'
    },
  }, 
  backdrop: {
    zIndex: 9,
    color: '#fff',
  },

});

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {open: false, anchorEl: null }
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this); 
    this.handleMenuClick = this.handleMenuClick.bind(this); 
    this.handleMenuClose = this.handleMenuClose.bind(this); 
  }
  handleDrawerOpen()  {
    this.setState({open: true})
  };
  handleDrawerClose () {
    this.setState({open: false})
  };
  handleMenuClick () {
    this.setState({anchorEl: true});
  };
  handleMenuClose ()  {
    this.setState({anchorEl: false});
  };

  render(){
    const { classes } = this.props;
    const { open, anchorEl } = this.state; 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='white'
        style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{display: 'flex', justifyContent: 'start', height: '64px'}}>
          <div className={classes.title} style={{fontFamily: 'Playfair Display', fontWeight: '500'}}>
            <NavLink to='/'>Portfolio</NavLink>
          </div>
          <div className={classes.navLinks}>
            <span className={classes.navLink}><NavLink to='/presentation' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Présentation</NavLink></span>
            <span className={classes.navLink}><NavLink to='/competences' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Compétences</NavLink></span>
            <span className={classes.navLink}><NavLink to='/realisations' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Réalisations</NavLink></span>
          </div>
          <div className={classes.iconsMenu}>
          <NavMenu 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)}
            handleClick={this.handleMenuClick}
            handleClose={this.handleMenuClose}
            />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <ChatBubbleIcon style={{color: '#FFD333'}} />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronRightIcon style={{color: '#7A5FDD'}} />
          </IconButton>
        </div>
        <ContactForm/>
      </Drawer>
      <Backdrop className={classes.backdrop} open={open} onClick={this.handleDrawerClose}>
      </Backdrop>
    </div>
  );}
}

export default withStyles(styles, {withTheme: true})(Navbar)