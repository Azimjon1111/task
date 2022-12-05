import * as React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import store from "../store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
