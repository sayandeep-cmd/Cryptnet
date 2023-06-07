import React from 'react'
import './Counter.css';
import CountUp from 'react-countup';

function Counter() {


    return (
        <div>
            <div class="counter_wrapper">
                <div class="container">

                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <div class="count_box box_hover">
                                <h3><span class="timer"><CountUp start={100} end={150} duration={20}/></span>+</h3>
                                <h4>PEOPLE USING</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="count_box box_center">
                                <h3><span class="timer"><CountUp start={10} end={90} duration={20}/>+</span></h3>
                                <h4>Cryptos</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="count_box box_hover">
                                <h3><span class="timer"><CountUp start={1000} end={9000} duration={7}/></span>+</h3>
                                <h4>Crypto's Bought</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Counter