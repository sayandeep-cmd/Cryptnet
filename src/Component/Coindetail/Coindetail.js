import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import ReactHtmlParser from "html-react-parser";
import HistoryChart from './Chart';
import OnlyNavbar from '../../Common/Header/Navbar';
// import Walet from '../Wallet/Wallet';
import './Coindetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Common/Footer/Footer';
// import '../Authentication/Login/Login.css';


function Coindetail() {
  let [coin, setcoin] = useState();
  let [value, setvalue] = useState();
  let [price, setprice] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(res => {
      console.log(res.data)
      setcoin(res.data)
      setprice(res.data.market_data.current_price.inr)
    })
    
  }, [])

  let notify=()=>{
    toast("Succesfully Bought!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
  }
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      height: 750
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
      height: 700
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
      color: "white"
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
      color: "white"
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));
  const classes = useStyles();

  let handlechange = (event) => {
    console.log(event.target.value)
    setvalue(parseInt(event.target.value))
    
  }
  let handlesubmit=(even)=>{
    even.preventDefault();
    var data={
      name:coin.name,
      price:coin.market_data.current_price.inr.toLocaleString(),
      number:value.username,
      boughtat:total
    }
    axios.post('http://localhost:3005/bought',data).then(res=>{console.log(res)}).catch(err=>{})
  }



  var total=0;
  total = value * price;
  console.log(total)
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <>
      <OnlyNavbar />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {coin?.market_cap_rank}
              </Typography>
            </span>

            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                ₹ {coin.market_data.current_price.inr}

              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >

                {coin?.market_data.market_cap.inr}
              </Typography>
            </span>
          </div>
        </div>
        <div style={{ height: 840, width: 950, marginTop: 100 }}>
          <HistoryChart coin={id} />
        </div>
      </div>
      <section className='home-section' style={{height:400}}>
      <h1 style={{color:'#1589FF'}}>Buy Coins!!</h1>
      <div className='align' style={{marginTop:50}}>
        {/* <Walet/> */}

               
        <div class="grid">

          <form action="https://httpbin.org/post" method="POST" class="form login" onSubmit={handlesubmit}>

            <div class="form__field">
              <label for="login__username"><svg class="icon">
                <i class="fa fa-car"></i>
              </svg><span class="hidden">No of coins</span></label>
              <input autocomplete="username" id="login__username" type="text" name="username" class="form__input" onChange={handlechange} placeholder='No of coins you want' required />
            </div>

            <div class="form__field">
              <label for="login__password"><svg class="icon">
                {/* <use xlink:href="#icon-lock"></use> */}
              </svg><span class="hidden">Amount</span></label>
              <input id="login__password" type="password" name="password" class="form__input" placeholder={` ₹ ${total.toFixed(2)}`}/>
            </div>

            <div class="form__field">
              <button onClick={notify} className='loginbutton' style={{marginLeft:120}}>BUY</button>
            </div>

          </form>

         
            {/* <use xlink:href="#icon-arrow-right"></use> */}
          {/* </svg></p> */}

        </div>
<ToastContainer style={{backgroundColor:'black'}}/>
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
      <Footer/>
    </>
  )
}

export default Coindetail

{/* <div className='box'> */ }
{/* <h1>Buy Now</h1>
        {/* <h1>h11</h1> */}
{/* <h2>The number is: {number}</h2> */ }
{/* <hr/> */ }
{/* <input id="addend" placeholder={coin?.market_data.current_price.inr.toLocaleString()}/><br/><br/>
        <input type="number" id="addend" onChange={handlechange}/><br/><br/>
        <input id="addend" placeholder={total.toLocaleString()}/>

        <button className='loginbutton'>Add</button> */}
{/* </div> */ }