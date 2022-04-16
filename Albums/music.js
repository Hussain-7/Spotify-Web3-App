let fs = require("fs");
let axios = require("axios");

let media = [
  "Ava Max - Sweet but Psycho.mp3",
  "Fast Five - Don Omar.mp3",
  "Glass Animals - Heat Waves.mp3",
  "Imagine Dragons - Bones.mp3",
  "Olivia Rodrigo - happier.mp3",
];
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
      console.log(error);
    });
});
