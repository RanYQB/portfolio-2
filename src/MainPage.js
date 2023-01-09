import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";
import computerAnimation from "./computerAnimation.json";

const styles = {
  mainPage: {
    "& .Typewriter": {
      fontSize: '3rem', 
      color: "black",
      fontWeight: "900",
      fontFamily: "Playfair Display",
      marginLeft: "-5px"
    }
  },
  mainPageContent: {
    width: "70%", 
    margin: "auto", 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }, 
  nameTitle: {
    color: "black",
    fontWeight: "900",
    fontSize: "5rem",
    fontFamily: "Playfair Display",
    transition: "all 0.5s ease-in-out", 
    marginBottom: 'unset', 
    marginLeft: "-8px"
  }, 
  presentationButton: {
    borderColor: '#7A5FDD', 
    borderRadius: '20px',
    padding: '5px 22px',
    marginTop: "20px",
    "& a": {
      textDecoration: "none",
      color: "#7A5FDD", 
      textTransform: "uppercase", 
      fontFamily: "Playfair Display",
      
    },
    "&:hover": {
      backgroundColor: "#7A5FDD", 
      "& a": {
        color: "white"
      }
    }
  }, 
  lottie: {
    width: '300px', 
    height: '300px'
  }
}

class MainPage extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainPage}>
        <Navbar/>
        <div className={classes.mainPageContent}>
         <div>
        <h2 className={classes.nameTitle}>Rania Yaqoubi.</h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Développeuse web junior')
              .pauseFor(1500)
              .deleteChars(10)
              .typeString('PHP / Symfony')
              .pauseFor(1500)
              .deleteChars(13)
              .typeString('React')
              .pauseFor(1500)
              .deleteChars(5)
              .typeString('Full Stack')
              .pauseFor(2500)
              .start();
          }}
          options={{loop: true}}
        />
        <p >Bienvenue sur mon portfolio</p>
        <Button variant="outlined" color="primary" className={classes.presentationButton} disableElevation>
          <Link to='/presentation'>Présentation</Link>
        </Button>
        </div> 
        <div className={classes.lottie}>
          <Lottie 
            animationData={computerAnimation} 
            loop={false}
            autoPlay={true}
            />
        </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(MainPage);