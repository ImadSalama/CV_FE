import React from 'react';
import './CreateCVPage.css'
import Questions from './../../components/Questions/Questions'
import Navbar from './../../components/Navbar/Navbar';
import PricingJoinNow from './../../components/Pricing/PricingJoinNow/PricingJoinNow'
import Footer from './../../components/Footer/Footer'
import { Row, Col } from 'antd'
const CreateCVPage = () => {
    return (
        <>
            <Navbar />
            <div className="createCVbanner">
                <h1 className="createCVheading">Create your professional CV online with Career CV maker</h1>
                <p className="createCVparagraph">Create your very own professional CV and download it within 15 minutes.</p>
                <button className="createCVbutton" >
                    Create your CV
    </button >
                <div className="container" style={{ alignContent: "center" }}>
                    <Row style={{ marginTop: "5%" }} justify="center" className="justify-content-center">
                        <Col lg={7} md={8} sm={13} xs={13}>
                            <div class="card "  >
                                <div class="card-body">
                                    <h4 class="py-3">Quick and easy cv builder  </h4>
                                    <p>With our online CV maker, it is simple
                                    for anyone to quickly create a
                                    professional CV. Enter your personal
                                    details and begin filling out your CV
                                    content. Finally, choose one of our
                                    36 available CV layouts, and
download your CV. </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={7} md={8} sm={13} xs={13}>
                            <div class="card "  >
                                <div class="card-body">
                                    <h4 class="py-3">More likely to land a job</h4>
                                    <p>With a representative and professional CV, you will stand out amongst all other applicants. You are also up to 65% more likely to be invited to an interview  </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={8} sm={13} xs={13}>
                            <div class="card "  >
                                <div class="card-body">
                                    <h4 class="py-3">Organize Applications</h4>
                                    <p>Often, it is important to be able to
                                    tailor your CV based on the job you
                                    wish to apply for. With CV maker, you
                                    can create and manage several
                                    different CVs in an organised way
                                    through your own personal account
hub.</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
            <div style={{ marginTop: "5%" }}>
                <Questions />
            </div>
            <div style={{ marginTop: "5%" }}>
                <PricingJoinNow />
            </div>
            <Footer />
        </>
    );
}

export default CreateCVPage;