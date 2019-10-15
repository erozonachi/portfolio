import styled from "styled-components"
import bg from "../../images/background.png"

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 60px;
    margin: 20px 50px 0 50px;
    background-color: rgba(255, 255, 255, 0);

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: rgba(255, 255, 255, 0);
      &:last-of-type {
        justify-content: flex-end;
      }
      > span {
        font-family: "Satisfy", cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3.6rem;
        line-height: 5rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
        background-color: rgba(255, 255, 255, 0);
      }
      > a {
        font-family: "Scada", sans-serif;
        font-style: normal;
        /* font-weight: bold; */
        font-size: 2.4rem;
        line-height: 3rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0);
        margin: 0 20px;
        &:first-of-type {
          margin-left: 0;
        }
        &:last-of-type {
          margin-right: 0;
        }
        &:hover {
          color: rgba(127, 127, 127, 0.9);
        }
        &:link {
          color: rgba(255, 255, 255, 0.9);
        }
        &:active {
          color: rgba(255, 255, 255, 0.9);
        }
        &:visited {
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }
  img {
    max-width: 500px;
    width: 80px;
    margin-top: 80px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
  }
  h3 {
    height: 74px;
    font-family: "Charm", cursive;
    font-style: normal;
    font-weight: bold;
    font-size: 4.8rem;
    line-height: 74px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 10px 0 155px 0;
    background-color: rgba(255, 255, 255, 0);
    background: -webkit-linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default Header
