import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Random Websites</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Random Websites</h1>
                                <p>Flight aginst Recommendation Systems. Expose the rest of the world to you</p>
                            </div>
                        </div>
                    </div>

                </Jumbotron>
            </>

        );
    }
}
export default Header;