import Welcome from "../components/Welcome/Welcome.component";
import About from "../components/About/About.component";
import ProjectsList from "../components/ProjectsList/ProjectsList.component";
import Footer from "../components/Footer/Footer.component";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Bozidar&apos;s Portfolio</title>
      </Head>

      <div>
        <Welcome />
        <About />
        <ProjectsList title='Front End Projects' />
        <ProjectsList title='Back End Projects' />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
