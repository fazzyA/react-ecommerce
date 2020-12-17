import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import FireAuth from './login/fireAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        <Link className='whiteLink' to="/">Home</Link>
                         </Typography>
                         <Typography variant="h6" className={classes.title}>
                         <Link className='whiteLink' to="/product">Product</Link>
                         </Typography>
                         <Typography variant="h6" className={classes.title}>
                        <Link className='whiteLink' to="/cart">Cart</Link>
                         </Typography>
                        <Button color="inherit"><Link className='whiteLink' to="/login">Login</Link></Button> | <Button color="inherit"><Link className='whiteLink' to="/register">Register</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                   <FireAuth />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
