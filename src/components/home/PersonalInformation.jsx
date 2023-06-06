import React from "react";
import Particle from "../Particle";

const personalInformation = () => {
  return (
    <article className="personal">
      <header className="personalImg">
        <img className="img" src="/porta3.jpg" alt="" />
      </header>
      <main className="personalData">
        <h2 className="name">
          Hola, soy Jose Carrero <br /> Diseñador y desarrollador web
        </h2>
        <div className="contacto">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/josealejandro.carrerosanchez"
                target={"_blank"}
                className="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/josealejandrocarrerosanchez/"
                target={"_blank"}
                className="instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jose-carrero-40a115241/"
                className="linkedin"
                target={"_blank"}
              >
                <i className=" fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:carrechez1@gmail.com"
                className="gmail "
                target={"_blank"}
              >
                <i className="  fa-regular fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+584161706020"
                className="whatsapp "
                target={"_blank"}
              >
                <i className="  fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="cv">
          <a
            className="verCV"
            href="cv/CV-Jose-Carrero-front.pdf"
            target={"_blank"}
          >
            <span>Ver CV</span>
            <i></i>
          </a>
          <a
            className="dowloadCV"
            href="cv/CV-Jose-Carrero-front.pdf"
            download={"CV-Jose-Carrero-Front"}
          >
            <span>Descargar CV</span>
            <i></i>
          </a>
        </div>
      </main>
    </article>
  );
};

export default personalInformation;
