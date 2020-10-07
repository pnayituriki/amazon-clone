import React from "react";
import "./Home.css";
import Header from "../../Shared/Navbar/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        alt=""
      />
    </div>
  );
}

export default Home;
