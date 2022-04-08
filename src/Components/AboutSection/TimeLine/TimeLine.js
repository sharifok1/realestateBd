import React from 'react';
import './TimeLine.css'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
const TimeLine = () => {
    return (
      <div>
        <h1
        style={{
          color:'#05a',
          textAlign:'left',
         marginLeft:'10%',
         fontWeight:800,
         paddingTop:'50px'
        }}
        >Time Line</h1>
      <Timeline lineColor={'#ddd'}>
        
        <TimelineItem
      
          key="001"
          dateText="2025"
          style={{ color: '#00d' }}
        >
         <div   className="time-1">
            <div className='timeline-block'>
            <h3>EDISON LAVENDER | WELLSPRING OF SERENITY SOUNDNESS</h3>
          <p>
          Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population.
          </p>
            </div>
         </div>
      </TimelineItem>
        <TimelineItem
      
          key="001"
          dateText="2024"
          style={{ color: '#00d' }}
        >
         <div   className="time-2">
         <div className='timeline-block'>
         <h3>EDISON LAVENDER | WELLSPRING OF SERENITY SOUNDNESS</h3>
          <p>
          Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population.
          </p>
         </div>
         </div>
      </TimelineItem>
        <TimelineItem
      
          key="001"
          dateText="2023"
          style={{ color: '#00d' }}
        >
         <div   className="time-3">
          <div className='timeline-block'>
          <h3>EDISON LAVENDER | WELLSPRING OF SERENITY SOUNDNESS</h3>
          <p>
          Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population.
          </p>
          </div>
         </div>
      </TimelineItem>
        <TimelineItem
      
          key="001"
          dateText="2022"
          style={{ color: '#00d' }}
        >
         <div   className="time-4">
            <div className='timeline-block'>
            <h3>EDISON LAVENDER | WELLSPRING OF SERENITY SOUNDNESS</h3>
          <p>
          Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population.
          </p>
            </div>
         </div>
      </TimelineItem>
        </Timeline>
       </div>
    );
};
// hi//
export default TimeLine;

