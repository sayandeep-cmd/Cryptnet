import React from 'react'
import './About.scss';

function About() {
  return (
    <div>
    <div id="about-main">
    <div class="jumbotron">
      <div class="jumbotron-inner">
        <div class="top-box">
          <div class="content-box">
            <h1>
              About CRYPTNETIC
            </h1>
            <p>
            At Cryptnetic,we started as a Centralized Exchange. Evolved into the whole Crypto Experience. We are the Crypto Experts and Creative Explorers in a digital assets universe. Your Captivating Expedition to the frontiers of finance!
            </p>
          </div>
        </div>
      </div>
      <div class="img-layer-container">
        <div class="team-image" id="team-image">
          <img src="../Assets/about.png" />
        </div>
  
        <div class="circles-container">
          <div class="img-1">
            <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
          </div>
          <div class="img-2">
            <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
          </div>
        </div>
      </div>
    </div></div></div>
  )
}

export default About