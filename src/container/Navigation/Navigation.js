import React, { useState } from 'react';
import { NavList, NavUl, Navigat } from './Navigation.styled';
import {Switch, BrowserRouter as Router, Route, NavLink, useHistory} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from '../Catalog/Catalog';
import ItemPage from '../ItemPage/ItemPage';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Success from '../Success/Success';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import ProtectedRoute from "./ProtectedRoute";

const Navigation = () => { 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        setIsAuthenticated(false);
    };

    return(
        <Router>
            <Navigat>
                <NavUl>
                    <NavList>
                        <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                    </NavList>
                    <NavList>
                        <NavLink exect to="/catalog" activeClassName="selected">CATALOG</NavLink>
                    </NavList>
                    <NavList>
                        <NavLink exact to="/cart" activeClassName="selected" >CART</NavLink>
                    </NavList>
                </NavUl>       
                <Switch>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        path="/catalog"
                        logout={logout}
                        component={Catalog}/>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        logout={logout}
                        path="/cart"
                        component={Cart}/>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        logout={logout}
                        path="/checkout"
                        component={Checkout}/>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        logout={logout}
                        path="/success"
                        component={Success}/>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        logout={logout}
                        path="/item"
                        component={ItemPage}/>
                    <Route path="/register">
                        <SignUp login={login}/>
                    </Route>
                    <Route path="/login">
                        <Login login={login}/>
                    </Route>
                    <ProtectedRoute 
                        isAuthenticated={isAuthenticated}
                        logout={logout}
                        path="/"
                        component={Home}/>
                </Switch>
            </Navigat>
        </Router>);
};

export default Navigation;
