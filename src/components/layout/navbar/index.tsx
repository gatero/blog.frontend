import { useAuth } from '@/components/firebase/firebase.hook';
import Link from 'next/link';
import {
  Navbar as $Navbar,
  Container,
  Image,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'next/router';
import './navbar.scss';

const NavbarAvatar = () => (
  <>
    <span>Daniel</span> &nbsp;
    <Image src="https://picsum.photos/35/35" roundedCircle alt="avatar" />
  </>
);

const Navbar = () => {
  const router = useRouter();
  const { signOut } = useAuth();
  const { t, i18n } = useTranslation();

  const hasActiveSession =
    typeof window !== 'undefined' &&
    Boolean(localStorage.getItem('hasActiveSession'));

  const handleSignOut = async () => {
    await signOut();
  };

  const changeLanguage = (language: string) => i18n.changeLanguage(language);

  return (
    <$Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <$Navbar.Toggle aria-controls="navbarScroll" />
        <$Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} href="/">
              <Image src="/navbar/btn-home.png" alt="home" /> {t('navbar.home')}
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              <Image src="/navbar/btn-about.png" alt="about" />
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link as={Link} href="/my-work">
              <Image src="/navbar/btn-work.png" alt="work" />
              {t('navbar.myWork')}
            </Nav.Link>
            <Nav.Link as={Link} href="/laboratory">
              <Image src="/navbar/btn-lab.png" alt="lab" />
              {t('navbar.laboratory')}
            </Nav.Link>
            <Nav.Link as={Link} href="/blog">
              <Image src="/navbar/btn-blog.png" alt="blog" /> {t('navbar.blog')}
            </Nav.Link>
          </Nav>

          <div className="d-flex">
            <NavDropdown
              title={<NavbarAvatar />}
              id="navbarScrollingDropdown"
              align="end"
            >
              <NavDropdown.Item href="/profile" as={Link}>
                {t('navbar.profile')}
              </NavDropdown.Item>

              <NavDropdown.Divider />

              {hasActiveSession && (
                <NavDropdown.Item onClick={handleSignOut}>
                  {t('navbar.signOut')}
                </NavDropdown.Item>
              )}

              {!hasActiveSession && (
                <NavDropdown.Item href="/sign-in" as={Link}>
                  {t('navbar.signIn')}
                </NavDropdown.Item>
              )}

              <NavDropdown.Divider />

              <NavDropdown.Item as="div" className="navbar-option-language">
                {t('navbar.language')}:
                <button
                  className="btn btn-link"
                  onClick={() => changeLanguage('es')}
                >
                  <span className="fi fi-mx" />
                </button>
                <button
                  className="btn btn-link"
                  onClick={() => changeLanguage('en')}
                >
                  <span className="fi fi-us" />
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </$Navbar.Collapse>
      </Container>
    </$Navbar>
  );
};

export default Navbar;
