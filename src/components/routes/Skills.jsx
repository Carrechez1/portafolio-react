import React, { useState } from "react";

import "../../css/skills.css";
import Navbar from "../../shared/Navbar";
import Particle from "../Particle";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(true);
  };
  return (
    <div className="skills">
      <header className="header">
        <Navbar />
      </header>
      <div></div>
      <div className="contenedor">
        <div className="caja">
          <div className="cara cara1">
            <img src="cubo/programacion.jpg" alt="" />
          </div>
          <div className="cara cara2">
            <img src="cubo/html.jpg" alt="" />
            {/*cara 5*/}
          </div>
          <div className="cara cara3">
            <img src="cubo/css.png" alt="" />
          </div>
          <div className="cara cara4">
            <img src="cubo/javascriptt.jpg" alt="" />
          </div>
          <div className="cara cara5">
            <img src="cubo/react.png" alt="" /> {/*cara 4*/}
          </div>
          <div className="cara cara6">
            {/*cara 3*/}
            <img src="cubo/git.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="skill__container">
        <div className="skill__info">
          <h2 className="skill__title">Habilidades tecnicas</h2>
          <span className="skill__span">
            <p className="skill__spanP">
              Poseo habilidades en tecnologias como:{" "}
            </p>
            <ul className="skill__list">
              <li className="skill__item1">HTML</li>
              <li className="skill__item2">CSS</li>
              <li className="skill__item3"> JavaScript</li>
              <li className="skill__item4">React</li>
              <li className="skill__item5">GitHub</li>
            </ul>
          </span>
        </div>
        <div className="habilidades">
          <h2 className="habilidades__title">Habilidades blandas</h2>
          <ul className="habilidades__lista">
            <li>
              {open ? (
                <div className="openCont">
                  <div className="open">Responsable</div>
                </div>
              ) : (
                <div className={`habilidades__item1`} onClick={openClose}>
                  Responsable
                </div>
              )}
            </li>
            <li className="habilidades__item2">Adaptabilidad</li>
            <li className="habilidades__item3">Liderazgo</li>
            <li className="habilidades__item4">Trabajo en equipo</li>
            <li className="habilidades__item5">Trabajo bajo presion</li>
            <li className="habilidades__item6">Honesto</li>
            <li className="habilidades__item7">Iniciativa</li>
            <li className="habilidades__item8">Inteligencia emocional</li>
            <li className="habilidades__item9">Toma de decisiones</li>
          </ul>
        </div>
      </div>

      <Particle />
    </div>
  );
};

export default Skills;
