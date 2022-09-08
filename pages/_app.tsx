import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {ColorSchemeProvider, MantineProvider, ColorScheme} from '@mantine/core'
import {useLocalStorage} from "@mantine/hooks";


function MyApp({Component, pageProps}: AppProps) {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === "dark" ? 'light' : 'dark'))
    }

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                theme={{
                    colorScheme: 'light'
                }}>
                <Component {...pageProps} />
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MyApp
