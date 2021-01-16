import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Succulents from '../screens/succulentScreen';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


class Main extends Component {


    render() {

        const HomePage = () => {
            return (
                <Home/>
            );
        };

        const SucculentPage = () => {
            return (
                <Succulents/>
            );
        };
    
        return (
            <Router>
                <Header/>
                <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/succulents' component={SucculentPage} />

                </Switch>
                <Footer />
            </Router>
        );
    }
};

export default Main;