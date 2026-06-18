import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selected_song } from '../redux/action/songActionCreator';

const songData = [
  {
    id: 1,
    name: "Kesariya",
    artist: "Arijit Singh",
    album: "Brahmastra",
    duration: "4:28",
    image: "kesariya.jpg",
  },
  {
    id: 2,
    name: "Apna Bana Le",
    artist: "Arijit Singh",
    album: "Bhediya",
    duration: "4:21",
    image: "apna_bana_le.jpg",
  },
  {
    id: 3,
    name: "Heeriye",
    artist: "Arijit Singh & Jasleen Royal",
    album: "Heeriye",
    duration: "3:15",
    image: "heeriye.jpg",
  },
  {
    id: 4,
    name: "O Maahi",
    artist: "Arijit Singh",
    album: "Dunki",
    duration: "3:54",
    image: "o_maahi.jpg",
  },
  {
    id: 5,
    name: "Tere Vaaste",
    artist: "Varun Jain, Sachin-Jigar",
    album: "Zara Hatke Zara Bachke",
    duration: "3:09",
    image: "tere_vaaste.jpg",
  },
  {
    id: 6,
    name: "Ranjha",
    artist: "Jasleen Royal, B Praak",
    album: "Shershaah",
    duration: "3:48",
    image: "ranjha.jpg",
  },
  {
    id: 7,
    name: "Raataan Lambiyan",
    artist: "Jubin Nautiyal, Asees Kaur",
    album: "Shershaah",
    duration: "3:50",
    image: "raataan_lambiyan.jpg",
  },
  {
    id: 8,
    name: "Chaleya",
    artist: "Arijit Singh, Shilpa Rao",
    album: "Jawan",
    duration: "3:20",
    image: "chaleya.jpg",
  },
  {
    id: 9,
    name: "Kaavaalaa",
    artist: "Shilpa Rao, Anirudh Ravichander",
    album: "Jailer",
    duration: "3:11",
    image: "kaavaalaa.jpg",
  },
  {
    id: 10,
    name: "Tum Kya Mile",
    artist: "Arijit Singh, Shreya Ghoshal",
    album: "Rocky Aur Rani Kii Prem Kahaani",
    duration: "4:37",
    image: "tum_kya_mile.jpg",
  },
  {
    id: 11,
    name: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    album: "Tiger Zinda Hai",
    duration: "4:21",
    image: "dil_diyan_gallan.jpg",
  },
  {
    id: 12,
    name: "Phir Aur Kya Chahiye",
    artist: "Arijit Singh",
    album: "Zara Hatke Zara Bachke",
    duration: "4:26",
    image: "phir_aur_kya_chahiye.jpg",
  },
  {
    id: 13,
    name: "Maan Meri Jaan",
    artist: "King",
    album: "Champagne Talk",
    duration: "3:14",
    image: "maan_meri_jaan.jpg",
  },
  {
    id: 14,
    name: "Tu Hai Kahan",
    artist: "AUR",
    album: "Tu Hai Kahan",
    duration: "4:23",
    image: "tu_hai_kahan.jpg",
  },
  {
    id: 15,
    name: "Satranga",
    artist: "Arijit Singh",
    album: "Animal",
    duration: "4:32",
    image: "satranga.jpg",
  },
];

const Song = () => {

  const dispatch = useDispatch()
  let currentSong = useSelector(state=>state.song);

  console.log("current song", currentSong);

  return(
    <>

    <h1> Songs</h1>

  

    {
      songData.map(s => 
        <p key={s.id}
        onClick={()=>{dispatch(selected_song(s))}}
        >{s.name}</p>
      )
    }

      { currentSong && <h1>
      {currentSong.album}
    </h1> }
      
      
    </>
  )
}
export default Song;