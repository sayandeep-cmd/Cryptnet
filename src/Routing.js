import React from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './Common/Home/Home';
import Login from './Component/Authentication/Login/Login';
import OnlyNavbar from './Common/Header/Navbar';
import Footer from './Common/Footer/Footer';
import About from './Component/About/About';
import CryptoList from './Component/Coinlist/CoinList';
import Coindetail from './Component/Coindetail/Coindetail';
import HistoryChart from './Component/Coindetail/Chart';
import FormikForm from './Component/Authentication/Register/Register';
import Profile from './Common/Header/Profile';
import Contact from './Common/Header/Contact';
import AboutUs from '../src/Common/Home/AboutUs';
function Routing() {
  return (
    <div>
        <Router>
            {/* <OnlyNavbar/> */}
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="Register" element={<FormikForm/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="about" element={<AboutUs/>}/>
                {/* <Route path="about" element={<About/>}/> */}
                <Route path="coin-list" element={<CryptoList/>}/>
                <Route path="coins/:id" element={<Coindetail/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    </div>
  )
}

export default Routing