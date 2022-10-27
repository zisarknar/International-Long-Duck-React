import React from 'react'

import PropTypes from 'prop-types'

import MenuItem from './menu-item'
import './side-menu.css'

const SideMenu = (props) => {
  return (
    <div className={`side-menu-side-menu ${props.rootClassName} `}>
      <div className="side-menu-container">
        <MenuItem className=""></MenuItem>
      </div>
    </div>
  )
}

SideMenu.defaultProps = {
  rootClassName: '',
}

SideMenu.propTypes = {
  rootClassName: PropTypes.string,
}

export default SideMenu
