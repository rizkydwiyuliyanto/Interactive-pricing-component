import { createGlobalStyle } from "styled-components";

import ManropeBold from "./Manrope/Manrope-Bold.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "Manrope-Bold";
        src: local("Manrope-Bold"),
        url(${ManropeBold}) format("truetype");
        font-weight: bold;
        font-style: normal;
    }
`;