import React, { Component }  from 'react';
import { A, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
            <form className="searchform">
              <div className="form-group has-search">
                <button id="searchButton" type="submit" className="fa fa-search form-control-feedback"></button>
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav justify-content-end" id="accountLinks">
          <li className="nav-item">
            <a className="fa fa-shopping-cart" data-toggle="modal" data-target="#modalCart"></a>
          </li>
          <li className="nav-item active">
            <a onClick={this.toggleModal} className="nav-link" id="registerLink" data-toggle="modal" data-target="#registerModal">Register</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" id="loginLink" data-toggle="modal" data-target="#loginModal">Login</a>
          </li>
        </ul>
      </div>
    </Nav>

    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <div id="registerModal" className="modal fade" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <ModalHeader toggle={this.toggleModal}><h3 className="modal-title">Sign up</h3></ModalHeader>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <ModalBody>
          <div className="modal-body">
            <div className="container-fluid">
              <form>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginFirstName">First Name</label>
                    <input type="text" className="form-control form-control-sm" id="loginFirstName" placeholder="First Name"
                      required/>
                  </div>
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginLastName">Last Name</label>
                    <input type="text" className="form-control form-control-sm" id="loginLastName" placeholder="Last Name"
                      required/>
                  </div>
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginEmail">Email address</label>
                    <input type="email" className="form-control form-control-sm" id="loginEmail" placeholder="Email"
                      required/>
                  </div>
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginPhoneNumber">Phone Number</label>
                    <input type="email" className="form-control form-control-sm" id="loginPhoneNumber"
                      placeholder="Phone Number (Optional)"/>
                  </div>
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginPassword">Password</label>
                    <input type="password" className="form-control form-control-sm" id="loginPassword"
                      placeholder="Password" required/>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox"/>
                      <label className="form-check-label"> Remember me</label>
                    </div>
                  </div>
                </div>
            
                <div className="form-row">
                  <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-success btn-sm ml-1">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          </ModalBody>
        </div>
      </div>
    </div>
    </Modal>

    <div id="loginModal" className="modal fade" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Login</h3>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <form>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginEmail">Email address</label>
                    <input type="email" className="form-control form-control-sm" id="loginEmail" placeholder="Email"/>
                  </div>
                  <div className="form-group col-12">
                    <label className="sr-only" for="loginPassword">Password</label>
                    <input type="password" className="form-control form-control-sm" id="loginPassword"
                      placeholder="Password"/>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox"/>
                      <label className="form-check-label"> Remember me</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-success btn-sm ml-1">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel">My cart</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          
          <div className="modal-body">

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
                  <th scope="row">1</th>
                  <td>Venus Fly Trap</td>
                  <td>$9.99</td>
                  <td><a><i className="fa fa-times"></i></a></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Lavender</td>
                  <td>$9.99</td>
                  <td><a><i className="fa fa-times"></i></a></td>
                </tr>
                <tr className="total">
                  <th scope="row"></th>
                  <td>Total</td>
                  <td>$19.98</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <a href="checkout.html" className="btn btn-success">Checkout</a>
          </div>
        </div>
      </div>
    </div>
    </div>
                
            </React.Fragment>
        );
    }
}

export default Header;