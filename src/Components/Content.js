import React from "react";
import { useState } from "react";
import Styled from 'styled-components';

const Content = ({ children }) => {
    return (
      <Mycontainer>
            { children }
      </Mycontainer>
    )
}

const Mycontainer = Styled.div `
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    
    @media screen and (max-width: 1439px) {
        width: 80%
    }
`
export default Content;