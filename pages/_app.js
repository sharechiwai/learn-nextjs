import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
