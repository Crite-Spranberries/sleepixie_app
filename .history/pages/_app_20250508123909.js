import './globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="mainContainer">
      <Component {...pageProps} />
    </main>
  );
}
