import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;
const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Featured" key="1">
          Content of Tab Pane 1
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
