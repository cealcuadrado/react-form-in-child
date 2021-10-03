import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="form-group">
              <label>Texto</label>
              <input
                type="text"
                class="form-control"
                value={this.props.text}
                onChange={this.props.changeText}
              />
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="form-group">
              <label>Texto resultante</label>
              <input type="text" class="form-control" disabled value={this.props.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
