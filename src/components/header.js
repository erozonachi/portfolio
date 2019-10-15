import PropTypes from "prop-types"
import React from "react"

import { HeaderContainer } from "./styled-components"
import avatar from "../images/avatar.png"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <nav>
      <div>
        <span>{siteTitle}</span>
      </div>
      <div>
        <a href="#">About</a>
        <a href="#">Education</a>
        <a href="#">Arsenal</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
      </div>
    </nav>
    <img src={avatar} alt="James, Eneh" />
    <h3>Result oriented Software Engineer</h3>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
