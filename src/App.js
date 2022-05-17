import React, {useState} from 'react';
// import {useHistory} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Blogpost from "./components/Blogpost";
import BlogId from "./components/BlogId";
import {NavLink, Route, Switch} from "react-router-dom";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    // const history = useHistory();
    // history.push('/');

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink exact to="/Blogspots" activeClassName="active-link">Blogspots</NavLink></li>
                    <li><NavLink exact to="/Login" activeClassName="active-link">login</NavLink></li>
                </ul>
            </nav>
            <button type="button">doe dingen</button>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Blogspots">
                    <Blogpost/>
                </Route>
                <Route path="/blogid/:id">
                    <BlogId />
                </Route>


            </Switch>
        </>
    );
}

export default App;
