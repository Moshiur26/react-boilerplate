import React, { useState, useEffect } from 'react';
import { postLogin } from '../../services/authServices';
import auth from '../../auth/auth-helper';
import { Button, Card, CardActions, CardContent, TextField, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {  } from '@material-ui/icons';
import { Navigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  }))
  

export default function Signin(props) {
    const classes = useStyles() 
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = () => {
        const user = {
            username: values.email || undefined, 
            password: values.password || undefined 
        }

        postLogin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
                console.log(">>data: ", data)
            }
        })
    }

    // const {from} = props.location.state || {
    //     from: {
    //         pathname: '/'
    //     }
    // }
    const {from} = useLocation().state || {
        from: {
            pathname: '/'
        }
    }

    const {redirectToReferrer} = values
    if (redirectToReferrer) {
        return (<Navigate replace to={from}/>)
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>Sign In</Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/>
                    <br/> 
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
                    <br/> 
                    <br/>
                    {
                        values.error && (
                        <Typography component="p" color="error" >
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>
                        )
                    }
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" className={classes.submit} onClick={clickSubmit}>Submit</Button>
                </CardActions>
            </Card>
        </div>
    )  
};
