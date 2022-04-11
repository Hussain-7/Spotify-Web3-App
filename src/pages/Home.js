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
            {library.map((album) => (
              <Link to={`/album`} state={album} className="albumSelection">
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
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="New Releases" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default Home;
