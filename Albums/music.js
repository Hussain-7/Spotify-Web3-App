let fs = require("fs");
let axios = require("axios");
const path = require("path");
require("dotenv").config();

let media = [
  "coverImage.jpeg",
  // "Ava Max - Sweet but Psycho.mp3",
  // "Fast Five - Don Omar.mp3",
  // "Imagine Dragons - Bones.mp3",
  // "Olivia Rodrigo - happier.mp3",
  // "Glass Animals - Heat Waves.mp3",
];
// const readFileInFolder = async () => {
//   fs.readdir(path.resolve(__dirname, "export"), (err, files) => {
//     if (err) throw err;
//     for (let file of files) {
//       media.push(file);
//     }
//   });
// };
let ipfsArray = [];
let promises = [];
for (let i = 0; i < media.length; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
        if (err) rej();
        ipfsArray.push({
          path: `media/${media[i]}`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );
}
console.log(process.env.API_KEY);
Promise.all(promises).then(() => {
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
      console.log("error in axios");
    });
});

// Results
const ipfs = [
  {
    path: "https://gateway.ipfs.io/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/0",
  },
  {
    path: "https://gateway.ipfs.io/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/1",
  },
  {
    path: "https://gateway.ipfs.io/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/2",
  },
  {
    path: "https://gateway.ipfs.io/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/3",
  },
  {
    path: "https://gateway.moralisipfs.com/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/4",
  },
  {
    path: "https://gateway.moralisipfs.com/ipfs/QmfEoHvurf4LJPrD2sArw6jRt2hDRqFGJ6kBUbEKAeTYoC/media/5",
  },
];

// https://gateway.ipfs.io/ipfs/QmPa4ASmmkUPzzk8SAXkkDPPtvmAJCqytLnWLW4voZbpbG/media/0
// https://ipfs.moralis.io:2053/ipfs/

// https://ipfs.moralis.io:2053/ipfs/QmPa4ASmmkUPzzk8SAXkkDPPtvmAJCqytLnWLW4voZbpbG/media/0.jpg

// https://gateway.ipfs.io/ipfs/QmRemJneNGkvrLQTFx83Ld2XTjsgdDRNFVeCbcK3kyah48/media/0
// https://ipfs.moralis.io:2053/ipfs/QmRemJneNGkvrLQTFx83Ld2XTjsgdDRNFVeCbcK3kyah48/media/0

// https://gateway.ipfs.io/ipfs/QmRemJneNGkvrLQTFx83Ld2XTjsgdDRNFVeCbcK3kyah48/media/0

https://gateway.moralisipfs.com/ipfs/QmUG5tHQS8aw3v8KwZ4TuaF7AQC8SqEPatEwcanbTT9HvH/media/coverImage.jpeg