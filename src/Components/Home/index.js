import React from "react";
import Product from "../Product/index";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YTFhNjA1Y2It/YTFhNjA1Y2It-YzFmMzZlZjEt-w1500._CB655779869_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={10.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            }
            rating={5}
          />
          <Product
            id="2"
            title="Sony WF-XB700 Truly Wireless Bluetooth Headphones, with Extra Bass, up to 18h battery life, splash and sweat resistance, Built-in Mic and Voice Assistant - Blue"
            price={40.99}
            image={
              "https://m.media-amazon.com/images/I/31lixml-zfL._AC_SY200_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="HyperX HX-KB1SS2-UK Alloy FPS RGB Mechanical Gaming Keyboard, Kailh Silver Speed Switches (UK Layout)"
            price={32.99}
            image={
              "https://m.media-amazon.com/images/I/41-PrCV0t-L._AC_SY200_.jpg"
            }
            rating={2}
          />{" "}
          <Product
            id="4"
            title="ELEGOO Mega 2560 Project The Most Complete Ultimate Starter Kit Compatible with Arduino IDE w/TUTORIAL, MEGA 2560 R3 Controller Board, LCD 1602, Servo, Stepper Motor"
            price={14.49}
            image={
              "https://m.media-amazon.com/images/I/61OrVLH1OaL._AC_SY200_.jpg"
            }
            rating={4}
          />{" "}
          <Product
            id="5"
            title="TV Wall Bracket, Swivel Tilt Solid Sturdy TV Mount for 13-42 Inch TVs, 35kg Weight Capacity, Max VESA 200X200mm, Spirit Level, Cable Ties Included"
            price={30}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41IdONArKML._AC_SY200_.jpg"
            }
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Cadbury Dairy Milk Chocolate Gift Bar 850g"
            price={1000}
            image={
              "https://m.media-amazon.com/images/I/41s9m74y7fL._AC_SY200_.jpg"
            }
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
