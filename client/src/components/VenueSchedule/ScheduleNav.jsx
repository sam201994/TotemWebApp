import React from 'react';
import styles from '../Styles.css';
import { updateStage, updateDay } from '../../redux/actions/venueScheduleActions.js';

export const ScheduleNav = ({ days, stages, selectedDay, selectedStage }) => (
  <nav>
    <select
      id="days-dropdown"
      className={styles.select + ' ui selection fluid dropdown sched-nav'}
      value={selectedDay}
      onChange={updateValue.bind(this, 'days-dropdown')}>
      {Object.keys(days).map((day, i) => (
        <option key={i} value={days[day]}>{day}</option>
      ))}
    </select>
    <select
      id="stages-dropdown"
      className={styles.select + ' ui selection fluid dropdown spacing-dropdown sched-nav'}
      value={selectedStage}
      onChange={updateValue.bind(this, 'stages-dropdown')}>
      <option value="All Stages">All Stages</option>
      {stages.map((stage, i) => (
        <option key={i} value={stage}>
          {stage}
        </option>
      ))}
    </select>
  </nav>
);

function updateValue(id, e) {
  const value = document.getElementById(id).value;
  return id === 'days-dropdown' ? updateDay(value) : updateStage(value);
}

export default ScheduleNav;
