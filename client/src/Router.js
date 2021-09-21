import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// home page
import Home from "./sections/Home";
// portfolio sections
import PetDetail from "./sections/PetDetail.js";
import Login from "./sections/LoginForm.js";
import Signup from "./sections/SignupForm.js";
import Contact from "./sections/Contact.js";
//pages
import NoMatch from "./sections/Error404";

const AppRouter = () => {

    return (
<Router>
<>
        <Switch>
        <Route exact path="/" component={Home} /> 
        <Route  path="/pet" component={PetDetail} /> 
        <Route  path="/login"component={Login} /> 
        <Route  path="/signup" component={Signup} /> 
        <Route  path="/contact" component={Contact} /> 
        <Route component={NoMatch} />

        </Switch>
        </>
</Router>
    )

}
export default AppRouter;