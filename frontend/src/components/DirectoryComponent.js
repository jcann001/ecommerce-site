import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { products } from "../shared/products";

function RenderCard(products){ 
    return (
        <Card className="card col-12 col-sm-9 col-md-3">
          <CardImg top width="100%" src={products.image} alt="Card image cap" className="card-img-top"/>
          <CardBody>
            <CardTitle tag="h5">{products.name}</CardTitle>
            <CardText className="card-text d-none d-sm-block">{products.description}</CardText>
          </CardBody>
        </Card>
    );
}

function Categories(props){
    return (
        <React.Fragment>
            <div className="row">
                    <RenderCard key={products.id}/>
                    <RenderCard/>
                    <RenderCard/>
            </div>
            <div className="row">
                    <RenderCard/>
                    <RenderCard/>
                    <RenderCard/>
            </div>
        </React.Fragment>
    );
}
  
  export default Categories;