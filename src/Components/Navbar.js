import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'

function Navbar() {
    const [show, setShow] = useState(false)

    const newfunction = () => {
        setShow(!show);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <i className="fa fa-bars mx-3" aria-hidden="true" onClick={newfunction}></i>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to={'/'}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link to={'/dashboard'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                        </Link>
                        <Link to={'/pricing'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </Link>
                        <Link to={'/table'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Table</a>
                            </li>
                        </Link>
                        <Link to={'/movies'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>



            <Offcanvas isOpen={show} toggle={newfunction}>
                <OffcanvasHeader>Offcanvas</OffcanvasHeader>
                <OffcanvasBody>
                    <strong>This is the Offcanvas body.</strong>
                </OffcanvasBody>
            </Offcanvas>

        </nav>
    )
}

export default Navbar


