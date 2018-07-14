import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.user.age,
    };
  }
  makeOlder() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  render() {
    return (
      <div>
        <p>Your name is {this.props.user.name}</p>
        <p>Your age is {this.state.age}</p>
        <div>
        Friends:
          <ul>
            {this.props.user.friends.map(friend => <li key={friend}>{friend}</li>)}
          </ul>
        </div>
        {this.props.children}
        <button
          className="btn btn-primary"
          onClick={() => this.makeOlder()}
        >Make me older
        </button>
        <hr />
        <button onClick={this.props.greet} className="btn btn-primary">Greet!</button>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    carreer: PropTypes.string,
    friends: PropTypes.array,
  }).isRequired,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func.isRequired,
};
