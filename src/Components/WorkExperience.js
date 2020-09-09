import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const WorkExperience = () => {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="09/2019 – Present"
        style={{ color: "#e86971" }}
      >
        <h3>Front End - Full Stack Developer</h3>
        <h4>@Walmart E-Commerce, Sunnyvale, CA</h4>
        <p>
          Tech Stack:{" "}
          <b>
            React, Redux, Javascript ES6,Cypress, Jest, Enzyme, Google Optimize,
            Google Tag Manager, Lighthouse, React Testing Library,Webpack,
            HTML5, CSS3,Lodash.
          </b>
        </p>
        <p>
          As the sole Front-End Engineer, I lead the implementation of features
          across 4 different codebases for 4 different Walmart Businesses in
          Mexico.
        </p>
        <p>
          Implemented features on the FE that have led to earnings/cost-savings
          of over $100M Pesos/year for Walmart.
        </p>
        <p>
          Collaborated with multiple teams using Agile methodology and put
          people over processes and products.
        </p>
        <p>
          Implemented unit and integration testing framework using Jest,Enzyme
          and React Testing Library.
        </p>
        <p>
          Did Performance evaluations of Client-Side Applications using Chrome
          Lighthouse and made apps performant using best practices.
        </p>
        <p>
          Launched all features using A/B implementation using Google Optimizie,
          to take a data-driven approach towards UX.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="01/2019 – 08/2019"
        style={{ color: "#e86971" }}
      >
        <h3>Software Engineer</h3>
        <h4>@Wejo, San Jose, CA</h4>
        <p>
          Tech Stack:{" "}
          <b>
            ReactJS, NodeJS, ExpressJS, Javascript ES6, AWS Cognito, AWS
            Amplify, Plotly.js, React Map GL,Bootstrap, Polyfills, Git, Enzyme,
            Jest.
          </b>
        </p>
        <p>
          Designed and created visual insights using graphs and charts
          visualizing data aggregated into batches from a data stream.
        </p>
        <p>
          Created interactive visualizations with animations highlighting
          geographic areas on the map based on company data using React Map GL.
        </p>
        <p>
          Made the application very responsive to adapt to different screen
          sizes and cross-compatibility for different browsers using polyfills
          for browsers like Internet explorer.
        </p>
        <p>
          Made bar charts, gauge charts, area charts, heatmaps and scatter plots
          using Plotly.js.
        </p>
        <p>
          Built forms with complex custom validation logic for example for:
          password policy by checking for conditions in real-time, giving visual
          feedback using CSS animations
        </p>
        <p>
          Created a Role Based access, custom interface for AWS Cognito using
          its API to create, view and delete users with complex trees of users.
          Lead the programming standards initiative to maintain code quality and
          best practices throughout the Wejo ecosystem
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="07/2018 – 09/2018"
        style={{ color: "#e86971" }}
      >
        <h3>Software Engineer</h3>
        <h4>@SAP Ariba, Palo Alto, CA</h4>
        <p>
          Tech Stack:{" "}
          <b>
            Angular.js, Javascript ES6, TypeScript, GraphQL, Apollo, Karma,
            Jasmine
          </b>
        </p>
        <p>
          Lead the User Tracking initiative that tracks user’s activities
          site-wide.
        </p>
        <p>
          Made a directive that is reusable and attachable to any HTML element,
          dispatching an event using the above said angular HTTP service.
        </p>
        <p>
          Built charts using D3 to visualize data, extracting data from a
          GraphQL endpoint.
        </p>
        <p>
          Made AJAX calls by subscribing to an Apollo observable to get data in
          real time from GraphQL endpoint.
        </p>
        <p>Wrote unit tests, maintaining code coverage upwards of 85%.</p>
      </TimelineItem>
    </Timeline>
  );
};

export default WorkExperience;
