import React from "react";
import dynamic from "next/dynamic";
import PersonInfo from "./components/person-info";
import CommitGraph from "./components/commit-graph";
import Introduction from "./components/introduction";
import SocialInfo from "./components/social-info";
import Educational from "./components/educational";
import SkillList from "./components/skill-list";
import Projects from "./components/project-experience";
import WorkExperience from "./components/work-experience";
import Thanks from "./components/thanks";

const DynamicAppInitial = dynamic(() => import("./components/app-initial"), { ssr: false });

const App = () => (
  <DynamicAppInitial>
    <PersonInfo />
    <CommitGraph />
    <Introduction />
    <SocialInfo />
    <Educational />
    <SkillList />
    <Projects />
    <WorkExperience />
    <Thanks />
  </DynamicAppInitial>
);

export default App;
