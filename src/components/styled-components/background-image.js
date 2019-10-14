import styled from "styled-components"

const BGImage = styled.img`
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  max-width: 1440px;
  width: 100%;
  object-fit: cover;
  z-index: -1; */
  position: absolute;
  margin: auto;
  min-height: 100%;
  min-width: 100%;

  /* For the following settings we set 100%, but it can be higher if needed
    See the answer's update */
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
`

export default BGImage
