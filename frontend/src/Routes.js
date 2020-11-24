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
import git_and_github from './Student/Roadmaps/WebDevelopment/git_and_github';
import BackEndWebDevelopment from './Student/Roadmaps/WebDevelopment/BackEndWebDevelopment';
import CompetitiveCodingIndex from './Student/Roadmaps/CompetitiveProgramming/CompetitiveCodingIndex';
import CompetitiveBasic from './Student/Roadmaps/CompetitiveProgramming/CompetitiveBasic';
import CompetitiveRoadmap from './Student/Roadmaps/CompetitiveProgramming/CompetitiveRoadmap';
import DataStructures from './Student/Roadmaps/CompetitiveProgramming/DataStructures';
import Algorithms from './Student/Roadmaps/CompetitiveProgramming/Algorithms';
import PrivateRoute from './auth/privateRoute/PrivateRoute';
import AlumniIndex from './Student/Alumni/AlumniIndex';
import FirstYear from './Student/Years/FirstYear';
import SecondYear from './Student/Years/SecondYear';
import ThirdYear from './Student/Years/ThirdYear';
import FourthYear from './Student/Years/FourthYear';


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
                    <PrivateRoute path="/StudentHome" exact component={StudentHome} />
                    <PrivateRoute path="/RoadmapsHome" exact component={RoadmapsHome} />
                    <PrivateRoute path="/YearHome" exact component={YearHome} />
                    <PrivateRoute path="/OffCampus" exact component={off_campus} />
                    <PrivateRoute path="/Profile" exact component={Profile} />
                    <PrivateRoute path="/ChangePassword" exact component={ChangePassword} />
                    <PrivateRoute path="/EditProfile" exact component={EditProfile} /> 
                    <PrivateRoute path="/WebDevelopment" exact component={WebDevelopment} />
                    <PrivateRoute path="/WebDevelopment/Basic" exact component={BasicWebDevelopment} />
                    <PrivateRoute path="/WebDevelopment/Front-End-Web-Development" exact component={FrontEndWebDevelopment} />
                    <PrivateRoute path="/WebDevelopment/BackEndWebDevelopment" exact component={BackEndWebDevelopment} />
                    <PrivateRoute path="/WebDevelopment/git_and_github" exact component={git_and_github} />
                    <PrivateRoute path="/CompetitiveProgramming" exact component={CompetitiveCodingIndex} />
                    <PrivateRoute path="/CompetitiveProgramming/Basic" exact component={CompetitiveBasic} />
                    <PrivateRoute path="/CompetitiveProgramming/Roadmap" exact component={CompetitiveRoadmap} />
                    <PrivateRoute path ="/CompetitiveProgramming/DataStruture" exact component={DataStructures} />
                    <PrivateRoute path ="/CompetitiveProgramming/Algorithms" exact component={Algorithms}/>
                    <PrivateRoute path ="/StudentAlumni" exact component={AlumniIndex}/>
                    <PrivateRoute path="/Year/FirstYear" exact component={FirstYear} />
                    <PrivateRoute path ="/Year/SecondYear" exact component={SecondYear} />
                    <PrivateRoute path ="/Year/ThirdYear" exact component={ThirdYear}/>
                    <PrivateRoute path ="/Year/FourthYear" exact component={FourthYear}/>
                    
                    <Route path="*" exact component={PageNotFound}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;