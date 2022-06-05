import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components';

import 'react-slideshow-image/dist/styles.css';
import 'styles/main.css';
import 'styles/font.css';
import theme from 'styles/theme';
import Global from 'styles/global';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Global theme={theme} />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp