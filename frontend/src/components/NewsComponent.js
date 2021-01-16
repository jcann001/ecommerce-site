import React, { Component } from 'react';
import {Form, Label, Input} from 'reactstrap';

class News extends Component{
    render(){
        return(
            <Form className="form-inline" id="newsletter">
            <Label for="inputemail">Join our Newsletter!</Label>
            <div className="form-group-lg mx-sm-3 mb-2">
            <Input type="email" className="form-control" id="inputemail" placeholder="Email"/>
            </div>
            <button type="submit" className="btn btn-success mb-2"> Sign up!</button>
            </Form>
        );
    }
}

export default News;