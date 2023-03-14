import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const DarkTheme: any = {
  /** Put your mantine theme override here */
  colorScheme: 'dark',
  colors: {
    'oceanblue': ['#ffffff', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  }
}
const LightTheme: any = {
  /** Put your mantine theme override here */
  colorScheme: 'light',
  colors: {
    'oceanblue': ['#000000', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  }

}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [isDark, setDark] = useState<boolean>(false);
  const toggleColorScheme = (value: any) =>
    setDark(!isDark);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={isDark ? "dark" : "light"} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          // theme={{colorScheme: 'dark'}}
          theme={!isDark ? DarkTheme : LightTheme}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}