import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import OnlyNavbar from "./Navbar";

const Contact = () => {
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .containercontact {
      margin-top: 6rem;
      text-align: center;

      .commonheading{
        color:"#1589FF";
      }

      .contact-form {
        max-width: 50rem;
        margin: auto;

        

         
        }
      }
    }
  `;

    return (
        <>
        <OnlyNavbar/>
        <Wrapper>

            <h2 className="common-heading" style={{color:"#1589FF", marginBottom:70, marginTop:-150}}>Feel Free to Contact us</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.104131018205!2d88.42524581465297!3d22.575208385181437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1683822547917!5m2!1sen!2sin" width='100%' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="containercontact">
                <div className="contact-form">
                    <section className='home-section' style={{ height: 400 }}>
                    <h1 style={{color:'#1589FF'}}>Send Msg!!</h1>
                        <div className='align' style={{ marginTop: 50 }}>
                            {/* <Walet/> */}


                            <div class="grid">

                                <form action="https://httpbin.org/post" method="POST" class="form login" >

                                    <div class="form__field">
                                        <label for="login__username"><svg class="icon">
                                            <i class="fa fa-car"></i>
                                        </svg><span class="hidden"></span></label>
                                        <input autocomplete="username" id="login__username" type="text" name="username" class="form__input"  placeholder='Username' required />
                                    </div>

                                    <div class="form__field" style={{height:90}}>
                                        <label for="login__password"><svg class="icon">
                                            {/* <use xlink:href="#icon-lock"></use> */}
                                        </svg><span class="hidden"></span></label>
                                        <input id="login__password" type="password" name="password" class="form__input" placeholder='message' />
                                    </div>

                                    <div class="form__field">
                                        <button className='loginbutton' style={{ marginLeft: 95 }}>Submit</button>
                                    </div>

                                </form>


                                {/* <use xlink:href="#icon-arrow-right"></use> */}
                                {/* </svg></p> */}

                            </div>
                            {/* <ToastContainer style={{ backgroundColor: 'black' }} /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="icons">
                                <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
                                    <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
                                </symbol>
                                <symbol id="icon-lock" viewBox="0 0 1792 1792">
                                    <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
                                </symbol>
                                <symbol id="icon-user" viewBox="0 0 1792 1792">
                                    <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
                                </symbol>
                            </svg>
                        </div>
                    </section>
                </div>
            </div>
        </Wrapper>
        <Footer/>
        </>
    );
};

export default Contact;