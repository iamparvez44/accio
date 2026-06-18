import { SELECTEDSONG } from "./actionType";

export const selected_song = (song)=>{

  

  return {
    type: SELECTEDSONG,
    payload: song
  }
}

