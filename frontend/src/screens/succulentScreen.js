import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { succulent } from "../shared/succulent";
import SucculentCard from "./succulentComponent";
import Filter from "../components/FilterComponent";


class Succulent extends Component {
    constructor(){
        super();
        this.state = {
            succulent,
            cartItems: [],
        };
    }

    addToCart = (succulent) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if(item._id === product._id){
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cartItems.push({...succulent, count: 1});
        }
    }


    render(){
        let succulentCards = this.state.succulent.map(plant => {
            return (
                <React.Fragment>
                {/* <Filter count={this.state.succulent}></Filter> */}
                <SucculentCard plant={plant} />
                </React.Fragment>
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