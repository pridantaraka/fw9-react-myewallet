import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRight, Edit } from "react-feather";
import Header from '../component/Header';
import SideMenu from '../component/SideMenu';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';
import { useSelector } from "react-redux";

import RobertChandler from '../assets/image/users/RobertChandler.png'

function Profile() {
    const addnumber = useSelector((state) => state.add.value);
    const location = useLocation();
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem("auth");
        navigate("/");

    };
    return(
        <>
        <Container className='mw-100 min-vh-100 bg-homepg'>
        <Row>
            <Header />
                <main>
                    <Container className=''>
                        <Row>
                            <Col md={12} className="d-flex flex-row justify-content-center gap-2 mx-0 px-0 mt-4 mb-4 w-100">
                            <Col md={3}>
                                <SideMenu />
                            </Col>
                            <Col md={9} className='continer-width'>
                            <DropdownMenu />
                            <section class="bg-white box-side main-box p-5">
                                <div class="d-flex flex-column gap-3">
                                    <div class="d-inline-flex flex-column justify-content-center p-4 align-content-center">
                                        <div class="d-flex align-self-center">
                                        <img src={RobertChandler} alt="profileimg"/>
                                    </div>
                                    <div class="d-inline-flex flex-column align-self-center px-2">
                                        <Link to='/personalinfo' className='nav-link ms-3 my-1'>
                                            <p class="p-user ms-0 ps-0 mb-0 p-2 text-hover p-confirm"><Edit size={16} />Edit</p>
                                        </Link>
                                    </div>
                                    <div class="h4 align-self-center ">Robert Chandler</div>
                                    <p class="p-user align-self-center">+62 {addnumber}</p>
                                    </div>
                                    <Link to='/personalinfo' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Personal Information</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/changepwd' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Change Password</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/changepin' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center">
                                            <p class="p-confirm mb-0">Change Pin</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to='/' className='nav-link ms-3 my-1 text-hover p-confirm d-flex justify-content-center'>
                                    <div class="d-inline-flex flex-row justify-content-between p-3 boxconfirm align-self-center w-50">
                                        <div class="d-inline-flex flex-column align-self-center" onClick={onLogout}>
                                            {location.state?.id}
                                            <p class="p-confirm mb-0">Logout</p>
                                        </div>
                                        <div class="align-self-center">
                                            <div class="align-self-center px-2 p-confirm">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </section>
                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
            </Row>
        </Container>
        </>
    )
}


export default Profile