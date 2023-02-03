import Head from 'next/head';
import HeroView from '../components/HeroView/HeroView';
import ProjectsView from '../components/ProjectsView/ProjectsView';
import { ProjectType } from '../types';
import Footer from '../components/Footer/Footer';

export default function Home({ projects }: { projects: ProjectType[] }) {
  return (
    <>
      <Head>
        <title>Bozhidar&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroView />
        <ProjectsView projects={projects} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://portfolio-api-topaz.vercel.app/api/projects', {
    // @ts-ignore
    headers: {
      Authorization: process.env.AUTH
    }
  });
  const projects = await res.json();

  return { props: { projects }, revalidate: 10 };
}
