import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home/Home';
import dashboard from './Dashboard/dashboard'
import company from './Dashboard/company'
import Student from './Dashboard/student';
import Alumni from './Dashboard/alumni';
import StudentLogin from './Home/StudentLogin';
import Index from './MainApp/Index';
import StudentHome from './Student/StudentHome';
import RoadmapsHome from './Student/Roadmaps/RoadmapsHome';
import YearHome from './Student/Years/YearHome';
import PageNotFound from './PageNotFound';
import off_campus from './Student/off_campus/off_campus';
import Profile from './Student/Profile/Profile';
import ChangePassword from './Student/Profile/ChangePassword';
import EditProfile from './Student/Profile/EditProfile';
import WebDevelopment from './Student/Roadmaps/WebDevelopment/WebDevelopment';
import BasicWebDevelopment from './Student/Roadmaps/WebDevelopment/BasicWebDevelopment';
import FrontEndWebDevelopment from './Student/Roadmaps/WebDevelopment/FrontEndWebDevelopment';

const Routes = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/Admin" exact component={Home}></Route>
                    <Route path="/dashboard" exact component={dashboard}></Route>
                    <Route path="/company" exact component={company}></Route>
                    <Route path="/student" exact component={Student}></Route>
                    <Route path="/alumni" exact component={Alumni}></Route>
                    <Route path="/StudentLogin" exact component={StudentLogin}></Route>
                    <Route path="/StudentHome" exact component={StudentHome}></Route>
                    <Route path="/RoadmapsHome" exact component={RoadmapsHome}></Route>
                    <Route path="/YearHome" exact component={YearHome}></Route>
                    <Route path="/OffCampus" exact component={off_campus}></Route>
                    <Route path="/Profile" exact component={Profile}></Route>
                    <Route path="/ChangePassword" exact component={ChangePassword}></Route>
                    <Route path="/EditProfile" exact component={EditProfile}></Route>
                    <Route path="/WebDevelopment" exact component={WebDevelopment}></Route>
                    <Route path="/WebDevelopment/Basic" exact component={BasicWebDevelopment}></Route>
                    <Route path="/WebDevelopment/Front-End-Web-Development" exact component={FrontEndWebDevelopment}></Route>
                    <Route path="*" exact component={PageNotFound}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;