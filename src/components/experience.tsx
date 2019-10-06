import React from "react";
import Section from "./section";
import Timeline from "./timeline";
import Job from "./job";

const jobs = [
  {
    id: "sparkcentral",
    from: "04-2018",
    to: "Present",
    company: "Sparkcentral",
    jobTitle: "Software Engineer",
    technologies: [
      { id: "XP", name: "XP" },
      { id: "React", name: "React" },
      { id: "GraphQL", name: "GraphQL" },
      { id: "Redux", name: "Redux" },
      { id: "Java", name: "Java" }
    ]
  },
  {
    id: "sirus",
    from: "05-2015",
    to: "03-2018",
    company: "Sirus NV",
    jobTitle: "Software Engineer",
    technologies: [
      { id: "Scrum", name: "Scrum" },
      { id: "C#", name: "C#" },
      { id: "AngularJs", name: "AngularJs" },
      { id: "NServiceBus", name: "NServiceBus" }
    ]
  },
  {
    id: "wkb",
    from: "09-2007",
    to: "04-2015",
    company: "Wolters Kluwer Belgium",
    jobTitle: "Senior Developer",
    technologies: [
      { id: "C++", name: "C++" },
      { id: "C#", name: "C#" },
      { id: "JavaScript", name: "JavaScript" }
    ]
  }
];

const Experience = () => (
  <Section>
    <Timeline items={jobs}>
      {({ from, to, company, jobTitle, technologies }) => (
        <Job
          from={from}
          to={to}
          jobTitle={jobTitle}
          company={company}
          technologies={technologies}
        />
      )}
    </Timeline>
  </Section>
);

export default Experience;
