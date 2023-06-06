import React, { useRef } from "react";
import "../../css/aboutMe.css";
import Navbar from "../../shared/Navbar";
import Particle from "../Particle";

const AboutMe = () => {
  const addClasss = useRef();
  const addClass = useRef();
  setTimeout(function () {
    addClasss.current.className = "abrir ";
  }, 50);
  setTimeout(function () {
    addClass.current.className = "abrir about__continf";
  }, 500);
  return (
    <div className="aboutMe" id="principio">
      <header className="header">
        <Navbar />
      </header>
      <div className="about__contenedor">
        <div className="x" ref={addClasss}>
          <div className="card">
            <div className="imgBox">
              <img src="/porta2.jpg" alt="" />
              <img src="/porta6.jpg" alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>
                  Jose Carrero <br /> <span>Programador web Full Stack</span>
                </h2>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/josealejandro.carrerosanchez"
                    target={"_blank"}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/josealejandrocarrerosanchez/"
                    target={"_blank"}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jose-carrero-40a115241/"
                    target={"_blank"}
                  >
                    <i className=" fa-brands fa-linkedin"></i>
                  </a>

                  <a href="mailto:carrechez1@gmail.com" target={"_blank"}>
                    <i className="  fa-regular fa-envelope"></i>
                  </a>

                  <a href="https://wa.me/+584161706020" target={"_blank"}>
                    <i className="  fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="X" ref={addClass}>
          <span>
            <h2 className="sobremi">Un poco sobre mi</h2>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;Mi nombre es Jose Alejandro Carrero Sanchez,
              tengo 23 años y soy de Venezuela Edo Tachira. Tengo estudios en
              ING en Sistemas y soy egresado de Academlo, tengo experiencia en
              tecnologias como CSS, HTML, Javascript, REACT, Node-JS y Postgres.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;Soy una persona activa, responsable, que busca
              siempre la mejor y optima solucion a los problemas que se
              presentan, me encanta dar todo de mi en mis trabajos, siendo una
              persona que da todo por su equipo, para poder lograr las metas que
              la empresa nos pida, queriendo siempre superar las expectativas
              impuestas por la misma.
            </p>
            <br />
            <br />
            <br />
          </span>
        </div>
      </div>
      <div>
        <Particle />
      </div>
    </div>
  );
};

export default AboutMe;
