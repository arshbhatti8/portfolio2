import React from 'react';
import {VerticalTimelineElement} from "react-vertical-timeline-component";

import {ReactComponent as Briefcase} from "../assets/briefcase.svg";


const WorkExperienceCard = ({date,title,subtitle,techStack,responsibilities}) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
            icon={<Briefcase/>}>
            <div className="timelineCardTitleHeader">
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>
            </div>
            <br/>
            <h6>{techStack}</h6>
            {responsibilities.map((responsibility,index)=><p key={index}>{responsibility}</p>)}
        </VerticalTimelineElement>
    );
};

export default WorkExperienceCard;