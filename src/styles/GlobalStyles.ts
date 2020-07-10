import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    box-sizing: border-box;

    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  *, button, input {
    background: none;
    border: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, sans-serife;
  }
  html {
    background: var(--primary);
  }
`
