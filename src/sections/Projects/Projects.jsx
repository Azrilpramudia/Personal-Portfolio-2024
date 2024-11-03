import styles from "./ProjectsStyles.module.css";
import himatif from "../../assets/himatif.png";
import golang from "../../assets/golang.png";
import uninus from "../../assets/uninus.png";
import nodejs from "../../assets/nodejs.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={himatif}
          link="https://github.com/Azrilpramudia/uninus-himatif"
          h3="Himatif Uninus"
          p="Official Website"
        />
        <ProjectCard
          src={golang}
          link="https://github.com/Azrilpramudia/crud-react-go"
          h3="Fullstack CRUD"
          p="Golang & React"
        />
        <ProjectCard
          src={uninus}
          link="https://github.com/Azrilpramudia/uninus-event-register"
          h3="Uninus Register"
          p="Registration Form"
        />
        <ProjectCard
          src={nodejs}
          link="https://github.com/Azrilpramudia/FullStack-CRUD-NodeJs"
          h3="CRUD Javascript"
          p="NodeJS & Express"
        />
      </div>
    </section>
  );
}

export default Projects;
