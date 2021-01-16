import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Route, Link} from "react-router-dom";

class HomeCard extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Card className="card col-12 col-sm-9 col-md-3">
            <CardImg top width="100%" src={this.props.type.src} alt="Card image cap" className="card-img-top"/>
            <CardBody>
            <CardTitle tag="h5"><Link to={this.props.type.path} className=".links">{this.props.type.name}</Link></CardTitle>
            <CardText className="card-text d-none d-sm-block">{this.props.type.description}</CardText>
            </CardBody>
            </Card>
        );
    }
}


export default HomeCard;