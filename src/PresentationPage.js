import React, { Component } from 'react';
import Navbar from './Navbar';
import content from './content';
import profilePicture from './styles/picture.png'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  presentationPageContent: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: '70%', 
    margin: 'auto', 
    marginTop: '3rem'
  }, 
  presentationPagePicture: {
    width: '30%',
  }, 
  presentationPageDescription: {
    width: '60%'
  }, 
  presentationPageTitle: {
    fontFamily: 'Playfair Display', 
    textTransform: 'uppercase', 
    textAlign: 'center', 
    color: '#7A5FDD', 
    fontWeight: '500'
  }, 
  presentationPagePara: {
    textAlign: 'justify'
  }
}

class PresentationPage extends Component {
  static defaultProps = {
    title: content.presentation.title, 
    description: content.presentation.description
  }

  render() {
    const { title, description, classes } = this.props;
    const descriptions =  description.map(p => (<p className={classes.presentationPagePara}>{p}</p>)) 
    return (
        <div>
          <Navbar/>
          <div className={classes.presentationPageContent}>
          <img src={profilePicture} alt='profile' className={classes.presentationPagePicture}/>
          <div className={classes.presentationPageDescription}>
            <h2 className={classes.presentationPageTitle}>{title}</h2>  
            {descriptions}
          </div>
          </div>
        </div>
    )
  }
}
export default withStyles(styles)(PresentationPage);