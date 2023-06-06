import React, { useRef } from "react";
import "../../css/projects.css";
import Navbar from "../../shared/Navbar";
import Particle from "../Particle";

const Projects = () => {
  const addClass1 = useRef();
  const addClass2 = useRef();
  const addClass3 = useRef();
  const addClass4 = useRef();
  setTimeout(function () {
    addClass1.current.className = "abrir projects__card";
  }, 500);
  setTimeout(function () {
    addClass2.current.className = "abrir projects__card";
  }, 1000);
  setTimeout(function () {
    addClass3.current.className = "abrir projects__card";
  }, 2000);
  setTimeout(function () {
    addClass4.current.className = "abrir projects__card";
  }, 3000);
  return (
    <div className="projects">
      <header className="header">
        <Navbar />
      </header>
      <div className="container">
        <section className="projects__contain">
          {/*1*/}
          <article className="x1" ref={addClass1}>
            <div className="face front">
              <img className="im" src="imgprojects/clima.png" alt="" />
              <h3>Aplicacion del clima</h3>
            </div>
            <div className="face back">
              <h3>Aplicacion del clima</h3>
              <p>
                Tecnologias: CSS-HTML-REACT.JS.
                <br />
                <br />
                Aplicacion del clima totalmente funcional desarrollada a traves
                de una API.
              </p>
              <div className="link">
                <a href="https://weather-app252.netlify.app/" target={"_blank"}>
                  <i class="bx bx-world"></i>
                </a>
                <a
                  href="https://github.com/Carrechez1/weather-app"
                  target={"_blank"}
                >
                  <i className="bx bxl-github git"></i>
                </a>
              </div>
            </div>
          </article>
          {/*2*/}
          <article className="x2" ref={addClass2}>
            <div className="face front">
              <img className="im" src="imgprojects/rick1.PNG" alt="" />
              <h3>Wiki Rick &amp; Morty</h3>
            </div>
            <div className="face back">
              <h3>Wiki Rick &amp; Morty</h3>
              <p>
                Tecnologias: CSS-HTML-REACT.JS.
                <br />
                <br />
                Wiki funcional diseñada con base en la API de Rick & Morty.
              </p>
              <div className="link">
                <a
                  href="https://rick-and-morty312.netlify.app/"
                  target={"_blank"}
                >
                  <i class="bx bx-world"></i>
                </a>
                <a
                  href="https://github.com/Carrechez1/Rick-and-Morty"
                  target={"_blank"}
                >
                  <i className="bx bxl-github git"></i>
                </a>
              </div>
            </div>
          </article>
          {/*3*/}
          <article className="x3" ref={addClass3}>
            <div className="face front">
              <img className="im" src="imgprojects/pokedex1.PNG" alt="" />
              <h3>Pokedex</h3>
            </div>
            <div className="face back">
              <h3>pokedex</h3>
              <p>
                Tecnologias: CSS-HTML-REACT.JS-REACT ROUTER-REDUX.
                <br />
                <br />
                pokedex desarrollada a traves de la api de Pokemon. Aqui
                podremos ver toda la informacion de nuestros pokemon favoritos,
                sus stats y habilidades.
              </p>
              <div className="link">
                <a
                  href="https://pokeapialejandrocarrero.netlify.app/#/pokedex"
                  target={"_blank"}
                >
                  <i class="bx bx-world"></i>
                </a>
                <a href="https://github.com/Carrechez1/pokeapi">
                  <i className="bx bxl-github git" target={"_blank"}></i>
                </a>
              </div>
            </div>
            {/*4*/}
          </article>
          <article className="x4" ref={addClass4}>
            <div className="face front">
              <img className="im" src="imgprojects/E-Comerce.PNG" alt="" />
              <h3>E-Commerce</h3>
            </div>
            <div className="face back">
              <h3>E-Commerce</h3>
              <p>
                Tecnologias: CSS-HTML-REACT.JS-REACT ROUTER-REDUX.
                <br />
                <br />
                E-Commerce en desarrollo, cumple con todas las funciones
                necesarias para el manejo del mismo, como el registro de
                usuarios,manejo de tokens, poder añadir y eliminar cosas del
                carrito, registro de compras realizadas.
              </p>
              <div className="link">
                <a
                  href="https://e-comerceacademlogen16.netlify.app/#/"
                  target={"_blank"}
                >
                  <i class="bx bx-world"></i>
                </a>
                <a
                  href="https://github.com/Carrechez1/e-comerce"
                  target={"_blank"}
                >
                  <i className="bx bxl-github git"></i>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Particle />
    </div>
  );
};

export default Projects;
