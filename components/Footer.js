
import { Row, Container, Col } from 'react-bootstrap'

const Footer = () => {

    return (
        <section>
            <div className="footer-section pt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={12} >
                            <div className="sp-page sp-css-target sp-text-wrapper">
                                <div className="classes-module__footerContainer___1w2xx">
                                    <img src="https://www.purplegarden.co/packs/media/src/app/components/header/img/header_logo-a158b94f05c86b8b50e616c20b9421e6.svg" alt="Website-logo" width="69px" height="69px" />
                                    <div>
                                    </div>
                                    <div className='mt-3'>
                                        <span className="classes-module__footerTitle___3XJy0">purple garden</span>
                                    </div>
                                    <div className='mt-3'>
                                        <span className="classes-module__footerText___2V6yT">©2023 Barges Technologies, Inc.</span>
                                    </div>
                                    <div className="classes-module__privacyLinksContainer___2Lsz2 mt-4">
                                        <a target="_blank" href="/inapp-privacy-pg" rel="noreferrer">Privacy Policy</a>
                                        <a href="/inapp-TOS-pg" target="_blank" rel="noreferrer">Terms of Use</a>
                                        <a href="https://app.impact.com/campaign-promo-signup/Purple-Garden.brand?execution=e14s1" target="_blank" rel="noreferrer">Affiliation</a>
                                    </div>
                                    <div className=''>
                                        <img src="/packs/media/src/app/components/shared/footer/img/fb_footer-26e7eb2fa0b88e2d60048bdabde3a089.svg" alt="" class="classes-module__socialImg___2LnWE" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default (Footer);

