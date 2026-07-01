import dynamic from "next/dynamic";
import { openSource, showContactUs } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

const Sidebar = dynamic(() => import("../components/Sidebar"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const ContactUs = dynamic(() => import("../components/ContactUs"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));

export default function Home({ githubProfileData }: { githubProfileData: GithubUserType }) {
  return (
    <>
      <SEO />
      <div className="portfolio-layout">
        <Sidebar />
        <main className="portfolio-main">
          <Greetings />
          <Skills />
          <Proficiency />
          <Experience />
          <Education />
          <Projects />
          {showContactUs ? <ContactUs /> : null}
          <GithubProfileCard {...githubProfileData} />
          <footer className="portfolio-footer">
            <p>
              Designed &amp; Built by{" "}
              <a href="https://github.com/patelabhi1607" target="_blank" rel="noopener noreferrer">
                Abhishek Patel
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return { props: { githubProfileData } };
}
