import * as React from 'react';

export const Administration = () => {
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
            Administration
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/admin/data">Lästige Datenverwaltung</a>
        </div>
    </li>
    );
};