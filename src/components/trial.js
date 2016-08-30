    import React, { Component } from 'react';

    export default class Trial extends Component {
      constructor(props) {
        super(props);
        this.state = {
          wins: 0,
          losses: 0
        };
        [...Array(1000000)].forEach(() => {
          this.newTrial();
        });
      }
      newTrial() {
        this.setupChoices();
        this.state.first_choice = this.chooseRandom(0, 2);
        this.state.door_revealed = this.revealDoor();
        this.state.second_choice = this.secondChoice();
        this.state.second_choice === this.state.correct_door ? this.state.wins++ : this.state.losses++;
      }
      setupChoices() {
        switch (this.chooseRandom(0, 2)) {
          case 0:
            this.state.correct_door = 0;
            this.state.false_doors = [1, 2];
            break;
          case 1:
            this.state.correct_door = 1;
            this.state.false_doors = [0, 2];
            break;
          case 2:
            this.state.correct_door = 2;
            this.state.false_doors = [0, 1];
            break;
        }
      }
      chooseRandom(min, max) {
        return Math.floor(Math.random() * (max-min+1) + min);
      }
      revealDoor() {
        if (this.state.first_choice === this.state.correct_door) {
          return this.state.false_doors[this.chooseRandom(0, 1)];
        } else {
          for ( let door of this.state.false_doors ) {
            if ( door !== this.state.first_choice ) { return door; }
          }
        }
      }
      secondChoice() {
        switch (this.props.type) {
          case 'switcher':
            for ( let door of [0, 1, 2] ) {
              if ( door !== this.state.first_choice && door !== this.state.door_revealed ) {
                return door;
              }
            }
          case 'non-switcher':
            return this.state.first_choice;
        }
      }
      render() {
      return (
        <div className="trial">
          {this.props.type}
          <p>Wins: {this.state.wins}, Losses: {this.state.losses}</p>
        </div>
      );
      }
    }
