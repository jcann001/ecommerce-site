import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { directory } from "../shared/directory";
import HomeCard from "./HomeCardComponent";


class Directory extends Component {
    constructor(){
        super();
        this.state = {directory};
    }


    render(){
        let homeCards = this.state.directory.map(type => {
            return (
                <HomeCard type={type} />
            );
        })
        return(
            <React.Fragment>
            <div className="row">
             {homeCards}
            </div> 
            </React.Fragment>
        );
    }





}


  
export default Directory;