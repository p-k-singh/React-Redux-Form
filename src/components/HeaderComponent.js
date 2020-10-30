import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, NavbarBrand,Nav, NavItem,Collapse, NavbarToggler} from 'reactstrap';
class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }
    render(){
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" >
                           <p > ReactReduxFormsDemo</p>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg">Hello</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/form">
                                    <span className="fa fa-list fa-lg">Form</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;