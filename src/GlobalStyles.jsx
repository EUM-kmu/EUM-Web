import { createGlobalStyle } from "styled-components";

import PretendardThin from "./assets/fonts/Pretendard-Thin.woff";
import PretendardExtraLight from "./assets/fonts/Pretendard-ExtraLight.woff";
import PretendardLight from "./assets/fonts/Pretendard-Light.woff";
import PretendardRegular from "./assets/fonts/Pretendard-Regular.woff";
import PretendardMedium from "./assets/fonts/Pretendard-Medium.woff";
import PretendardSemiBold from "./assets/fonts/Pretendard-SemiBold.woff";
import PretendardBold from "./assets/fonts/Pretendard-Bold.woff";
import PretendardExtraBold from "./assets/fonts/Pretendard-ExtraBold.woff";
import PretendardBlack from "./assets/fonts/Pretendard-Black.woff";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Pretendard;
        src: url(${PretendardThin}) format('woff');
        font-weight: 100;
        font-style: thin;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardExtraLight}) format('woff');
        font-weight: 200;
        font-style: extra-light;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardLight}) format('woff');
        font-weight: 300;
        font-style: light;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardMedium}) format('woff');
        font-weight: 500;
        font-style: medium;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardSemiBold}) format('woff');
        font-weight: 600;
        font-style: semi-bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardBold}) format('woff');
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardExtraBold}) format('woff');
        font-weight: 800;
        font-style: extra-bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardBlack}) format('woff');
        font-weight: 900;
        font-style: black;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Pretendard'; 
        color: #000000;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    body {
        box-sizing: border-box;
    }

`;

export default GlobalStyles;
