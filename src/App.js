import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Layout } from "antd";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import Spotify from "./images/Spotify.png";
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  return (
    <Layout>
      <Sider width="300">
        {" "}
        <img src={Spotify} alt="" className="logo" />
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{ fontSize: "30px" }} />
        </div>
      </Sider>

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
