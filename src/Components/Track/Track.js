import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return <button onClick={this.removeTrack}>-</button>
    }
    else {
      return <button onClick={this.addTrack}>+</button>
    }
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.removeTrack(this.props.track)
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