/* eslint-disable max-len */
import React, { useState, FormEvent, useEffect } from "react";
import { FiChevronRight, FiStar } from "react-icons/fi";
import { GoStar, GrFavorite } from "react-icons/all";
import { Link } from "react-router-dom";
import {} from "@material-ui/core";
import Logo from "../assets/logo.png";
import SimpleBar from "simplebar-react";

const Header: React.FC = ({ children }) => {
  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          position: "sticky",
          height: "100px",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#FFD5AD",
          top: 0,
        }}
      >
        <div
          style={{
            zIndex: -2,
            display: "flex",
            position: "absolute",
            height: "100px",
            width: "100%",
            alignItems: "center",
            backgroundColor: "#FFD5AD",
            top: 0,
          }}
          className="header-img"
        ></div>
        <div
          style={{
            width: "100%",
            margin: "0px 40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              position: "absolute",
              marginTop: "-20px",
              marginLeft: "-20px",
              display: "block",
              width: "60px",
              height: "60px",
            }}
            src={Logo}
            alt="aa"
          />
          <div>
            <span style={{ marginLeft: "50px" }}>Contei</span>
          </div>

          <div
            className="home-buttons"
            style={{
              display: "flex",
              gap: "50px",
              textDecorationColor: "#FF8B1F",
            }}
          >
            <span>Home</span>
            <span>Sobre</span>
            <span>Fale conosco</span>
            <span></span>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Header;
