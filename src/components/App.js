import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

//Importing components and setting the routes
import Login from "./Login";
import Callback from "./Callback";
import Profile from "./Profile";
import Register from "./Register";
import EditProfile from "./EditProfile";
import Navigation from "./Navigation";
import Explore from "./Explore";
import HomePage from "./HomePage";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />

                <Switch>
                    <Route path="/cermag" exact>
                        <HomePage />
                    </Route>

                    <Route path="/login" exact>
                        <Login />
                    </Route>

                    <Route path="/callback" exact>
                        <Callback />
                    </Route>

                    <Route path="/register" exact>
                        <Register />
                    </Route>

                    <Route path="/profile" exact>
                        <Profile />
                    </Route>

                    <Route path="/edit" exact>
                        <EditProfile />
                    </Route>

                    <Route path="/explore" exact>
                        <Explore />
                    </Route>

                    <Route path="*">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
