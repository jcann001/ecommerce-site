import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


// const mapStateToProps = state => {
//     return {
        
//     };
// };

class Main extends Component {


    render() {

        const HomePage = () => {
            return (
                <Home/>
            );
        };
    
        return (
            <Router>
                <Header/>
                <Switch>
                <Route path='/' component={HomePage} />


                </Switch>
                <Footer />
            </Router>
        );
    }
};

export default Main;