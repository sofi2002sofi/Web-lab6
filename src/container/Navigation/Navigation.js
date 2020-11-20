import React from 'react';
import { NavList, NavUl, Navigat } from './Navigation.styled';
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../Home/Home";

const Navigation = () => { 
    return(
    <Router>
        <Navigat>
            <NavUl>
                <NavList>
                    <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                </NavList>
                <NavList>
                    <NavLink exact to="/catalog" activeClassName="selected">CATALOG</NavLink>
                </NavList>
                <NavList>
                    <NavLink exact to="/card" activeClassName="selected" >CARD</NavLink>
                </NavList>
            </NavUl>       
            <Switch>
                <Route path="/catalog">
                    <div>Hello it is catalog</div>
                </Route>
                <Route path="/card">
                    <div>Hello it is card</div>
                </Route>
                <Route path="/">
                    <Home/>                
                </Route>
            </Switch>
        </Navigat>
    </Router>);
};

export default Navigation;
