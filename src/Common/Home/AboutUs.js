import React from "react";
import "./AboutUs.css";
import About from "../../Component/About/About";
import OnlyNavbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
<link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      >
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></link>



const AboutUs = () => {
  return (
    <div>
      <OnlyNavbar/>

        <About/>
        <section id="what-we-do">
          <div className="container-fluid">
            <h2 className="section-title mb-2 h1" style={{color:'#1589ff'}}>About us</h2>
            <p className="text-center text-muted h5">
              Having and managing a correct marketing strategy is crucial in a
              fast moving market.
            </p>
            <div className="row mt-5">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-1">
                    <h3 className="card-title">What we do</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-2">
                    <h3 className="card-title">Our Aim</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-3">
                    <h3 className="card-title">Investors</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-4">
                    <h3 className="card-title">Shareholders</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-5">
                    <h3 className="card-title">Announcements</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card" style={{backgroundColor:'black'}}>
                  <div className="card-block block-6">
                    <h3 className="card-title">Our Comprehensive Database</h3>
                    <p className="card-textt">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="www"
                      title="Read more"
                      className="read-more"
                    >
                      Read more<i className="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr style={{color:"beige"}}/>
        <Footer/>
    </div>
  );
};

export default AboutUs;
