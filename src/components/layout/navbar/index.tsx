import Link from 'next/link';
import {
  Navbar as $Navbar,
  Container,
  Image,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

const NavbarAvatar = () => (
  <>
    <span>Daniel</span> &nbsp;
    <Image src="https://picsum.photos/35/35" roundedCircle alt="avatar" />
  </>
);

const Navbar = () => (
  <$Navbar bg="light" expand="lg" className="navbar-custom">
    <Container>
      <$Navbar.Toggle aria-controls="navbarScroll" />
      <$Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} href="/">
            <Image src="/navbar/btn-home.png" alt="home" /> inicio
          </Nav.Link>
          <Nav.Link as={Link} href="/about">
            <Image src="/navbar/btn-about.png" alt="about" /> about
          </Nav.Link>
          <Nav.Link as={Link} href="/my-work">
            <Image src="/navbar/btn-work.png" alt="work" /> my work
          </Nav.Link>
          <Nav.Link as={Link} href="/laboratory">
            <Image src="/navbar/btn-lab.png" alt="lab" /> laboratory
          </Nav.Link>
          <Nav.Link as={Link} href="/blog">
            <Image src="/navbar/btn-blog.png" alt="contact" /> blog
          </Nav.Link>
        </Nav>

        <div className="d-flex">
          <NavDropdown
            title={<NavbarAvatar />}
            id="navbarScrollingDropdown"
            align="end"
          >
            <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/sign-out">sign out</NavDropdown.Item>
            <NavDropdown.Item href="/sign-in">sign in</NavDropdown.Item>
          </NavDropdown>
        </div>
      </$Navbar.Collapse>
    </Container>
  </$Navbar>
);

export default Navbar;
