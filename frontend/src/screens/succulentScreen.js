import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { succulent } from "../shared/succulent";
import SucculentCard from "./succulentComponent";


class Succulent extends Component {
    constructor(){
        super();
        this.state = {succulent};
    }


    render(){
        let succulentCards = this.state.succulent.map(plant => {
            return (
                <SucculentCard plant={plant} />
            );
        })
        return(
            <React.Fragment>
            <h1 id="subtitle">Succulents</h1>
            <div className="row">
             {succulentCards}
            </div> 
            </React.Fragment>
        );
    }





}


  
export default Succulent;