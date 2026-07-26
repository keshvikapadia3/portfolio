import About from "../components/About";
import Skills from "../components/Skills";

function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "FastAPI",
    "SQL",
    "Git & GitHub"
  ];

  return (
    <>
      <About />

      <Skills skillList={skills} />
    </>
  );
}

export default Home;