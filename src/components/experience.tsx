import React from "react";
import Section from "./section";
import Subtitle from "./subtitle";
import Timeline from "./timeline";
import Job from "./job";

const jobs = [
  {
    id: "sparkcentral",
    from: "04-2018",
    to: "Present",
    company: "Sparkcentral",
    jobTitle: "Software Engineer"
  },
  {
    id: "sirus",
    from: "05-2015",
    to: "03-2018",
    company: "Sirus NV",
    jobTitle: "Software Engineer"
  },
  {
    id: "wkb",
    from: "09-2007",
    to: "04-2015",
    company: "Wolters Kluwer Belgium",
    jobTitle: "Senior Developer"
  }
];

const Experience = () => (
  <Section>
    <Subtitle>Experience</Subtitle>
    <Timeline items={jobs}>
      {({ from, to, company, jobTitle }) => (
        <Job from={from} to={to} jobTitle={jobTitle} company={company} />
      )}
    </Timeline>
  </Section>
);

export default Experience;
