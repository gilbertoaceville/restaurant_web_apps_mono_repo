import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
          <title>Crunchies Admin</title>
          <meta
            name={"viewport"}
            content={"initial-scale=1.0, width=device-width"}
            key={"viewport"}
            user-scalable={"no"}
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/favicon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
