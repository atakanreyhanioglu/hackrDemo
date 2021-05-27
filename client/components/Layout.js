import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import ReactDOM from 'react-dom';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Layout = ({ children }) => {
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="/static/css/styles.css" />
        </React.Fragment>
    );

    const nav = () => (
        <div className="container">
        <ul className="nav nav-tabs bg-light">
             <li id="navlist" className="nav-item">
                <Link href="/">
                <img src="https://i.ibb.co/mzjCZKW/from-the-millers-2.jpg" height="80"/>

                </Link>
            </li >
            <li id="navlist" className="nav-item">
                <Link href="/">
                    <a id="navtext"className="nav-link text-dark"><b>Home</b></a>
                </Link>
            </li >
            <li id="navlist" className="nav-item">
                <Link href="/">
                    <a id="navtext"className="nav-link text-dark">Documents</a>
                </Link>
            </li>
            <li id="navlist" className="nav-item">
                <Link href="/">
                    <a id="navtext"className="nav-link text-dark">About Us</a>
                </Link>
            </li>
            <li id="navlist" className="nav-item">
                <Link href="/login">
                    <a id="navtextlogin"className="nav-link text-dark"><b>Login</b></a>
                </Link>
            </li>
            <li  id="navlist" className="nav-item">
                <Link href="/register">
                    <a id="navtext"className="btn btn-warning">Register</a>
                </Link>
            </li>
        </ul>
        </div>
    );

    return (
        <React.Fragment>
            {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
        </React.Fragment>
    );
};

export default Layout;
