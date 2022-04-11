import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";
const { TabPane } = Tabs;

const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Featured" key="1">
          <h1 className="featuredTitle">Today Is the Day</h1>
          <div className="albums">
            {library.map((album, i) => (
              <Link
                key={i}
                to={`/album`}
                state={album}
                className="albumSelection"
              >
                <img
                  src={album.image}
                  alt="something"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{album.title}</p>
              </Link>
            ))}
          </div>
        </TabPane>
        <TabPane tab="Genres & Moods" key="2">
          <h1 className="featuredTitle">Pop Hits</h1>
          <div className="albums ">
            {library.slice(4, 13).map((album, i) => (
              <Link
                key={i}
                to={`/album`}
                state={album}
                className="albumSelection"
              >
                <img
                  src={album.image}
                  alt="something"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{album.title}</p>
              </Link>
            ))}
          </div>
        </TabPane>
        <TabPane tab="New Releases" key="3">
          <div className="scrollable-Container">
            <h1 className="featuredTitle">Pop Music</h1>
            <div className="albums">
              {library.slice(0, 6).map((album, i) => (
                <Link
                  key={i}
                  to={`/album`}
                  state={album}
                  className="albumSelection"
                >
                  <img
                    src={album.image}
                    alt="something"
                    style={{ width: "150px", marginBottom: "10px" }}
                  />
                  <p>{album.title}</p>
                </Link>
              ))}
            </div>
            <h1 className="featuredTitle">Top Music</h1>
            <div className="albums">
              {library.slice(7, 11).map((album, i) => (
                <Link
                  key={i}
                  to={`/album`}
                  state={album}
                  className="albumSelection"
                >
                  <img
                    src={album.image}
                    alt="something"
                    style={{ width: "150px", marginBottom: "10px" }}
                  />
                  <p>{album.title}</p>
                </Link>
              ))}
            </div>
            <h1 className="featuredTitle">Country</h1>
            <div className="albums">
              {library.slice(11, 13).map((album, i) => (
                <Link
                  key={i}
                  to={`/album`}
                  state={album}
                  className="albumSelection"
                >
                  <img
                    src={album.image}
                    alt="something"
                    style={{ width: "150px", marginBottom: "10px" }}
                  />
                  <p>{album.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Home;
