import { createGlobalStyle, keyframes } from 'styled-components'

interface CustomTheme {
  grey1: string
  grey2: string
  grey3: string
  grey4: string
  grey5: string
  grey6: string
  grey7: string
  grey8: string
  hoverBc: string
  fontLargest: string
  fontLarge: string
  fontNormal: string
  fontSmall: string
  primaryColor: string
  borderColor: string
  darkMode?: boolean
  bgUrl: string
}

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`
const flexRow = `
    flex-direction: row;
`
const jellyAnimation = keyframes`
${''} {
    ${'0%'} ,
    ${'100%'} {
      transform: scale(1, 1);
    }
    ${'25%'}  {
      transform: scale(0.9, 1.1);
    }
    ${'50%'}  {
      transform: scale(1.1, 0.9);
    }
   ${'75%'} {
      transform: scale(0.95, 1.05);
    }
  }
`
const lightTheme = { bgColor: '#FFFFFF', fontColor: '#000' }
const darkTheme = {
  bgColor: `linear-gradient(113.54deg,
      rgba(103, 58, 194, 0.5) 10.91%,
      rgba(122, 74, 221, 0.398) 25.92%,
      rgba(209, 103, 255, 0.03) 55.76%),
    linear-gradient(160.75deg, #7a4add 41.37%, #d57bff 98.29%)`,
  fontColor: '#FFFFFF',
}

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    width: 100%;
    font-size: 16px;
    padding: 0;
    margin: 0;
    /* background-color: #1a1a1a; */

  }
  #root{
    position: relative;
    min-height: 100vh;
    --animate-duration: 2s !important;
    --animate-delay: 0.9s !important;
    color: ${(prop: any) => (prop.theme.isDark ? darkTheme.fontColor : lightTheme.fontColor)};
    background: ${(prop: any) => (prop.theme.isDark ? darkTheme.bgColor : lightTheme.bgColor)};

  }
  

  body {
 
  .adm-mask{
    opacity: 0.3 !important;
  }
  }

  body, textarea, input, button {
    line-height: 1;
  }
input,textarea{
    ::-webkit-input-placeholder {
          /*Webkit browsers*/
          color: #999 !important;
        }
    :-moz-placeholder{/*Mozilla Firefox 4 to 8*/
	       color:#999;
        }
           ::moz-placeholder{/*Mozilla Firefox 19+*/
	      color:#999;
        }
   :-ms-input-placeholder{/*Internet Explorer 10+*/
        color:#999;
        }

}
  div, p {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
    display: none;
  }
  }
  button{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
 }
  button, a {
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    
  }

  a {
    color: inherit;
    text-decoration: none;
    :focus {
      outline: none;
    }
  }

  img {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  div, a, button, li {
    display: flex;
    box-sizing: border-box;
  }
`
const defaultTheme: CustomTheme = {
  grey1: '#333333',
  grey2: '#666666',
  grey3: '#FFFFFF',
  grey4: '#999999',
  grey5: '#FF3838',
  grey6: '#3D8DE2',
  grey7: '#f6dce6;',
  grey8: '#000;',
  hoverBc: '#EBEBEB',
  fontLargest: '24px',
  fontLarge: '20px',
  fontNormal: '16px',
  fontSmall: '14px',
  primaryColor: '#F95997;',
  borderColor: '#333333',
  darkMode: false,
  bgUrl: '',
}

export { GlobalStyle, defaultTheme, flexCenter, darkTheme, lightTheme, flexRow, jellyAnimation }
