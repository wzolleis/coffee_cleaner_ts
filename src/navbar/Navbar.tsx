import * as React from 'react';
import { Administration } from './Administration';
import { Misc } from './Misc';
const logo = require('../assets/logo.jpg');

interface NavbarProps {

}

export class Navbar extends React.Component<NavbarProps> {
    render() {
        const collapseStyle: object = {
            minHeight: '50px',
            margin: 'auto'
        };

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        style={collapseStyle}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <Administration />
                            <Misc />
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}