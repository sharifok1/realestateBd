import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import JobApply from '../JobApply/JobApply';
import JobPost from '../JobPost/JobPost';

const CaareerParents = () => {
    return (
        <div>
            <NavBars/>
            <JobPost/>
            <JobApply/>
            <Footer/>
        </div>
    );
};

export default CaareerParents;