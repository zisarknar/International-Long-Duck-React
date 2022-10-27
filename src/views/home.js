import React from 'react'

import { Helmet } from 'react-helmet'

import SideMenu from '../components/side-menu'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Long Duck</title>
        <meta property="og:title" content="International Long Duck" />
      </Helmet>
      <div className="home-container1 bg-slate-500">
        <div className="home-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <span className="home-title">
          <span>Dashboard</span>
          <br></br>
        </span>
      </div>
      <SideMenu rootClassName="side-menu-root-class-name"></SideMenu>
    </div>
  )
}

export default Home
