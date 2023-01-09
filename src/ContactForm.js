import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from './Alert';

const styles = {
    root: {
        width: '100%', 
        height: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    contactForm: {
        width: '80%', 
        textAlign: 'center'
    }, 
    submitButton: {
        marginTop: '1rem'
    }
}
/*
class Alert extends Component{
    render(){
        return(<MuiAlert elevation={6} variant="filled" {...this.props} />)
    }
}*/

class ContactForm extends Component {
    constructor(props){
        super(props); 
        this.state = {
            name: '', 
            email: '', 
            message: '', 
            snackOpen: false, 
            snackErrorOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({snackOpen: false});
    }
    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleSubmit(){
        axios({
            method: 'post',
            url: 'https://formsubmit.co/ajax/ac45b084c15f7a73585d8f69835afd2b',
            data: {
                name: this.state.name,
                email: this.state.email, 
                message: this.state.message
            }
          })
          .then((response) => {
            console.log(response);
            this.setState({name: '', email: '', message: '', snackOpen: true})
          })
          .catch((error) => {
            console.log(error);
            this.setState({snackErrorOpen: true})
          });
    }

    render() {
        const { classes } = this.props; 
        const { name, email , message, snackOpen, snackErrorOpen } = this.state; 
        return (
        <div className={classes.root}>
            <ValidatorForm onSubmit={this.handleSubmit} className={classes.contactForm}>
                    <Typography variant='h4' style={{fontFamily: 'Playfair Display', fontWeight: '700'}}>Me contacter</Typography>
                    <TextValidator
                        fullWidth
                        label="nom"
                        type='text'
                        value={name}
                        variant="outlined"
                        margin='normal'
                        name='name'
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['Ce champ est requis']}
                    />
                    <TextValidator
                        fullWidth
                        label="adresse mail"
                        type='email'
                        value={email}
                        variant="outlined"
                        margin='normal'
                        name='email'
                        onChange={this.handleChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['Ce champ est requis', 'Adresse mail invalide']}
                    />
                    <TextValidator
                        fullWidth
                        label="message"
                        type='text'
                        value={message}
                        variant="outlined"
                        margin='normal'
                        name='message'
                        multiline
                        rows={4}
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['Ce champ est requis']}
                    />
                    <Button 
                        fullWidth
                        className={classes.submitButton}
                        variant="contained" 
                        type='submit'
                        color="primary" 
                        style={{backgroundColor: '#FFD333'}}
                        
                    >
                    Envoyer
                    </Button>
            </ValidatorForm>
            <Snackbar open={snackOpen} autoHideDuration={4000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    Votre message a bien été envoyé
                </Alert>
            </Snackbar>
            <Snackbar open={snackErrorOpen} autoHideDuration={4000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error">
                    Echec de l'envoi, réessayez ultérieurement
                </Alert>
            </Snackbar>
        </div>
        )
    }
}
export default withStyles(styles)(ContactForm);
