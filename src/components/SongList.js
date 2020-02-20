import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="collection" key={song.title}>
          <div className="collection-item">
            {song.title}
            <button
              className="btn right"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select Song
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
