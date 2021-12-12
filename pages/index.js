import Welcome from "../components/Welcome/Welcome.component";
import About from "../components/About/About.component";
import ProjectsList from "../components/ProjectsList/ProjectsList.component";
import Footer from "../components/Footer/Footer.component";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <About />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default HomePage;
