import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import Link from 'next/link';


const Layout = ({ children }) => {
    const head = () => (
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
        />
    );

    const nav = () => (
        <ul className="nav nav-tabs bg-warning">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link text-dark">Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/login">
                    <a className="nav-link text-dark">Login</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/register">
                    <a className="nav-link text-dark">Register</a>
                </Link>
            </li>
        </ul>
    );

    return (
        <React.Fragment>
            {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
        </React.Fragment>
    );
};

export default Layout;
