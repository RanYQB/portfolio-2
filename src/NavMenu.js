import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import sizes from './sizes';


const styles = {
  menuButton: {
    display: 'none', 
    [sizes.down("md")]: {
      display: 'inline-flex'
    }
  }, 
  menuList: {
    display: 'none',
    [sizes.down("md")]: {
      display: 'inline'
    },
    "& .MuiPaper-root, .MuiMenu-paper, .MuiPopover-paper, .MuiPaper-elevation8, .MuiPaper-rounded": {
      top: "50px !important",
      left: "unset !important", 
      right: "70px !important", 
    }
  },
  menuItemLink: {
    fontSize: '.9rem',
    "& a": {
      textDecoration: "none", 
      color: 'unset'
    }, 
    "&:hover a": {
      color: '#FFD333'
    },
  }
  
}

class NavMenu extends Component {
  render() {
    const { handleClick, handleClose, anchorEl, open, classes } = this.props
    return (
        <div>
        <Button 
          aria-controls="fade-menu" 
          aria-haspopup="true" 
          onClick={handleClick} 
          style={{minWidth: 'unset', height: '48px', width: '48px', borderRadius: '50%'}}
          className={classes.menuButton}
          >
          <MenuRoundedIcon style={{color: '#FFD333'}}/>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          className={classes.menuList}
        >
          <MenuItem onClick={handleClose} className={classes.menuItemLink}><Link to='/presentation'>Présentation</Link></MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItemLink}><Link to='/competences'>Compétences</Link></MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItemLink}><Link to='/realisations'>Réalisations</Link></MenuItem>
        </Menu>
      </div>
    )
  }
}
export default withStyles(styles)(NavMenu);
