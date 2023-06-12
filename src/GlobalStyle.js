import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      src: url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
    }
    :root {
        --color-primary: #B51215;
        --color-sub: #DF8A8B;
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        font-size: 16px;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    .a11y-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }

    button {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        border: none;
        cursor: pointer;
        :disabled {
            cursor: default;
        }
    }
`;