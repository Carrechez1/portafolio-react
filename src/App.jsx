import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Skills from "./components/routes/Skills";
import AboutMe from "./components/routes/AboutMe";
import Projects from "./components/routes/Projects";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
