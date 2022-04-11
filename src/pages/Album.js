import React from "react";
import { Link, useLocation } from "react-router-dom";
import { apiResponse } from "../helpers/apiCallResponse";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";

const Album = ({ setNftAlbum }) => {
  const albumDetails = apiResponse;
  console.log(albumDetails);
  const { state: album } = useLocation();
  return (
    <>
      <div className="albumContent">
        <div className="topBan">
          <img src={album.image} alt="albumcover" className="albumCover"></img>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{album.title}</div>
            <div className="artist">
              {albumDetails && JSON.parse(albumDetails[0].metadata).artist}
            </div>
            <div>
              {albumDetails && JSON.parse(albumDetails[0].metadata).year} •{" "}
              {albumDetails && albumDetails.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div
            className="playButton"
            onClick={() => {
              setNftAlbum(albumDetails);
            }}
          >
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
              )
            }
          >
            OpenSea
            <img src={Opensea} alt="ss" className="openLogo" />
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {album &&
          albumDetails.map((nft, i) => {
            nft = JSON.parse(nft.metadata);
            return (
              <>
                <div className="tableContent">
                  <div className="numberHeader">{i + 1}</div>
                  <div
                    className="titleHeader"
                    style={{ color: "rgb(205, 203, 203)" }}
                  >
                    {nft.name}
                  </div>
                  <div className="numberHeader">{nft.duration}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Album;
