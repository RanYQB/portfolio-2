import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/core/styles';
import content from './content'; 
import sizes from './sizes';


const styles = {
  skillsPageContent: {
    width: '70%', 
    margin: 'auto', 
    marginBottom: '4rem',
    [sizes.down("md")]: {
      width: '80%', 
    },
    [sizes.down("xs")]: {
      width: '90%', 
    }

  }, 
  skillsPageTable: {
    marginTop: '2rem',
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 32%)",
    gridGap: "2%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 48%)",
      gridGap: "4%"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  },
  skillsPageTitle: {
    fontFamily: 'Playfair Display', 
    textTransform: 'uppercase', 
    textAlign: 'center', 
    color: '#7A5FDD', 
    fontWeight: '500'
  }, 
  skillsPageDescription: {
    textAlign: 'center'
  },
  skillsPageCol: {
    display: 'flex', 
    flexDirection: 'column',
    backgroundColor: 'white', 
    textAlign: 'center', 
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    "& div": {
      minHeight: '5rem'
    }, 
    "& p": {
      color: '#333333'
    }
  }, 
  skillsPageCategory: {
    color: 'white', 
    backgroundColor: '#FFD333', 
    textTransform: 'uppercase', 
    width: 'fit-content', 
    alignSelf: 'center', 
    padding: '.4rem 1rem', 
    borderRadius: '22px', 
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', 
    fontFamily: 'Playfair Display'
  }, 
  skillsPageSkillTitle: {
    color: '#7A5FDD', 
    textTransform: 'capitalize'
  }
}

class SkillsPage extends Component {
  static defaultProps = {
    title: content.skills.title, 
    description: content.skills.description, 
    elements: content.skills.elements,
   
  }

  render() {
    const { classes , title , description , elements} = this.props; 
    const elementsList = elements.map(element => (
      <div className={classes.skillsPageCol}>
        <h3 className={classes.skillsPageCategory}>{element.name}</h3>
        <div>
          <h4 className={classes.skillsPageSkillTitle}>{element.top.title}</h4>
          <p>{element.top.content}</p>
        </div>
        <div>
          <h4 className={classes.skillsPageSkillTitle}>{element.middle.title}</h4>
          <p>{element.middle.content}</p>
        </div>
        <div>
          <h4 className={classes.skillsPageSkillTitle}>{element.bottom.title}</h4>
          <p>{element.bottom.content}</p>
        </div>
      </div>
    ))
    return (
        <div>
            <Navbar/>
            <div className={classes.skillsPageContent}>
                <h2 className={classes.skillsPageTitle}>{title}</h2>
                <p className={classes.skillsPageDescription}>{description}</p>
                <div className={classes.skillsPageTable}>
                  {elementsList}
                </div>
            </div>
        </div>
    )
  }
}
export default withStyles(styles)(SkillsPage); 