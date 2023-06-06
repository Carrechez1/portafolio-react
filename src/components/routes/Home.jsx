import React from "react";
import MyData from "../home/MyData";
import PersonalInformation from "../home/PersonalInformation";

const Home = () => {
  return (
    <section className="home">
      <article className="P1">
        <MyData />
      </article>
      <article className="P2">
        <PersonalInformation />
      </article>
    </section>
  );
};

export default Home;
