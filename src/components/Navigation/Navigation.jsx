import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

    return (

        <>
            <div className='Navigation'>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Link to="/">
                            <Nav.Link href="/" as="span"><img src="./../assets/HackaJet.jpg" alt="LOGO" /></Nav.Link>
                        </Link>

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
                    </Container>
                </Navbar>
            </div>
        </>

    )
}

export default Navigation