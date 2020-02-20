import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Yummy Yummy", duration: "04.05" },
    { title: "Sorry ", duration: "4.09" },
    { title: "As Long As You Love Me", duration: "03.09" },
    { title: "Love Youselft", duration: "04:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
