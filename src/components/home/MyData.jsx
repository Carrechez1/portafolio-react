import React, { useState } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
import Particle from "../Particle";

const MyData = () => {
  const [windon, setWindon] = useState();
  const navigate = useNavigate();
  let handleClick = () => {};

  const click = () => {
    setWindon(window.scroll(0, 0));
  };
  return (
    <div className="myData">
      <h2
        onClick={
          (handleClick = () => {
            navigate("/aboutme");
            click();
          })
        }
        id="data1"
        className="myData1"
      >
        Sobre mi
      </h2>
      <h2
        onClick={
          (handleClick = () => {
            navigate("/skills");
            click();
          })
        }
        className="myData2"
      >
        Mis habilidades
      </h2>
      <h2
        onClick={
          (handleClick = () => {
            navigate("/projects");
            click();
          })
        }
        className="myData3"
      >
        Proyectos
      </h2>
      <div>
        <Particle />
      </div>
    </div>
  );
};

export default MyData;
