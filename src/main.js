import React from "react";
import { assets } from "./asset";
import "./main.css";
const main = () => {
  return (
    <div className="Main">
      <div className="container">
        <div className="left-box">
          <p className="color1">Transform Your Website</p>
          <p className="texttop">With Motion Art Effect</p>
        </div>
        <div className="center-box">
          <div className="center1">
            <div className="text1">
              Attract Your<br></br>Visitors Attention<br></br>With Colorful
              <br></br>
              <p className="color1">Motion Art Effect</p>
            </div>
          </div>
          <div className="center2">
            <p>
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="text-after">
        <div className="text-after-1">
          <p>Trusted by thousands of users around the world</p>
        </div>
      </div>
      <div className="rating">
        <div className="rate1">
          <div className="img1">
            <img src={assets.img2} alt="" />
          </div>
          <div className="review">
            <div className="rate-img1">
              <img src={assets.img4} alt="" />
            </div>
            4.5 Score, 9 Review
          </div>
        </div>

        <div className="rate2">
          <div className="img1">
            <img src={assets.img1} alt="" />
          </div>
          <div className="review">
            <div className="rate-img1">
              <img src={assets.img4} alt="" />
            </div>
            4.5 Score,9 Reviews
          </div>
        </div>

        <div className="rate3">
          <div className="img1">
            <img src={assets.img3} alt="" />
          </div>
          <div className="review">
            <div className="rate-img1">
              <img src={assets.img4} alt="" />
            </div>
            4.5 Score,9 Reviews
          </div>
        </div>
      </div>

      <div className="magic">
        <div className="left-magic">
          <div className="left1">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </div>
          <div className="left2">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </div>
          <div className="left3">
            <button>Purchase From Envato --</button>
          </div>
        </div>
        <div className="right-magic">
          <img src={assets.img5} alt="" />
        </div>
      </div>

      <div className="sections">
        <div className="sec">Apply On Any Section Or Enable For Whole Page</div>
      </div>
      {/* pages */}
      <div className="pages">
        <div className="leftpage">
          <p className="leftpage1">Apply On Section</p>
          <p className="leftpage2">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <div className="pageimg">
            <img src={assets.img11} alt="" />
          </div>
        </div>
        <div className="rightpage">
          <div className="rightpage1">
            <p className="rightpage11">Apply On Page</p>
            <p className="rightpage22">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.{" "}
            </p>
            <div className="pageimg">
              <img src={assets.img10} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* social */}

      <div className="social">
        <div className="soc1">Supported by All Popular Browsers</div>
        <div className="soc2">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </div>
        <div className="soc3">
          <img src={assets.img8} alt="" />
        </div>
      </div>
      <div className="features">
        <div className="features1">
          An All-Round Plugin With Powerful Features
        </div>
        <div className="features2">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </div>
      </div>

      <div className="threeimg">
        <div className="threeimg1">
          <img src={assets.img9} alt="" />
          <p className="text222">Light Weight</p>
          <p className="text333">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        <div className="threeimg2">
          <img src={assets.img6} alt="" />
          <p className="text222">100% Responsive</p>
          <p className="text333">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        <div className="threeimg3">
          <img src={assets.img7} alt="" />
          <p className="text222">User Friendly Interface</p>
          <p className="text333">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
