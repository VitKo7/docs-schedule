import React from 'react';
import data from './data.json';

// transform planned appointments into ms;
const updateAppointments = (appointments) => {
  let busyTime = [];

  for (let i = 0; i < appointments.length; i++) {
    let startMS = new Date('1970-01-01 ' + appointments[i].start + ':00+0000').getTime();
    let durationMS = appointments[i].duration * 60000;
    busyTime.push({ start: startMS, duration: durationMS });
  }

  return busyTime;
};

const convertMsIntoHoursMinutes = (ms) => {
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  minutes = String(minutes) === '0' ? '00' : String(minutes);
  return String(hours) + ':' + minutes;
};

const getWorkIntervals = (data) => {
  let result = [];
  let appointments = updateAppointments(data.appointments);

  let startWorkShiftMS = new Date('1970-01-01 ' + data.start + ':00+0000').getTime();
  let endWorkShiftMS = new Date('1970-01-01 ' + data.end + ':00+0000').getTime();
  const MEETING_SLOT = 2700000; // 45 min. in ms


  // get possible appointments in ms
  for (let i = startWorkShiftMS; i < endWorkShiftMS && (endWorkShiftMS - i) > MEETING_SLOT; i += MEETING_SLOT) {

    //cross check with already planned appointments
    for (let j = 0; j < appointments.length; j++) {
      let startMS = appointments[j].start;
      let durationMS = appointments[j].duration;

      if (startMS >= i && startMS < (i + MEETING_SLOT)) {
        i = startMS + durationMS;
      }
    }
    result.push(convertMsIntoHoursMinutes(i));
  }
  console.log('result', result);
  return result;
};

const Schedule = () => {
  let schedule = getWorkIntervals(data);

  return (
    <div>
      <h3>Доступний час для запису на прийом до лікаря:</h3>
      <h4>[{schedule.join(", ")}]</h4>
    </div>
  )
}

export default Schedule;