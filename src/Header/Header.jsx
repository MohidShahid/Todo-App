import React from 'react';
import { Button, Navbar } from "flowbite-react";
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand >
      
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/about">About</Navbar.Link>
      <Navbar.Link href="/services">Services</Navbar.Link>
      <Navbar.Link href="/todo-app">Todo App</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;
