import React from 'react';
import App, { Container } from 'next/app';

import withRematch from '../store/utils/withRematch';
import { store } from '../store';

import styles from '../style/index.css'; // eslint-disable-line

class PApp extends App {
  static async getInitialProps({ Component, ctx, query }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { pathname } = ctx;
    pageProps.pathname = pathname;
    return { pageProps, query };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

const mapState = state => ({
  scrollSpeed: state.app.scrollSpeed,
});

const mapDispatch = ({ app: { setProjectSlug, setIsTouch, setScrollSpeed, setPageScrollTop, setAboutPanelOpen } }) => ({
  setProjectSlug,
  setIsTouch,
  setScrollSpeed,
  setPageScrollTop,
  setAboutPanelOpen,
});

export default withRematch(store, mapState, mapDispatch)(PApp);
