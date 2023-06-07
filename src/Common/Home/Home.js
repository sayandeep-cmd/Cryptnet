// import React from 'react'
import * as React from 'react';
import './Home.css';
import {Row,Col} from 'react-bootstrap'
import Trending from '../../Component/Trending';
import About from '../../Component/About/About';
import Counter from '../../Component/Counter/Counter';
import { Link } from 'react-router-dom';
import OnlyNavbar from '../Header/Navbar';
import Footer from '../Footer/Footer';


function Home() {
  let token=window.sessionStorage.getItem("token");
  return (
    <div>
      <OnlyNavbar/>
    <div className='container bannerPart'>
         <img src='../Assets/banner1.png' id="banner1"/>
         {!token?<>
         <Link to="login"><button className='button1'>Get Started</button></Link></>:''}
    </div>
    {/* <hr/> */}
        <section className='home-section'>
                <h1 className="h1-type1">Why Choose Us?</h1>
                <div id="grid">
                    <Row className="home-row">
                        <Col><img src="../Assets/currency-exchange.png" height={80}/><h5>Easy Currency Exchange</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                        <Col><img src="../Assets/bitcoin-wallet.png" height={80} /><h5>Safest Wallet</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                        <Col><img src="../Assets/crypto.png" height={80} /><h5>Wide variety of coins</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                    </Row>
                </div>
            </section>
            <Trending/>
            <About/>
            <Counter/>

    <Footer/>
    </div>
  )
}

export default Home