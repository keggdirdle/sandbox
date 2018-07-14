import React from 'react';
import { render } from 'react-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Bojack from './bojack';
import '../css/styles.sass';

const user = {
  name: 'BoJack',
  age: 45,
  career: 'That horse from horsing around',
  friends: [
    'Todd',
    'Wanda',
    'Princess Caroline',
    'Hollyhock',
  ],
};

class BoJack extends React.Component {
  onGreet() {
    const output = 'What is this a crossover episode?';
    alert(output);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home user={user} greet={this.onGreet}>
              <p>I`m not your child, I`m your 1/2 sister</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<BoJack />, window.document.getElementById('react'));

alert('suck a dick dumb shits');

const bojack = new Bojack();
console.log(bojack.itsAToddEpisode());
