import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
