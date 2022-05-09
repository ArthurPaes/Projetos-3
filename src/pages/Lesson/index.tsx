/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useEffect, useState, useContext } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import api from "../../services/api";

import Header from "../../components/Header";
import { Button } from "@material-ui/core";

import { HandwritingInput } from "../../react-handwriting-recognition";
import keyboard from 'react-handwriting-keyboard';


const Lesson: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const InputComponent =({style}:{style:any}) =>  {
    const showKeyboard = (e:any) => {
      const input = e.target;
      keyboard.show({
        target: e.target,
        onChange: (value:any) => {
          console.log('value: ', value);
          input.value = value;
        },
      });
    };
    return <input style={style} type="text" onClick={showKeyboard} />
  }


  useEffect(() => {
    console.log("inputValue", inputValue);
  }, []);

  console.log('can1')

  let controls;


  return (
    <>
      <Header />
      <div
        style={{
          overflow: "scroll",
          overflowX: "scroll",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div style={{ display: "flex" }}>
          <InputComponent style={{
              border: "1px solid black",
              height: "400px",
              width: "800px",
              marginTop: "20px",
            }}/>
          {/* <canvas
            id="can"
            width="400"
            height="400"
            style={{ border: "2px solid", cursor: "crosshair" }}
          ></canvas> */}
          {/* <HandwritingInput
            applicationKey="b259a3a3-4ec7-4086-8d9d-d3215a89d85a"
            hmacKey="63773195-5e31-4bfd-a593-a8f5a6a875bb"
            protocol="WebSocket"
            onChange={(e: any) => setInputValue(e.target.value)}
            onError={(error: any) => console.log("erorr", error)}
            onInit={(controls:any) => controls = controls}
          /> */}
          {/* <div
            style={{
              border: "1px solid black",
              height: "400px",
              width: "800px",
              marginTop: "20px",
            }}
          ></div> */}
          <div>
            <div
              style={{
                border: "1px solid black",
                marginLeft: "20px",
                height: "300px",
                width: "200px",
                marginTop: "20px",
              }}
            ></div>
            <Button
              style={{
                backgroundColor: "#FF8B1F",
                marginTop: "20px",
                marginLeft: "20px",
              }}
              variant="contained"
              type="submit"
              color="primary"
            >
              Confirmar resposta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
