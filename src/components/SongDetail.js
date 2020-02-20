import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    const { song } = this.props;
    if (!song) {
      return <div>Select the Song</div>;
    }
    return <div className="center">{song}</div>;
  }
}
const mapStateToProps = state => {
  return {
    song: state.SelectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
