/* eslint-disable max-len */
import React, { useState, FormEvent, useEffect } from "react";
import { FiChevronRight, FiStar } from "react-icons/fi";
import { GoStar, GrFavorite } from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import {} from "@material-ui/core";
import api from "../../services/api";
import "./styles.scss";
// import { Title, Form, Info, Error, Header, Button } from "./styles";
import Logo from "src/assets/logo.png";
//@ts-ignore
import iink from "iink-js";
import Header from "../../components/Header";
import SimpleBar from "simplebar-react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { PlayArrow } from "@material-ui/icons";

const Dashboard = () => { 
  const history = useHistory()
 
  // console.log("handwriting1", handwriting);
  //@ts-ignore
  // const canvasI = new handwriting.Canvas(document.getElementById("can"));
  // console.log("canvas1", canvasI);
  // const editorElement = document.getElementById("editor");

  // console.log('iink: ', iink);

  // iink.register(editorElement, {

  //   recognitionParams: {
  //     type: "TEXT",
  //     server: {
  //       applicationKey: "b259a3a3-4ec7-4086-8d9d-d3215a89d85a",
  //       hmacKey: "63773195-5e31-4bfd-a593-a8f5a6a875bb",
  //     },
  //   },
  // });

  return (
    <>
      <Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "50px 50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              cursor: "pointer",
            }}
            className="hexagon"
          >
            <div
              onClick={() => history.push('/Lesson')}
              style={{
                display: "flex",
                marginLeft: "45px",
                flexDirection: "column",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <PlayArrow
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  justifySelf: "center",
                  fontSize: "60px",
                }}
              />
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "20px",
                  color: "#f47215",
                }}
              >
                Aulas
              </span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "-30px", gap: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
              className="hexagon"
            >
              <span style={{ fontSize: "20px", color: "#f47215" }}>Ajuda</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
              className="hexagon"
            >
              <span style={{ fontSize: "20px", color: "#f47215" }}>Termos</span>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Dashboard;
