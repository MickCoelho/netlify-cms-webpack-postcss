import React, { Component } from 'react';
import styles from './styles.css';

import Cell from '../../components/Cell';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.gridSize = 3;
    this.cellsClicked = [];

    let i; let
      j;
    for (i = 0; i < this.gridSize; i++) {
      for (j = 0; j < this.gridSize; j++) {
        this.cellsClicked.push(0);
      }
    }

    this.state = {
      isPlayerOne: true,
    };
  }

    onClickCell = (cellIndex) => {
      const {
        isPlayerOne,
      } = this.state;
      this.cellsClicked[cellIndex] = (isPlayerOne ? 1 : 2);
      this.setState({
        isPlayerOne: !isPlayerOne,
      });

      this.checkIfWinner();
    }

    checkIfWinner() {
      let isNoWinner = true;
      let i; let
        j;
      for (i = 0; i < this.cellsClicked.length; i += 1) {
        const currentCellClicked = this.cellsClicked[i];
        if (currentCellClicked !== 0) {
          // horizontal, 3 consecutive cells
          for (j = 1; j < this.gridSize; j += 1) {
            const nextCell = this.cellsClicked[i + j];
            console.log(`currentCellClicked (${(i)}): ${currentCellClicked}`);
            console.log(`nextCell (${(i + j)}): ${nextCell}`);

            if (nextCell === currentCellClicked) {
              isNoWinner = false;
            } else {
              isNoWinner = true;
            }
          }
          if (!isNoWinner) {
            console.log('We have a winner! (horizontal)');
            return;
          }

          // // vertical
          // const verticalSpacing = this.gridSize;
          // for (j = this.gridSize; j < this.gridSize * this.gridSize; j += verticalSpacing) {
          //   const nextCell = this.cellsClicked[i + j];
          //   // console.log(`currentCellClicked (${(i)}): ${currentCellClicked}`);
          //   // console.log(`nextCell (${(i + j)}): ${nextCell}`);
          //   if (nextCell === currentCellClicked) {
          //     isNoWinner = false;
          //   } else {
          //     isNoWinner = true;
          //   }
          // }

          // if (!isNoWinner) {
          //   console.log('We have a winner! (vertical)');
          //   return;
          // }
        }
      }
      // console.log('No winner');
    }

    renderCells() {
      const {
        isPlayerOne,
      } = this.state;
      const cells = [];

      let i; let
        j;
      let cellIndex = 0;
      for (i = 0; i < this.gridSize; i++) {
        for (j = 0; j < this.gridSize; j++) {
          cells.push(
            <Cell
              onMouseDown={this.onClickCell}
              isPlayerOne={isPlayerOne}
              key={`${i}-${j}`}
              cellIndex={cellIndex}
            />
          );
          cellIndex++;
        }
      }
      return cells;
    }

    render() {
      let i; const
        j = 0;
      return (
        <div className={styles.grid}>
          {
            this.renderCells()
          }
        </div>
      );
    }
}
