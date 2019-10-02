import React from 'react';
import App, { Container } from 'next/app';

import withRematch from '../store/utils/withRematch';
import { store } from '../store';
import API from '../utils/api';

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

    // const allOfThem = fetch(
    //   '/.netlify/functions/customers-read-all',
    // ).then((response) => {
    //   return response.json();
    // });
    // console.log(allOfThem);

    // Todo data
    const myTodo = {
      title: 'My todo title',
      completed: false,
    };
    API.create(myTodo)
      .then((response) => {
        console.log('API response', response);
      })
      .catch((error) => {
        console.log('API error', error);
      });

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

const mapState = (state) => ({
  scrollSpeed: state.app.scrollSpeed,
});

const mapDispatch = ({
  app: {
    setProjectSlug,
    setIsTouch,
    setScrollSpeed,
    setPageScrollTop,
    setAboutPanelOpen,
  },
}) => ({
  setProjectSlug,
  setIsTouch,
  setScrollSpeed,
  setPageScrollTop,
  setAboutPanelOpen,
});

export default withRematch(store, mapState, mapDispatch)(PApp);
