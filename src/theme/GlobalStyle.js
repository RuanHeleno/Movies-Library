import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-yellow: #f7d354;
    --color-yellow-hover: #b8930c;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  body {
    background-color: black;
    color: white;
    }

    a {
        text-decoration: none;
        color: var(--color-yellow);
        transition: all 500ms ease-in-out;
    }

    a:hover {
        color: var(--color-yellow-hover);
    }

    #loading {
      width: 100%;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

export default GlobalStyle;
