import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1234567"
            title="Introducing Blink Mini | Compact indoor plug-in smart security camera, 1080p HD video, motion detection, Works with Alexa | 1 Camera"
            price={31.18}
            image="https://images-na.ssl-images-amazon.com/images/I/71VEryDkYKL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="7654321"
            title="Dyon Smart TV black [Energy Class A+]"
            price={110}
            image="https://images-na.ssl-images-amazon.com/images/I/81z-ohJ4mZL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Levi's Men's The L Pack Slim (Red Batwing) Backpack, 14x29x45 cm"
            price={42.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81YCe6ZTtSL._AC_SY695._SX._UX._SY._UY_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Roborock S6 MaxV Robot Vacuum Cleaner with Wiping Function, Vacuum Cleaner Robot with ReactiveAI and LiDAR Navigation, 2500 Pa Suction Power and Multi-Level Mapping"
            price={720}
            image="https://images-na.ssl-images-amazon.com/images/I/61w8D3KTY1L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="3252354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          {" "}
          <Product
            id="6548523"
            title="DJI Mavic Air 2"
            price={819.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61dTIORiRqL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="
            Xiaomi Mi Smart Band 5 Fitness & Activity Tracker with 1.1 Inch Full AMOLED Touch Colour Display"
            price={39.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61UZ41QdbCL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {" "}
          <Product
            id="95175365"
            title="
            Teufel Consono 35 Mk3 5.1 Set Home Cinema Speaker 5.1 Sound System Cinema Surround Subwoofer Movie High-End HiFi Speaker"
            price={368.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZjdFsKGiL._AC_SL1300_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
