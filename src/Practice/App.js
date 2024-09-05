import React, { useState } from 'react';
import moment from 'moment';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'

import styles from './issues.module.css';

const tasksData = {
    '2024-09-01': ['Task 1'],
    '2024-09-05': ['Task 3']
    // Add more dates and tasks as needed
  };
  


const TimelineNavigation = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [currentDay, setCurrentDay] = useState(moment().startOf('month'));

  // Function to update the current month and adjust adjacent months
  const handleMonthClick = (monthsToAdd) => {
    const newMonth = currentMonth.clone().add(monthsToAdd, 'months');
    setCurrentMonth(newMonth);
    setCurrentDay(newMonth.clone().startOf('month')); // Update days to the start of the new month
  };

  // Get the three adjacent months
  const getAdjacentMonths = () => {
    return [
      currentMonth.clone().subtract(1, 'months'), // Previous Month
      currentMonth, // Current Month (Middle)
      currentMonth.clone().add(1, 'months'), // Next Month
    ];
  };

  // Generate 10 dates for day navigation starting from currentDay
  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      dates.push(currentDay.clone().add(i, 'days'));
    }
    return dates;
  };

  return (
    <div className={styles.timeline_main_container}>
      {/* Month Navigation Header */}
      <div className={styles.months_tile_container}>
        {getAdjacentMonths().map((month, index) => (
          <button key={index} onClick={() => handleMonthClick(index - 1)} className={styles.month_tile}>
            {month.format('MMMM')}
          </button>
        ))}
      </div>



      {/* Day Navigation with Vertical Lines */}
      <div className={styles.timeline_navigation}>
        <button onClick={() => setCurrentDay(currentDay.clone().subtract(1, 'days'))} className={styles.dates_pagination_btn}><MdKeyboardArrowLeft size={"22px"} /></button>
        <div className={styles.dates_tile_container}>
        {getDates().map((date, index) => {
            const dateString = date.format('YYYY-MM-DD');
            const tasks = tasksData[dateString];

            return (
              <div key={index} className={styles.date_tile}>
                <div>{date.format('DD')}</div>
                {tasks && (
                  <>
                    <div style={{
                      width: '1px',
                      height: '671px',
                      backgroundColor: '#C9C9C9',
                      position: 'absolute',
                      top: '30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}></div>
                    <div style={{
                      marginTop: '100px',
                      position: 'absolute',
                      transform: 'translateX(-15px)',
                      zIndex: 1,
                    }}>
                      {tasks.map((task, taskIndex) => (
                        <div className={styles.task_card_main_container}>
                            <div className={styles.card_highlighter}></div>
                            <Card key={taskIndex} content={task} />
                        </div>
                        
                      ))}
                    </div>
                  </>
                )}
                </div>
            );
          })}
        </div>
        <button onClick={() => setCurrentDay(currentDay.clone().add(1, 'days'))} className={styles.dates_pagination_btn}><MdKeyboardArrowRight size={"22px"} /></button>
      </div>

      <div className={styles.timeline_content}></div>
    </div>
  );
};

// Simple Card Component
const Card = ({ content }) => {
  return (
    <div className={styles.card_container}>
      <p className={styles.card_task_name}>Finalize the Logo and Poster Design</p>
      <p className={styles.card_task_due}>(Due Today)</p>
    </div>
  );
};

export default TimelineNavigation;
