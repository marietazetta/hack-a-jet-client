import { Container, Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import Search from '../Search/Search'



const Navigation = () => {

    return (

        <>
            <nav className='Navigation'>
                <Navbar bg="#0D1F2D" expand="lg" variant="dark">
                    <Container fluid>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/operators">
                                    <Nav.Link href="/operators" as="span">Operators</Nav.Link>
                                </Link>
                                <Link to="/aircrafts">
                                    <Nav.Link href="/aircrafts" as="span">Fleet</Nav.Link>
                                </Link>
                                <Link to="/membership">
                                    <Nav.Link href="/membership" as="span">Become a member</Nav.Link>
                                </Link>
                            </Nav>

                            <Navbar.Brand className="logo" as={Link} to="/">
                                <img src="https://res.cloudinary.com/dzncdwx7u/image/upload/v1715855856/HackAJet_saqwfl.png"
                                    alt="HackAJet Logo"
                                    style={{ width: "130px" }} />
                            </Navbar.Brand>

                            <Form>
                                <Search />
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </nav>
        </>

    )
}

export default Navigation