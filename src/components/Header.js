import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import Navbar from './Navbar';

function Header() {

    return (
        <>
            <div class="p-5 text-center bg-light">
                <h1 class="mb-3">Jasmine Bolds</h1>
                <h4 class="mb-3">Portfolio</h4>
            </div>
            <Navbar />
        </>
    )
}

export default Header;
