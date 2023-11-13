import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Thin.woff');
        font-weight: 100;
        font-style: thin;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-ExtraLight.woff');
        font-weight: 200;
        font-style: extra-light;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Light.woff');
        font-weight: 300;
        font-style: light;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Regular.woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Medium.woff');
        font-weight: 500;
        font-style: medium;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-SemiBold.woff');
        font-weight: 600;
        font-style: semi-bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Bold.woff');
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-ExtraBold.woff');
        font-weight: 800;
        font-style: extra-bold;
    }

    @font-face {
        font-family: Pretendard;
        src: url('./assets/fonts/Pretendard-Black.woff');
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
