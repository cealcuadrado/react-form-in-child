import React from 'react';
import Main from '../main/Main';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Text',
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    var text = event.target.value;
    this.setState({ data: text });
  }

  render() {
    return (
      <div>
        <Main text={this.state.data} changeText={this.changeText} />
        <hr />
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default Layout;
