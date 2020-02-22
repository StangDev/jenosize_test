import React from "react"
import App from 'next/app'
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux/stores'
import Layout from '../components/shared/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

class MyApp extends App {
render () {
    const { Component, pageProps ,store } = this.props
    return (
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    )
}
}

export default  withRedux(initStore, { debug: true })(MyApp)