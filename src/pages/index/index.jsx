import React, { Component } from 'react';
import content from '../../../content/home.json';
import styles from './styles.css';

export default class Home extends Component {
  render() {
    const { hero } = content;
    return (
      <section className={styles.container}>
        <h1>{hero}</h1>
      </section>
    );
  }
}
