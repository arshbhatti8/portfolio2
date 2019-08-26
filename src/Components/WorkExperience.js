import React from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';

import WorkExperienceCard from './WorkExperienceCard';

import {ReactComponent as Briefcase} from '../assets/briefcase.svg';
import {ReactComponent as EMC2} from '../assets/blackboard.svg';
import {ReactComponent as Formula} from '../assets/formula.svg';

import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => {
    return (
        <VerticalTimeline className="verticalTimeline">
            {data.map((dataItem, index) => <WorkExperienceCard {...dataItem} key={index}/>)}
        </VerticalTimeline>
    );
};

const data = [{
    date: "Jan 2019 - July 2019",
    title: "Software Engineer",
    subtitle: "Wejo, San Jose",
    techStack: "ReactJS, NodeJS, ExpressJS, Javascript ES6, AWS Cognito, AWS Amplify, Plotly.js, React Map GL,Bootstrap, Polyfills, Git, Enzyme, Jest",
    responsibilities: ["Designed and created visual insights using graphs and charts visualizing data aggregated into batches from a data stream.",
        "Created interactive visualizations with animations highlighting geographic areas on the map based on company data using React Map GL.",
        "Made the application very responsive to adapt to different screen sizes and cross-compatibility for different browsers using polyfills for browsers like Internet explorer.",
        "Made bar charts, gauge charts, area charts, heatmaps and scatter plots using Plotly.js.",
        "Built forms with complex custom validation logic for example for: password policy by checking for conditions in real-time, giving visual feedback using CSS animations.",
        "Created a Role Based access, custom interface for AWS Cognito using its API to create, view and delete users with complex trees of users."]
}, {
    date: " July 2018 – September 2018",
    title: "Front End Developer Intern",
    subtitle: "SAP Ariba, Palo Alto",
    techStack: "Angular.js, Javascript ES6, TypeScript, GraphQL, Apollo, Karma, Jasmine, Gherkin, Cucumber, Selenium Web Driver",
    responsibilities: ["Enhanced existing codebase to support user tracking from front-end.",
        "Lead the User Tracking initiative that tracks user’s activities site-wide.",
        "Wrote Services in Angular 4 for HTTP calls to Java Microservices based Ingestor service.",
        "Made a directive that is reusable and attachable to any HTML element, dispatching an event using the above said angular HTTP service.",
        "Built charts using D3 to visualize data, extracting data from a GraphQL endpoint.",
        "Made AJAX calls by subscribing to an Apollo observable to get data in real time from GraphQL endpoint.",
        "Wrote unit tests, maintaining code coverage upwards of 85%."]
}, {
    date: " July 2014- October 2015",
    title: "Software Engineer",
    subtitle: "SAP Ariba, Palo Alto",
    techStack: "Angular JS, Node JS, React JS, HTML, CSS, Bootstrap, JQuery, AJAX",
    responsibilities: ["Made Single Page Applications (SPA) for clients, writing test cases for individual components.",
        "Worked with React-Redux ecosystem to support complex data manipulation on the frontend.",
        "Maintained application state using Redux.",
        "Supported SPA solutions for clients in Angular.",
        "Maintained and enhanced capabilities of enterprise level AngularJS codebase to support internal tools.",
        "Tested the solutions for clients by writing Unit Test Case in Jest and Jasmine according the framework used.",
        "Performed manual testing of web pages developed.",
        "Worked in an agile environment to meet project deadlines."]
}];

export default WorkExperience;