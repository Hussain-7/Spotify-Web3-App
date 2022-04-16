let fs = require("fs");
let axios = require("axios");
require("dotenv").config();

let songs = [
  "Ava Max - Sweet but Psycho.mp3",
  "Fast Five - Don Omar.mp3",
  "Imagine Dragons - Bones.mp3",
  "Olivia Rodrigo - happier.mp3",
  "Glass Animals - Heat Waves.mp3",
];
let animation_url = [
  "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/1",
  "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/2",
  "https://ipfs.moralis.io:2053/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/3",
  "https://ipfs.moralis.io:2053/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/4",
  "https://ipfs.moralis.io:2053/ipfs/QmfEoHvurf4LJPrD2sArw6jRt2hDRqFGJ6kBUbEKAeTYoC/media/5",
];

let durations = ["3:27", "3:27", "3:55", "2:45", "2:56"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  console.log({
    path: `metadata/${i}.json`,
    content: {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/0",
      name: songs[i],
      animation_url: animation_url[i],
      duration: durations[i],
      artist: "Hussain Rizvi",
      year: "2021",
    },
  });
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/0",
      name: songs[i],
      animation_url: animation_url[i],
      duration: durations[i],
      artist: "Hussain Rizvi",
      year: "2021",
    },
  });
}

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY": process.env.API_KEY,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    // console.log(error);
  });

// results
const results = [
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmPt5dALzuWqEpnWEaM2fdGE9S7vGkgdJLr11hh4e8VNFL/metadata/0.json",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmPt5dALzuWqEpnWEaM2fdGE9S7vGkgdJLr11hh4e8VNFL/metadata/1.json",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmPt5dALzuWqEpnWEaM2fdGE9S7vGkgdJLr11hh4e8VNFL/metadata/2.json",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmPt5dALzuWqEpnWEaM2fdGE9S7vGkgdJLr11hh4e8VNFL/metadata/3.json",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmPt5dALzuWqEpnWEaM2fdGE9S7vGkgdJLr11hh4e8VNFL/metadata/4.json",
  },
];
