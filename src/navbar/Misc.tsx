import * as React from 'react';

export const Misc = () => {
    return (
        <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            Extras
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/about">About</a>
            <a className="dropdown-item" href="/help">Hilfe</a>
        </div>
    </li>
    );
};