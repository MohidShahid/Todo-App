import React from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about">
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
        </Link>
        <Link to="/services">
          <Navbar.Link href="/services">
            Services
          </Navbar.Link>
        </Link>
        <Link to="/todo-app">
          <Navbar.Link href="/todo-app">
            Todo App
          </Navbar.Link>
        </Link>
        <Link to="/contact">
          <Navbar.Link href="/contact">
            Contact
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
