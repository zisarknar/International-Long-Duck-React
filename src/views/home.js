import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Long Duck</title>
        <meta property="og:title" content="International Long Duck" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <span className="home-text">
            <span>Brand</span>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="home-container3">
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
        </div>
      </div>
    </div>
  )
}

export default Home
