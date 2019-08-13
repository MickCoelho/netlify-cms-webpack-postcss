import React, { Component } from "react";
import styles from "./styles.css";
import classnames from 'classnames';

export default class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: 0,
        };
    }

    onClickCell = ()=> {
        const {
            onMouseDown,
            isPlayerOne,
            cellIndex,
        } = this.props;
        onMouseDown(cellIndex);
        this.setState({
            isClicked: (isPlayerOne ? 1 : 2),
        });
    }

    render() {
        const {
            isClicked,
        } = this.state;

        const cellClasses = classnames(styles.cell, {
            [styles.disabled]: isClicked !== 0,
            [styles.playerOneClicked]: isClicked === 1,
            [styles.playerTwoClicked]: isClicked === 2,
        });

        return (
            <div className={cellClasses} onMouseDown={this.onClickCell}>
            </div>
        );
    }
}
