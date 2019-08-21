import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import {ReactComponent as Briefcase} from '../assets/briefcase.svg';
import {ReactComponent as EMC2} from '../assets/blackboard.svg';
import {ReactComponent as Formula} from '../assets/formula.svg';

import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => {
    return (
        <VerticalTimeline className="verticalTimeline">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<Briefcase/>}>
                <div>
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h5 className="vertical-timeline-element-subtitle">Wejo, San Jose</h5>
                </div>
                <h6>Tech Stack: ReactJS, NodeJS, ExpressJS, Javascript ES6, AWS Cognito, AWS Amplify, Plotly.js, React Map GL,Bootstrap, Polyfills, Git, Enzyme, Jest
                </h6>
                <br/>
                <ul>
                    <li>
                        Designed and created visual insights using graphs and charts visualizing data aggregated into
                        batches from a data stream.
                    </li>
                    <li>
                        Created interactive visualizations with animations highlighting geographic areas on the map
                        based on company data using React Map GL.
                    </li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<Briefcase/>}>
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<Briefcase/>}>
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<Briefcase/>}>
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                icon={<Briefcase/>}>
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                icon={<Briefcase/>}>
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{background: '#fff', color: 'black'}}
                icon={<Formula/>}>
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual
                    Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                icon={<EMC2/>}/>
        </VerticalTimeline>
    );
};

export default WorkExperience;