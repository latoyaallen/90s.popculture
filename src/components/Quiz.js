import React from 'react';
import { MOBILE } from '../lib/breakpoints';
import { css, StyleSheet } from 'aphrodite-jss';

const styles = StyleSheet.create({
  factsContainer: {
    color: 'white',
    fontSize: '25px',
    marginLeft: 900,
    position: 'absolute',
    bottom: 0,
    [MOBILE]: {
      marginLeft: 0,
      textAlign: 'center',
    },
  },
});

// Fact data
const sports = "Who won the NBA championship in 1990?";
const gianni = "Gianni Versace designed the costumes for the San Francisco Opera's production of ???";
const president = "Who was president in 1990?";
const dapperDan = "In 1992, which fashion house along with then-U.S. Attorney Sonia Sotomayor, shut down Dapper Dan's business?";
const arsenioBill = "In June 1992, then-presidential candidate Bill Clinton played the saxophone on which tv show?";
const facts = [
  {"id": 0, "text": sports},
  {"id": 1, "text": gianni},
  {"id": 3, "text": president},
  {"id": 4, "text": dapperDan},
  {"id": 5, "text": arsenioBill},
];
// Fact data

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      currentFact: facts[0]["text"],
    };
  }

  componentDidMount () {
    this.interval = setInterval(() => this.changeFact(), 6000);
  }

  changeFact() {
    let count = this.state.count;
    if(count < facts.length) {
      this.setState({count: count + 1});
      this.setState({currentFact: facts[count]["text"]});
    } else {
      this.setState({count: 0});
    }
  };

  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p className={css(styles.factsContainer)}>{this.state.currentFact}</p>
      </div>
    );
  }
}


export default Quiz;
