import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'John'
    };
  }
  _getRandomName(event) {
    event.preventDefault();

    let names = ['Joe', 'Bob', 'Tyler', 'Dewey', 'John'];
    this.setState({
      name: names[Math.floor(Math.random() * names.length)]
    });
  }
  render() {
    return (
      <div styleName="container">
        <h1 styleName="title">Hello {this.state.name} !</h1>
        <button
          onClick={this._getRandomName.bind(this)}
          styleName="button">
            Update my name
          </button>
      </div>
    );
  }
}

export default CSSModules(App, styles);
