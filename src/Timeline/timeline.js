import React, { useState } from 'react';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import 'react-calendar-timeline/lib/Timeline.css';
import styles from './TimelineTab.module.css';

import './timelinestyles.css';

import { TimelineHeaders, DateHeader } from 'react-calendar-timeline';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TimelineTab = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const numberOfDays = 7; // Fixed number of visible days
  const dayWidth = 100; // Fixed width per day in pixels

  const tasks = [
    {
      id: 1,
      group: 1,
      title: 'Finalize the Logo and Poster Design',
      start_time: moment().startOf('week').add(10, 'days'),
      end_time: moment().startOf('week').add(13, 'days'),
      assignedTo: 'Terry Saris', // Custom property for the person's name
      due: 'Today', // Custom property for due date
      itemProps: {
        style: { backgroundColor: 'lightblue', color: 'black' },
      },
    },
  ];


  const customItemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    return (
      <div
        {...getItemProps({
          style: {
            ...itemContext.style,
            backgroundColor: '#D5F3FE',
            borderRadius: '10px',
            padding: '10px',
            color: '#333',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ADD8E6',
            display: 'flex',
            alignItems: 'center',
          },
        })}
      >
        <div style={{ marginRight: '10px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1ED4C1',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {item.assignedTo.split(' ').map(name => name[0]).join('')}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.assignedTo}</div>
          <div>{item.title}</div>
          <div style={{ fontSize: '12px', color: '#999' }}>{`(Due ${item.due})`}</div>
        </div>
      </div>
    );
  };


  const handleDayPagination = (days) => {
    setCurrentDate(currentDate.clone().add(days, 'days'));
  };

  // Define the visible time range based on fixed number of days
  const visibleTimeStart = currentDate.clone().startOf('week').valueOf();
  const visibleTimeEnd = currentDate.clone().startOf('week').add(numberOfDays, 'days').valueOf();

  // Calculate milliseconds per pixel to fix day width
  const msPerDay = 24 * 60 * 60 * 1000;
  const msPerPixel = msPerDay / dayWidth; // e.g., 86400000 ms / 100px = 864000 ms/px

  

  return (
    <div className={styles.timeline_tab_container}>
      {/* Month Navigation Header with Tiles */}
      <div className={styles.months_tile_container}>
        <div
          className={styles.month_tile}
          onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'month'))}
        >
          {currentDate.clone().subtract(1, 'month').format('MMMM')}
        </div>
        <div
          className={styles.month_tile}
          onClick={() => setCurrentDate(currentDate)}
        >
          {currentDate.format('MMMM')}
        </div>
        <div
          className={styles.month_tile}
          onClick={() => setCurrentDate(currentDate.clone().add(1, 'month'))}
        >
          {currentDate.clone().add(1, 'month').format('MMMM')}
        </div>
      </div>

      {/* Week Navigation Section */}
      <div className='timeline-container'>
        <button onClick={() => handleDayPagination(-1)} className={styles.dates_pagination_btn}>
          <MdKeyboardArrowLeft size={"22px"} />
        </button>
      

      {/* Timeline Display */}
      <div className="timeline-wrapper">
        <Timeline
          groups={[
            { id: 1, title: 'Group 1' },
            { id: 2, title: 'Group 2' }
          ]}
          items={tasks}
          itemHeight={600}
          defaultTimeStart={visibleTimeStart}
          itemRenderer={customItemRenderer} 
          defaultTimeEnd={visibleTimeEnd}
          visibleTimeStart={visibleTimeStart}
          visibleTimeEnd={visibleTimeEnd}
          timeSteps={{ day: 1 }} // Fixed to 1 day per time step
          sidebarWidth={0}
          rightSidebarWidth={0}
          groupRenderer={() => null} // Hide group labels
          canMove={false}
          canResize={false}
          minZoom={msPerDay / dayWidth} // Prevent zooming out/in
          maxZoom={msPerDay / dayWidth} // Prevent zooming out/in
          style={{ paddingLeft: 0, width: `${numberOfDays * dayWidth}px` }} // Fixed width
        >
          <TimelineHeaders>
            <DateHeader
              unit="day"
              labelFormat="D"
              intervalRenderer={({ getIntervalProps, intervalContext }) => {
                const dayDate = moment(intervalContext.intervalStart);
                const isToday = dayDate.isSame(moment(), 'day');
                const tileClass = isToday ? styles.timeline_header_tile_today : styles.timeline_header_tile;

                return (
                  <div {...getIntervalProps()} className={tileClass}>
                    {intervalContext.intervalText}
                  </div>
                );
              }}
            />
          </TimelineHeaders>
        </Timeline>
      </div>
      <button onClick={() => handleDayPagination(1)} className={styles.dates_pagination_btn}>
          <MdKeyboardArrowRight size={"22px"} />
        </button>
      </div>
    </div>
  );
};

export default TimelineTab;
