import styled, { createGlobalStyle } from 'styled-components'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.eot');
        src: local('source-sans-pro-v19-latin-regular.woff'), url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.woff') format('woff'),
            url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.eot?#iefix') format('embedded-opentype'),
            url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.woff2') format('woff2'),
            url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.woff') format('woff'),
            url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.ttf') format('truetype'),
            url('./Assets/fonts/source-sans-pro/source-sans-pro-v19-latin-regular.svg#SourceSansPro') format('svg');
    }
`

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const AppContainer = styled.div`
    width: 1120px;
    margin: 0 auto;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 1180px) {
        width: 100%;
        max-width: 100%;
    }

    @media (max-width: 940px) {
        padding-bottom: 30px;
    }

    @media (max-width: 750px) {
        overflow: hidden;
    }
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;

    @media (max-width: 940px) {
        flex-direction: column-reverse;
    }
`
