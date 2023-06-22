import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import useSound from 'use-sound';
import Layout from '../components/layout';
import { RecoilRoot } from 'recoil';

const DarkTheme: any = {
  /** Put your mantine theme override here */
  colorScheme: 'dark',
  colors: {
    'backGround': '#101b47',
    'paper': '#314b98',
    'oceanblue': ['#ffffff', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  }
}
const LightTheme: any = {
  /** Put your mantine theme override here */
  colorScheme: 'light',
  colors: {
    'backGround': '#061652',
    'paper': '#314b98',
    'oceanblue': ['#000000', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  }
}

//image pallete = #101b47

export default function App(props: AppProps) {
  const [play, { pause }] = useSound('/music/Epilogue.mp3', { loop: true });
  const [Permition, setPermition] = useState(false);
  const music = { play, pause };
  const { Component, pageProps } = props;
  const [isDark, setDark] = useState<boolean>(true);
  const toggleColorScheme = (value: any) =>
    setDark(!isDark);

  return (
    <div>
      <Head>
        <title>true wibe</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel='shortcut icon' href='/icon-192x192.png' />
      </Head>
      <RecoilRoot>
        <AnimatePresence>{Permition ? null : <Loader setPermition={setPermition} play={play} />}</AnimatePresence>
        <ColorSchemeProvider colorScheme={isDark ? "dark" : "light"} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={isDark ? DarkTheme : LightTheme}
          >
            <Layout music={music} >
              {Permition ?
                <Component {...pageProps} music={music} />
                : undefined}
            </Layout>
          </MantineProvider>
        </ColorSchemeProvider>
      </RecoilRoot >
    </div >
  );
}