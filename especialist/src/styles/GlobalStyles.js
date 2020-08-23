import {createGlobalStyle} from 'styled-components';
import {primaryLightColor} from '../config/colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;   
    }

    body {
        background-color: ${primaryLightColor};
        background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,.3));
    }

    html, body, #root {
        height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`;