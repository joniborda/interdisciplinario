import RootLayout from "@/app/layout";

type AppProps = {
    Component: any;
    pageProps: any;
};
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}