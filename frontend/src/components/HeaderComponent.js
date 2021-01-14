import React, { Component }  from 'react';
import { A, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false,
          isRegOpen: false,
          isCartOpen: false
        };

        this.toggleRegistration = this.toggleRegistration.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleRegistration() {
        this.setState({
            isRegOpen: !this.state.isRegOpen
        });
    }

    toggleCart() {
      this.setState({
          isCartOpen: !this.state.isCartOpen
      });
  }

    // handleLogin(event) {
    //     alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
    //     this.toggleModal();
    //     event.preventDefault();
    // }

    render() {
        return (
    <React.Fragment>
      <div className="Menu">
      <Nav className="navbar navbar-expand navbar-light">
      <a className="navbar-brand" href="index.html"><img src="/img/leaficon.jpg" style={{width: '40px'}} alt=""/> </a>
      <a className="navbar-brand" href="index.html">GreenLeaf </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Form className="searchform">
              <div className="form-group has-search">
                <button id="searchButton" type="submit" className="fa fa-search form-control-feedback"></button>
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
            </Form>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav justify-content-end" id="accountLinks">
          <li className="nav-item">
            <a onClick={this.toggleCart} className="fa fa-shopping-cart" data-toggle="modal" data-target="#modalCart"></a>
          </li>
          <li className="nav-item active">
            <a onClick={this.toggleRegistration} className="nav-link" id="registerLink" data-toggle="modal" data-target="#registerModal">Register</a>
          </li>
          <li className="nav-item active">
            <a onClick={this.toggleModal} className="nav-link" id="loginLink" data-toggle="modal" data-target="#loginModal">Login</a>
          </li>
        </ul>
      </div>
    </Nav>

    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
    <ModalBody>
        <Form onSubmit={values => this.handleSubmit(values)}>
            <FormGroup>        
                    <Input type="email" id="email" name="email" placeholder="Email"
                    innerRef={input => this.email = input} />
            </FormGroup>
            <FormGroup>
                                
                    <Input type="password" id="password" name="password" placeholder="Password"
                        innerRef={input => this.password = input} />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="remember" 
                    innerRef={input => this.remember = input} />
                    Remember me
                </Label>
            </FormGroup> 
            <Button onClick={this.toggleModal} type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</Button>
            <Button type="submit" className="btn btn-success btn-sm ml-1" value="submit" color="secondary">Submit</Button>
        </Form>
    </ModalBody>
    </Modal>

    <Modal isOpen={this.state.isRegOpen} toggle={this.toggleRegistration}>
    <ModalHeader toggle={this.toggleRegistration}>Register</ModalHeader>
    <ModalBody>
        <Form onSubmit={values => this.handleSubmit(values)}>
            <FormGroup>        
                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                    innerRef={input => this.firstname = input} />
            </FormGroup>
            <FormGroup>
                                
                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                        innerRef={input => this.lastname = input} />
            </FormGroup>
            <FormGroup>        
                    <Input type="email" id="email" name="email" placeholder="Email"
                    innerRef={input => this.email = input} />
            </FormGroup>
            <FormGroup>        
                    <Input type="tel" id="phone" name="phone" placeholder="Phone Number (Optional)"
                    innerRef={input => this.phone = input} />
            </FormGroup>
            <FormGroup>        
                    <Input type="password" id="password" name="password" placeholder="Password"
                    innerRef={input => this.password = input} />
            </FormGroup>
            <Button onClick={this.toggleRegistration} type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</Button>
            <Button type="submit" className="btn btn-success btn-sm ml-1" value="submit" >Submit</Button>
        </Form>
    </ModalBody>
    </Modal>

    <Modal isOpen={this.state.isCartOpen} toggle={this.toggleCart}>
    <ModalHeader toggle={this.toggleCart}>My Cart</ModalHeader>
    <ModalBody>
        <Form onSubmit={values => this.handleSubmit(values)}>
            <FormGroup>        
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>Venus Fly Trap</td>
                  <td>$9.99</td>
                  <td><a><i className="fa fa-times"></i></a></td>
                </tr>
                <tr>
                  <td scope="row">2</td>
                  <td>Lavender</td>
                  <td>$9.99</td>
                  <td><a><i className="fa fa-times"></i></a></td>
                </tr>
                <tr className="total">
                  <td scope="row"></td>
                  <td>Total</td>
                  <td>$19.98</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </FormGroup>
            <Button onClick={this.toggleCart} type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</Button>
            <Button type="submit" className="btn btn-success btn-sm ml-1" value="submit" >Checkout</Button>
        </Form>
    </ModalBody>
    </Modal>
    </div>    
    </React.Fragment>
        );
    }
}

export default Header;