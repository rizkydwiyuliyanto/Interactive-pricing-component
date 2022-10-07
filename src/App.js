import React from "react";
import { useState } from "react";
import Styled from "styled-components";
import bg from "../images/bg-pattern.svg";
import Content from "./Components/Content";
import Card from './Components/Card';
import circle from "../images/pattern-circles.svg";
import Globalfont from "../src/fonts/fonst";

const App = () => {
  return (
    <div style={{ height: "100vh", "fontFamily":"Manrope-Bold" }}>
      <Globalfont/>
      <HeaderBackground/>
      <Content>
        <Header>
          <h2>Simple, traffic-based pricing</h2>
          <span>Sign-up for our 30-day trial. No credit card required.</span>
        </Header>
      </Content>
    <Card />
    </div>
  );
};


const Header = Styled.div`
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 130px;
    height: 190px;
    position: relative;
    font-weight: bold;
    text-align: center;
    h2 {
        font-size: 1.4rem;
        margin-bottom: auto;
        padding-top: 2.2em;
        padding-bottom: 1em;
        color: hsl(227, 35%, 25%);
        @media screen and (max-width: 799px) {
          font-size: 1.3rem;
        }
    }span {
      font-size: 1.2rem;
      color:  hsl(225, 20%, 60%);
      @media screen and (max-width: 799px) {
        font-size: 1rem;
      }
    }
`;

const HeaderBackground = Styled.div`
    background-image: url(${bg});
    background-size: 95% 90%;
    position: absolute;
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    height: 350px;
    @media screen and (max-width: 799px) {
    height: 350px;
    }
`;

export default App;
