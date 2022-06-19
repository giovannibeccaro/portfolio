import "../styles/index.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import it from "../lang/it.json";
import en from "../lang/en.json";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages: any = { en, it };

  return (
    <ThemeProvider>
      {locale && (
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Component {...pageProps} />
        </IntlProvider>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
