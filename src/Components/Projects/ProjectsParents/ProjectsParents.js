import React from 'react';
import NavBars from '../../Shared/NavBars/NavBars';
import AllProjects from '../Allprojects/AllProjects';
import ProjectsBanner from '../ProjectsBanner/ProjectsBanner';

const ProjectsParents = () => {
    return (
        <div>
            <NavBars></NavBars>
            <ProjectsBanner></ProjectsBanner>
            <AllProjects/>
        </div>
    );
};

export default ProjectsParents;