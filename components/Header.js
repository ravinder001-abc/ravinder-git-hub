
import { Row, Container, NavLink, Col, Navbar, Nav } from 'react-bootstrap';
// import Test from '/components/Test';
import HeaderScroll from '/components/HeaderScroll';
const Header = () => {
    
    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                </div>
                <div>
                    <div className="header-first">
                        <div className="first-header-top pt-1 pb-1">
                            <Container>
                                <Row className="hidgasigfdisagsagfusa">
                                    <NavLink className='nav-hdyrtsgfeggh'>
                                    <HeaderScroll />
                                    </NavLink>
                                </Row>
                            </Container>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default (Header);
