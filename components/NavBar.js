/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CHAMPAYNE FLUTES</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/members">
              <Nav.Link>Members</Nav.Link>
            </Link>
            <Link passHref href="/new">
              <Nav.Link>NEW</Nav.Link>
            </Link>
            <Link passHref href="/member/captains">
              <Nav.Link>Team Captains</Nav.Link>
            </Link>
            <Link passHref href="/teams/new">
              <Nav.Link> New TEAM</Nav.Link>
            </Link>
            <Link passHref href="/teams">
              <Nav.Link>TEAM</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
