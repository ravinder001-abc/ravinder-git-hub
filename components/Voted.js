
import Link from 'next/link';
import { Row, Container, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Voted = () => {
    return (
        <section>
            <div className="section pt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={12} >
                            <div className="sp-page sp-css-target sp-text-wrapper">
                            <div className="classes-module__advisorTitle text-left">
                             <div className='forword-all'> 
                                <div className='voted-fdresad'>
                                <img src="voted.jpg" alt="" width="40" height="40px" />
                                <h2 className="classes-module__advisorTitleText">Voted most accurate</h2>
                                </div>
                                <div className=''>
                                <a className="classes-module__seeAllBtn___8PIxG" href="/most-accurate-psychics">All</a>
                                </div>
                            </div>  
                                <Card.Text>Our exclusive list of psychics advisors whom our users acknowledged as being most accurate in their advice and guidance. These advisors who are ready to enlighten, inspire, and empower you – are all vetted and voted for by people like you. Our top-accuracy advisors cover a wide range of services including love readings, mediumship, tarot cards, career advice, and more.</Card.Text>
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default (Voted);

