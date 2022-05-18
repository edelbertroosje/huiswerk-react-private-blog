import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";
import Blogpost from "./components/Blogpost";
import Login from "./components/Login";
import {Route, Switch, useHistory} from "react-router-dom";
import TopMenu from "./components/TopMenu";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);


    return (
        <>
           <TopMenu />
            <button type="button">doe dingen</button>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Blogspots">
                    <Blogpost/>
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
            </Switch>
        </>
    );
}

export default App;
