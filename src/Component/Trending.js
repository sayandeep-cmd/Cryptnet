import React, { useEffect, useState } from 'react'
// import { TrendingCoins } from '../API/api';
import axios from 'axios'
// import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom'
import './Trending.css';
import AliceCarousel from "react-alice-carousel";

function Trending() {
    let [trending, setTrending] = useState([]);
    let status = 2341806.44;
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then((res) => {
                setTrending(res.data.coins);
                console.log(res.data)
            })
            .catch((err) => { console.log(err); })
    }, [])


    let coins = trending.map((trend) => {
        let profit = trend?.item.price_btc >= 0.0005;
        let x=trend.item.market_cap_rank;
        return (
            <>
                
                <section className='second-section'>
                    <span className='carouselItem'>
                        <img src={trend.item.large} alt={trend.item.name}
                            height="80"
                            style={{ marginBottom: 10}} className='round' />
                        {trend?.item.name}
                        &nbsp;
                        <span style={{color:x>30?"red":"green"}}>Rank- {x}</span>
                        <span>₹ {(trend.item.price_btc * status).toFixed(8)}</span>
                    </span>
                </section>
            </>
        )
    })
    const responsive = {
        0: {
          coins: 2,
        },
        1024: {
          coins: 4,
        }
      };
    return (
        <>
        <h1 className='h1-type1'>Trending Today</h1>
        <p className='tagline'>Top performing Cryptos in the last 24 hours with Marketcap rank and price</p>
            <div className="carousel">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1500}
                    animationDuration={2000}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    items={coins}
                    autoPlay
                />
            </div>
        </>
    )
}
export default Trending


// https://data.binance.com/api/v3/ticker/24hr


// main api- https://api.coingecko.com/api/v3/search/trending