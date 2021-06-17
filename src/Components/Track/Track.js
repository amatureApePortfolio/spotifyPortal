import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return <button>-</button>
    }
    else {
      return <button>+</button>
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} - {this.props.album}</p>
        </div>
        <button className="Track-action">+ -</button>
      </div>
    )
  }
}

export default Track;