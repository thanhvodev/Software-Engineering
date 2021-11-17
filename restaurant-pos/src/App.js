import React, { useState, useMemo } from "react";
import MainPage from "./MainPage/MainPage";
import Login from "./MainPage/Login";
import Register from "./MainPage/register";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Category1 from "./MainPage/Category1";
import Category2 from "./MainPage/Category2";
import Category3 from "./MainPage/Category3";
import Category5 from "./MainPage/Category5";
import Category6 from "./MainPage/Category6";
import { UserContext } from "./components/UserContext";
import Profile from "./MainPage/Profile";

function App() {

    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <UserContext.Provider value={value}>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/category1" exact component={Category1} />
                        <Route path="/category2" exact component={Category2} />
                        <Route path="/category3" exact component={Category3} />
                        <Route path="/category5" exact component={Category5} />
                        <Route path="/category6" exact component={Category6} />
                        <Route path="/profile" exact component={Profile} />
                    </UserContext.Provider>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
