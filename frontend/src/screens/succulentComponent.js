import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import {Route, Link} from "react-router-dom";

class SucculentCard extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
            <Card className="card col-12 col-sm-9 col-md-3">
            <CardImg top width="100%" src={this.props.plant.src} alt="Card image cap" className="card-img-top"/>
            <CardBody>
            <CardTitle tag="h5"><Link to={this.props.plant.path} className=".links">{this.props.plant.name}</Link></CardTitle>
            <CardText className="card-text d-none d-sm-block">{this.props.plant.description}</CardText>
            <h6 class="price">$9.99</h6>
            <Button className="btn btn-success">Add to Cart</Button>
            </CardBody>
            </Card>
            </React.Fragment>
        );
    }
}


export default SucculentCard;