import React from 'react';

export default function () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#/">SmartHome</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#/devices">Devices</a>
                    <a className="nav-item nav-link" href="#/groups">Groups</a>
                </div>
            </div>
        </nav>
    );
}