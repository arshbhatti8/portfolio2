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
        <h4>@Walmart E-Commerce</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="001"
        dateText="09/2019 – Present"
        style={{ color: "#e86971" }}
      >
        <h3>Software Engineer</h3>
        <h4>@Wejo</h4>
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
    </Timeline>
  );
};

export default WorkExperience;
