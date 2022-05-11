import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fontFamilies.primary};
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    }
    
  button {
    cursor: pointer;
    }
    
  input {
    border: none;
    border-radius: 4px;
    background: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fontFamilies.primary};
    padding: 10px;
    width: 100%;
    }
    
  input:focus {
    outline: none;
    }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamilies.secondary};
    font-weight: ${props => props.theme.fontWeights.bold};
    }
    
  title {
    font-weight: 1000;
    font-size: 4vh;
    line-height: 6vh;
    height: 6vh;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 8px;
    }
`;