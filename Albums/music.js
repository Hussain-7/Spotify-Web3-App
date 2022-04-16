let fs = require("fs");
let axios = require("axios");
const path = require("path");

let media = [
  "cover.jpg",
  "Ava Max - Sweet but Psycho.mp3",
  "Fast Five - Don Omar.mp3",
  "Imagine Dragons - Bones.mp3",
  "Olivia Rodrigo - happier.mp3",
  "Glass Animals - Heat Waves.mp3",
];
const readFileInFolder = async () => {
  fs.readdir(path.resolve(__dirname, "export"), (err, files) => {
    if (err) throw err;
    for (let file of files) {
      media.push(file);
    }
  });
};
await readFileInFolder();
let ipfsArray = [];
let promises = [];
for (let i = 0; i < media.length; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
        if (err) rej();
        ipfsArray.push({
          path: `media/${i}`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );
}
console.log(promises);
Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        "X-API-KEY":
          "FmpB7bIckgJMbg6gOqCnrBpPHj2hd6WdlwcZ6wFoqCuWswR2t4f1dqy65jarTL2I",
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
    path: "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/0",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/1",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmdgYdsLnD6f1sPFkEE8Kb6BWbZKTZbrVsBSCgeysLfBiU/media/2",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/3",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmefbQ7SkQMixLsXmpAWQyyPsuKiRjVExXcWowHzUjiQH5/media/4",
  },
  {
    path: "https://ipfs.moralis.io:2053/ipfs/QmfEoHvurf4LJPrD2sArw6jRt2hDRqFGJ6kBUbEKAeTYoC/media/5",
  },
];
